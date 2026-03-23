/* eslint-disable react-refresh/only-export-components */
import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
} from 'react';
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
  const [isClosing, setIsClosing] = useState(false);
  const modalIdRef = useRef<number>(-1);
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen && !isClosing);

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

  // Handle close with animation
  const handleClose = useCallback(() => {
    if (animation) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 150);
      return () => clearTimeout(timer);
    } else {
      onClose();
    }
  }, [animation, onClose]);

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

  if (!isOpen && !isClosing) return null;

  // Calculate z-index classes based on stack position
  // eslint-disable-next-line react-hooks/refs
  const stackIndex = Math.max(0, getStackIndex(modalIdRef.current));
  
  // Use predefined classes to avoid dynamically injected inline styles
  const zIndexBackdropClass = ['z-[1000]', 'z-[1010]', 'z-[1020]', 'z-[1030]', 'z-[1040]'][Math.min(stackIndex, 4)];
  const zIndexModalClass = ['z-[1001]', 'z-[1011]', 'z-[1021]', 'z-[1031]', 'z-[1041]'][Math.min(stackIndex, 4)];

  const a11yProps = getModalA11yProps({
    ariaLabel,
    ariaDescribedBy,
    titleId: 'modalize-title',
  });

  const modalContent = (
    <ModalContext.Provider
      value={{
        onClose: handleClose,
        size,
        isClosing,
      }}
    >
      {/* Backdrop */}
      <div
        className={`modalize-backdrop ${isClosing ? 'modalize-backdrop--closing' : ''} ${!animation ? 'modalize-no-animation' : ''} ${zIndex ? `z-[${zIndex}]` : zIndexBackdropClass} ${overlayClassName}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      >
        {/* Modal Panel */}
        <div
          ref={containerRef}
          className={`modalize-modal modalize-modal--${size} modalize-modal--radius-${radius} ${isClosing ? 'modalize-modal--closing' : ''} ${!animation ? 'modalize-no-animation' : ''} ${zIndex ? `z-[${zIndex + 1}]` : zIndexModalClass} ${className}`}
          onClick={e => e.stopPropagation()}
          {...a11yProps}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
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
