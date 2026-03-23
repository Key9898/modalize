/**
 * Generates accessibility attributes for modal elements.
 */
export function getModalA11yProps(options: {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  titleId?: string;
}) {
  return {
    role: 'dialog' as const,
    'aria-modal': true as const,
    ...(options.ariaLabel && { 'aria-label': options.ariaLabel }),
    ...(options.titleId && { 'aria-labelledby': options.titleId }),
    ...(options.ariaDescribedBy && {
      'aria-describedby': options.ariaDescribedBy,
    }),
  };
}

/**
 * Generates a unique ID for modal elements.
 */
let idCounter = 0;
export function generateModalId(prefix = 'modalize'): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

/**
 * Announces content to screen readers via a live region.
 */
export function announceToScreenReader(message: string) {
  const announcer = document.createElement('div');
  announcer.setAttribute('role', 'status');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.textContent = message;

  document.body.appendChild(announcer);

  setTimeout(() => {
    document.body.removeChild(announcer);
  }, 1000);
}
