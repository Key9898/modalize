import { Modal } from '../Modal';
import type { LoadingModalProps } from '../../types';

/**
 * Pre-built loading/progress modal.
 */
export function LoadingModal({
  isOpen,
  message = 'Loading...',
  showProgress = false,
  progress = 0,
  spinner = 'default',
  radius,
}: LoadingModalProps) {
  const spinnerClass = {
    default: 'loading-spinner',
    dots: 'loading-dots',
    pulse: 'loading-ring',
  }[spinner];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      size="sm"
      radius={radius}
      closeOnEsc={false}
      closeOnBackdrop={false}
    >
      <Modal.Body>
        <div className="flex flex-col items-center text-center py-8">
          <span className={`loading ${spinnerClass} loading-lg text-primary mb-4`} />
          <p className="text-base-content/80">{message}</p>
          {showProgress && (
            <div className="w-full mt-4">
              <progress
                className="progress progress-primary w-full"
                value={progress}
                max={100}
              />
              <p className="text-xs text-base-content/50 mt-1">{progress}%</p>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
