import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DrawerProps } from '../../types';
import { Portal } from '../../utils/portal';
import { useScrollLock } from '../../hooks/useScrollLock';
import { X } from 'lucide-react';

const positionVariants = {
  right: { x: '100%', y: 0 },
  left: { x: '-100%', y: 0 },
  top: { x: 0, y: '-100%' },
  bottom: { x: 0, y: '100%' },
};

/**
 * Animated Drawer/side panel component with professional transitions.
 */
export function Drawer({
  isOpen,
  onClose,
  position = 'right',
  size = 'md',
  title,
  showCloseButton = true,
  closeOnEsc = true,
  radius,
  children,
}: DrawerProps) {
  useScrollLock(isOpen);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') onClose();
    },
    [closeOnEsc, onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const radiusClass = radius ? `modalize-drawer--radius-${radius}` : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modalize-backdrop z-[1000]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={positionVariants[position]}
            animate={{ x: 0, y: 0 }}
            exit={positionVariants[position]}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className={`modalize-drawer modalize-drawer--${position} modalize-drawer--${size} ${radiusClass} z-[1001]`}
            role="dialog"
            aria-modal="true"
          >
            {(title || showCloseButton) && (
              <div className="modalize-header">
                {title && <h2 className="modalize-header__title">{title}</h2>}
                {showCloseButton && (
                  <button
                    type="button"
                    className="modalize-header__close"
                    onClick={onClose}
                    aria-label="Close drawer"
                  >
                    <X size={18} strokeWidth={2} />
                  </button>
                )}
              </div>
            )}

            <div className="modalize-body modalize-body--scrollable flex-1">
              {children}
            </div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
}
