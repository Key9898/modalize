import { Modal } from '../Modal';
import { motion, AnimatePresence } from 'framer-motion';
import type { LoadingModalProps } from '../../types';

/**
 * Pre-built loading/progress modal with professional animations.
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
        <div className="flex flex-col items-center text-center py-10 px-4">
          <div className="relative mb-6">
            <span
              className={`loading ${spinnerClass} loading-lg text-primary drop-shadow-lg`}
            />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 -z-10" />
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-base-content/70 font-medium tracking-tight"
            >
              {message}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence>
            {showProgress && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full mt-6 overflow-hidden"
              >
                <div className="relative pt-1">
                  <progress
                    className="progress progress-primary w-full h-2.5 shadow-inner"
                    value={progress}
                    max={100}
                  />
                </div>
                <div className="flex justify-between mt-2 px-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/30 italic">
                    Processing
                  </span>
                  <span className="text-[10px] font-mono font-bold text-primary">
                    {progress}%
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Modal.Body>
    </Modal>
  );
}
