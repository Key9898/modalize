/* eslint-disable react-refresh/only-export-components */
import { useEffect, useCallback, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ModalProps } from './Modal.types';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalContext } from './ModalContext';
import { Portal } from '../../utils/portal';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useScrollLock } from '../../hooks/useScrollLock';
import { getModalA11yProps, announceToScreenReader } from '../../utils/a11y';

// ===== Modal Stack Management =====

let modalStack: number[] = [];
let nextModalId = 0;

function pushModal(): number {
  const id = nextModalId++;
  modalStack.push(id);
  return id;
}

function popModal(id: number) {
  modalStack = modalStack.filter(m => m !== id);
}

function isTopModal(id: number): boolean {
  return modalStack[modalStack.length - 1] === id;
}

function getStackIndex(id: number): number {
  return modalStack.indexOf(id);
}

// ===== Modal Component =====

/**
 * Base Modal component using the compound components pattern.
 *
 * @example
 * ```tsx
 * <Modal isOpen={isOpen} onClose={close}>
 *   <Modal.Header>Title</Modal.Header>
 *   <Modal.Body>Content</Modal.Body>
 *   <Modal.Footer>
 *     <button className="btn" onClick={close}>Close</button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
function ModalRoot({
  isOpen,
  onClose,
  size = 'md',
  radius = 'lg',
  closeOnEsc = true,
  closeOnBackdrop = true,
  animation = true,
  className = '',
  overlayClassName = '',
  zIndex,
  portal = true,
  portalContainer,
  ariaLabel,
  ariaDescribedBy,
  children,
}: ModalProps) {
  const modalIdRef = useRef<number>(-1);
  const titleId = useId();
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);

  // Scroll lock
  useScrollLock(isOpen);

  // Register/unregister from modal stack and announce
  useEffect(() => {
    if (isOpen) {
      modalIdRef.current = pushModal();
      announceToScreenReader(ariaLabel || 'Modal opened');
    }
    return () => {
      if (modalIdRef.current >= 0) {
        popModal(modalIdRef.current);
      }
    };
  }, [isOpen, ariaLabel]);

  // Handle Close
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // ESC key handler
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isTopModal(modalIdRef.current)) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEsc, handleClose]);

  // Backdrop click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnBackdrop && e.target === e.currentTarget) {
        handleClose();
      }
    },
    [closeOnBackdrop, handleClose]
  );

  // Calculate z-index positions
  // eslint-disable-next-line react-hooks/refs
  const stackIndex = Math.max(0, getStackIndex(modalIdRef.current));
  const zIndexBase = 1000 + stackIndex * 10;
  const computedZIndexBackdrop = zIndex || zIndexBase;
  const computedZIndexModal = zIndex ? zIndex + 1 : zIndexBase + 1;

  const a11yProps = getModalA11yProps({
    ariaLabel,
    ariaDescribedBy,
    titleId,
  });

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <ModalContext.Provider
          value={{
            onClose: handleClose,
            size,
            isClosing: false, // Legacy fallback for types
            titleId,
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`modalize-backdrop ${overlayClassName}`}
            style={{ zIndex: computedZIndexBackdrop }}
            onClick={handleBackdropClick}
            aria-hidden="true"
          >
            {/* Modal Panel Container - Centers the modal */}
            <div className="flex items-center justify-center min-h-full p-4">
              <motion.div
                ref={containerRef}
                initial={
                  animation ? { opacity: 0, scale: 0.95, y: 10 } : undefined
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  animation ? { opacity: 0, scale: 0.95, y: 10 } : undefined
                }
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                className={`modalize-modal modalize-modal--${size} modalize-modal--radius-${radius} ${className}`}
                style={{ zIndex: computedZIndexModal }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                {...a11yProps}
              >
                {children}
              </motion.div>
            </div>
          </motion.div>
        </ModalContext.Provider>
      )}
    </AnimatePresence>
  );

  if (portal) {
    return <Portal container={portalContainer}>{modalContent}</Portal>;
  }

  return modalContent;
}

// ===== Compound Component Export =====

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Backdrop: ModalBackdrop,
});
