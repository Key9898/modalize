import { useEffect, useCallback } from 'react';
import type { BottomSheetProps } from '../../types';
import { Portal } from '../../utils/portal';
import { useScrollLock } from '../../hooks/useScrollLock';
import { X } from 'lucide-react';

/**
 * Mobile-friendly bottom sheet component.
 */
export function BottomSheet({
  isOpen,
  onClose,
  title,
  showHandle = true,
  closeOnBackdrop = true,
  radius,
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

  if (!isOpen) return null;

  const radiusClass = radius ? `modalize-bottomsheet--radius-${radius}` : '';

  return (
    <Portal>
      {/* Backdrop */}
      <div
        className="modalize-backdrop z-[1000]"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div
        className={`modalize-bottomsheet ${radiusClass} z-[1001]`}
        role="dialog"
        aria-modal="true"
      >
        {showHandle && (
          <div className="modalize-bottomsheet__handle">
            <div className="modalize-bottomsheet__handle-bar" />
          </div>
        )}

        {title && (
          <div className="modalize-header">
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

        <div className="modalize-body modalize-body--scrollable flex-1">
          {children}
        </div>
      </div>
    </Portal>
  );
}
