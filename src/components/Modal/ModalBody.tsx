import type { ModalBodyProps } from './Modal.types';

/**
 * Modal body content area, optionally scrollable.
 *
 * @example
 * ```tsx
 * <Modal.Body>Simple content</Modal.Body>
 * <Modal.Body scrollable>Long scrolling content...</Modal.Body>
 * ```
 */
export function ModalBody({
  className = '',
  scrollable = true,
  children,
}: ModalBodyProps) {
  return (
    <div
      className={`modalize-body ${scrollable ? 'modalize-body--scrollable' : ''} ${className}`}
      id="modalize-body"
    >
      {children}
    </div>
  );
}
