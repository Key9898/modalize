import { useState } from 'react';
import { Modal } from '../Modal';
import { Download, X } from 'lucide-react';
import type { ImageModalProps } from '../../types';

/**
 * Pre-built modal for displaying a single image with optional zoom and download.
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt || 'image';
    link.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" radius={radius} className="!bg-transparent !shadow-none">
      <div className="relative flex flex-col items-center p-4">
        {/* Top bar */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          {downloadable && (
            <button
              className="btn btn-circle btn-sm btn-ghost bg-base-100/80 shadow-md backdrop-blur-sm"
              onClick={handleDownload}
              aria-label="Download image"
            >
              <Download className="h-4 w-4" />
            </button>
          )}
          <button
            className="btn btn-circle btn-sm btn-ghost bg-base-100/80 shadow-md backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Image */}
        <img
          src={src}
          alt={alt}
          className={`max-w-full max-h-[80vh] object-contain shadow-2xl transition-transform duration-200 rounded-modalize ${
            zoomable ? 'cursor-zoom-in' : ''
          } ${isZoomed ? '!cursor-zoom-out scale-150' : ''}`}
          onClick={() => zoomable && setIsZoomed(!isZoomed)}
        />

        {/* Title */}
        {title && (
          <p className="mt-3 text-sm text-base-content/70 text-center">
            {title}
          </p>
        )}
      </div>
    </Modal>
  );
}
