import type { ModalFooterProps } from './Modal.types';

/**
 * Modal footer for action buttons with configurable alignment.
 *
 * @example
 * ```tsx
 * <Modal.Footer align="right">
 *   <button className="btn">Cancel</button>
 *   <button className="btn btn-primary">Save</button>
 * </Modal.Footer>
 * ```
 */
export function ModalFooter({
  className = '',
  align = 'right',
  children,
}: ModalFooterProps) {
  return (
    <div className={`modalize-footer modalize-footer--${align} ${className}`}>
      {children}
    </div>
  );
}
