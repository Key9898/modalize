import { Modal } from '../Modal';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import type { AlertModalProps } from '../../types';

const variantClasses = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
};

const defaultIcons: Record<string, React.ReactNode> = {
  info: <Info className="h-10 w-10" />,
  success: <CheckCircle className="h-10 w-10" />,
  warning: <AlertTriangle className="h-10 w-10" />,
  error: <XCircle className="h-10 w-10" />,
};

/**
 * Pre-built alert modal for simple message display.
 */
export function AlertModal({
  isOpen,
  onClose,
  title = 'Alert',
  message,
  buttonText = 'OK',
  variant = 'info',
  icon,
}: AlertModalProps) {
  const displayIcon = icon ?? defaultIcons[variant];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <Modal.Body>
        <div className="flex flex-col items-center text-center py-4">
          {displayIcon && (
            <div className={`mb-4 ${variantClasses[variant]}`}>
              {displayIcon}
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-base-content/70">{message}</p>
        </div>
      </Modal.Body>
      <Modal.Footer align="center">
        <button className="btn btn-primary btn-sm btn-wide" onClick={onClose}>
          {buttonText}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
