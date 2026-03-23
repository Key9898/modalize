import { useState, useCallback, useEffect } from 'react';
import { Modal } from '../Modal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import type { GalleryModalProps } from '../../types';

/**
 * Pre-built gallery modal with image navigation and optional thumbnails.
 */
export function GalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  showThumbnails = true,
  showNavigation = true,
  loop = true,
  onImageChange,
  radius,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const goTo = useCallback(
    (index: number) => {
      let newIndex = index;
      if (loop) {
        if (index < 0) newIndex = images.length - 1;
        if (index >= images.length) newIndex = 0;
      } else {
        if (index < 0 || index >= images.length) return;
      }
      setCurrentIndex(newIndex);
      onImageChange?.(newIndex);
    },
    [images.length, loop, onImageChange]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goNext, goPrev]);

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (swipePower < -100 || offset.x < -50) {
      goNext();
    } else if (swipePower > 100 || offset.x > 50) {
      goPrev();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" radius={radius} className="!bg-transparent !shadow-none">
      <div className="relative select-none">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 btn btn-circle btn-sm btn-ghost bg-base-100/80 shadow-md backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 z-10 badge badge-neutral shadow-md">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Main Image with Swipe Support */}
        <motion.div
          key={currentIndex}
          className="flex items-center justify-center min-h-[400px] touch-pan-y py-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt || ''}
            className="max-w-full max-h-[80vh] object-contain shadow-2xl pointer-events-none rounded-modalize"
          />
        </motion.div>

        {/* Navigation Arrows */}
        {showNavigation && images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-100/80"
              onClick={goPrev}
              aria-label="Previous image"
              disabled={!loop && currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-100/80"
              onClick={goNext}
              aria-label="Next image"
              disabled={!loop && currentIndex === images.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Title */}
        {currentImage.title && (
          <p className="mt-3 text-sm text-base-content/70 text-center">
            {currentImage.title}
          </p>
        )}

        {/* Thumbnails */}
        {showThumbnails && images.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`w-16 h-16 overflow-hidden border-2 transition-all flex-shrink-0 rounded-modalize-sm ${
                  index === currentIndex
                    ? 'border-primary opacity-100 ring-4 ring-primary/20'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
                onClick={() => goTo(index)}
              >
                <img
                  src={image.thumbnail || image.src}
                  alt={image.alt || `Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
