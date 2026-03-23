import { Modal } from '../Modal';
import { Inbox } from 'lucide-react';
import type { EmptyStateModalProps } from '../../types';

/**
 * Pre-built empty state / no-data modal.
 */
export function EmptyStateModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  action,
  radius,
}: EmptyStateModalProps) {
  const defaultIcon = (
    <Inbox className="h-16 w-16 text-base-content/30" strokeWidth={1} />
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" radius={radius}>
      <Modal.Body>
        <div className="flex flex-col items-center text-center py-8">
          <div className="mb-4">{icon ?? defaultIcon}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-base-content/60 max-w-xs">
              {description}
            </p>
          )}
          {action && (
            <button
              className="btn btn-primary btn-sm mt-6"
              onClick={action.onClick}
            >
              {action.label}
            </button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
