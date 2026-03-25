import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BottomSheetProps } from '../../types';
import { Portal } from '../../utils/portal';
import { useScrollLock } from '../../hooks/useScrollLock';
import { X } from 'lucide-react';

/**
 * Mobile-friendly bottom sheet component with swipe-to-dismiss.
 */
export function BottomSheet({
  isOpen,
  onClose,
  title,
  showHandle = true,
  closeOnBackdrop = true,
  radius = 'xl',
  children,
}: BottomSheetProps) {
  useScrollLock(isOpen);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const radiusClass = radius ? `modalize-bottomsheet--radius-${radius}` : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modalize-backdrop z-[1000]"
            onClick={closeOnBackdrop ? onClose : undefined}
            aria-hidden="true"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 150 || info.velocity.y > 500) {
                onClose();
              }
            }}
            className={`modalize-bottomsheet ${radiusClass} z-[1001] touch-none`}
            role="dialog"
            aria-modal="true"
          >
            {showHandle && (
              <div className="modalize-bottomsheet__handle">
                <div className="modalize-bottomsheet__handle-bar" />
              </div>
            )}

            <div className="flex flex-col h-full max-h-[85vh]">
              {title && (
                <div className="modalize-header bg-base-100/50 backdrop-blur-sm sticky top-0 z-10">
                  <h2 className="modalize-header__title">{title}</h2>
                  <button
                    type="button"
                    className="modalize-header__close"
                    onClick={onClose}
                    aria-label="Close"
                  >
                    <X size={18} strokeWidth={2} />
                  </button>
                </div>
              )}

              <div className="modalize-body modalize-body--scrollable flex-1 pointer-events-auto">
                {children}
              </div>
            </div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
}
