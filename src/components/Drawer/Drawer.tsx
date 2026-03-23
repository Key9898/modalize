import { useEffect, useCallback } from 'react';
import type { DrawerProps } from '../../types';
import { Portal } from '../../utils/portal';
import { useScrollLock } from '../../hooks/useScrollLock';
import { X } from 'lucide-react';

/**
 * Drawer/side panel component (left, right, top, bottom).
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

  if (!isOpen) return null;

  const radiusClass = radius ? `modalize-drawer--radius-${radius}` : '';

  return (
    <Portal>
      {/* Backdrop */}
      <div
        className="modalize-backdrop z-[1000]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`modalize-drawer modalize-drawer--${position} modalize-drawer--${size} ${radiusClass} z-[1001]`}
        role="dialog"
        aria-modal="true"
      >
        {(title || showCloseButton) && (
          <div className="modalize-header">
            {title && (
              <h2 className="modalize-header__title">{title}</h2>
            )}
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
      </div>
    </Portal>
  );
}
