import { Modal } from '../Modal';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';
import type { ConfirmModalProps } from '../../types';

const variantStyles = {
  danger: 'btn-error',
  warning: 'btn-warning',
  info: 'btn-info',
  success: 'btn-success',
};

const variantIcons: Record<string, React.ReactNode> = {
  danger: <AlertTriangle className="h-6 w-6 text-error" />,
  warning: <AlertTriangle className="h-6 w-6 text-warning" />,
  info: <Info className="h-6 w-6 text-info" />,
  success: <CheckCircle className="h-6 w-6 text-success" />,
};

/**
 * Pre-built confirmation modal for yes/no and delete dialogs.
 */
export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'info',
  size = 'sm',
  loading = false,
  closeOnConfirm = true,
}: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    if (closeOnConfirm) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="flex gap-4 items-start">
          {variantIcons[variant] && (
            <div className="flex-shrink-0 mt-0.5">
              {variantIcons[variant]}
            </div>
          )}
          <p className="text-base-content/80">{message}</p>
        </div>
      </Modal.Body>
      <Modal.Footer align="right">
        <button
          className="btn btn-ghost btn-sm"
          onClick={onClose}
          disabled={loading}
        >
          {cancelText}
        </button>
        <button
          className={`btn btn-sm ${variantStyles[variant]}`}
          onClick={handleConfirm}
          disabled={loading}
        >
          {loading && <span className="loading loading-spinner loading-xs" />}
          {confirmText}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
