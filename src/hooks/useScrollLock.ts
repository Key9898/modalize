import { useEffect, useRef } from 'react';

/**
 * Locks body scroll when the modal is open.
 * Preserves scrollbar width to prevent layout shift.
 *
 * @param isLocked - Whether scroll should be locked
 */
export function useScrollLock(isLocked: boolean) {
  const scrollbarWidthRef = useRef(0);

  useEffect(() => {
    if (!isLocked) return;

    // Calculate scrollbar width
    scrollbarWidthRef.current =
      window.innerWidth - document.documentElement.clientWidth;

    // Lock body scroll
    document.body.classList.add('modalize-scroll-locked');
    document.body.style.setProperty(
      '--scrollbar-width',
      `${scrollbarWidthRef.current}px`
    );

    return () => {
      document.body.classList.remove('modalize-scroll-locked');
      document.body.style.removeProperty('--scrollbar-width');
    };
  }, [isLocked]);
}
