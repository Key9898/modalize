import { useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Modal } from '../Modal';
import { Download, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import type { ImageModalProps } from '../../types';

/**
 * Pre-built modal for displaying a single image with pinch-to-zoom, download, and refined controls.
 */
export function ImageModal({
  isOpen,
  onClose,
  src,
  alt = '',
  title,
  zoomable = true,
  downloadable = false,
  radius,
}: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt || 'image';
    link.click();
  };

  const resetZoom = () => {
    scale.set(1);
    x.set(0);
    y.set(0);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    if (isZoomed) {
      resetZoom();
    } else {
      scale.set(2);
      setIsZoomed(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      radius={radius}
      className="!bg-transparent !shadow-none"
    >
      <div
        ref={containerRef}
        className="relative flex flex-col items-center p-6 sm:p-12 w-full h-full overflow-hidden"
      >
        {/* Top bar - Flex layout instead of absolute to prevent image overlap */}
        <div className="w-full flex justify-end mb-4 sm:mb-8 z-20">
          <div className="flex gap-2 sm:gap-3">
            {zoomable && isZoomed && (
              <button
                className="btn btn-circle btn-sm btn-ghost bg-base-100/80 shadow-lg backdrop-blur-md border border-white/10"
                onClick={resetZoom}
                title="Reset Zoom"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
            {downloadable && (
              <button
                className="btn btn-circle btn-sm btn-ghost bg-base-100/80 shadow-lg backdrop-blur-md border border-white/10"
                onClick={handleDownload}
                aria-label="Download image"
              >
                <Download className="h-4 w-4" />
              </button>
            )}
            <button
              className="btn btn-circle btn-sm btn-ghost bg-base-100/80 shadow-lg backdrop-blur-md border border-white/10"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="flex-1 flex flex-col items-center justify-center w-full min-h-0 overflow-hidden">
          {/* Relative wrapper for the image itself */}
          <div className="relative flex items-center justify-center touch-none">
            <motion.div
              style={{ x, y, scale }}
              drag={isZoomed}
              dragConstraints={containerRef}
              dragElastic={0.1}
              className="relative cursor-grab active:cursor-grabbing"
            >
              <motion.img
                src={src}
                alt={alt}
                className={`max-w-full max-h-[60vh] sm:max-h-[68vh] object-contain shadow-2xl rounded-modalize select-none pointer-events-none transition-shadow ${
                  zoomable && !isZoomed ? 'cursor-zoom-in' : ''
                } ${isZoomed ? 'shadow-none' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {zoomable && !isZoomed && (
                <div
                  className="absolute inset-0 cursor-zoom-in rounded-modalize"
                  onClick={toggleZoom}
                />
              )}
            </motion.div>
          </div>

          {/* Zoom Controls Overlay - Moved into Flex Flow for perfect spacing */}
          {zoomable && (
            <div className="mt-8 z-20 flex gap-1.5 bg-base-100/50 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl scale-110 sm:scale-100">
              <button
                className="btn btn-circle btn-xs btn-ghost hover:bg-base-content/10"
                onClick={() => scale.set(Math.max(1, scale.get() - 0.5))}
                aria-label="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <div className="divider divider-horizontal mx-0.5 opacity-10"></div>
              <button
                className="btn btn-circle btn-xs btn-ghost hover:bg-base-content/10"
                onClick={() => scale.set(Math.min(5, scale.get() + 0.5))}
                aria-label="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        {title && !isZoomed && (
          <p className="mt-6 text-sm text-white/50 text-center font-medium tracking-wide max-w-xs truncate">
            {title}
          </p>
        )}
      </div>
    </Modal>
  );
}
