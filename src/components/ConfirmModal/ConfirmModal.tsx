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
  radius,
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
    <Modal isOpen={isOpen} onClose={onClose} size={size} radius={radius}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="flex gap-5 items-start py-2">
          {variantIcons[variant] && (
            <div 
              className="flex-shrink-0 p-2.5 bg-base-200/50 transition-all rounded-modalize"
            >
              {variantIcons[variant]}
            </div>
          )}
          <div className="flex-1 space-y-1">
            <p className="text-base-content/90 font-medium leading-relaxed">{message}</p>
            <p className="text-xs text-base-content/50 tracking-tight italic">This action cannot be undone.</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer align="right">
        <button
          className="btn btn-ghost btn-md w-32 font-semibold"
          onClick={onClose}
          disabled={loading}
        >
          {cancelText}
        </button>
        <button
          className={`btn btn-md w-32 shadow-lg shadow-primary/10 ${variantStyles[variant]}`}
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
