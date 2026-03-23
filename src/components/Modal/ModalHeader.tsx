import type { ModalHeaderProps } from './Modal.types';
import { X } from 'lucide-react';
import { useModalContext } from './ModalContext';

/**
 * Modal header with title and optional close button.
 *
 * @example
 * ```tsx
 * <Modal.Header>My Title</Modal.Header>
 * <Modal.Header showCloseButton={false}>No Close</Modal.Header>
 * ```
 */
export function ModalHeader({
  className = '',
  showCloseButton = true,
  children,
}: ModalHeaderProps) {
  const { onClose } = useModalContext();

  return (
    <div className={`modalize-header ${className}`}>
      <h2 className="modalize-header__title" id="modalize-title">
        {children}
      </h2>
      {showCloseButton && (
        <button
          type="button"
          className="modalize-header__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
