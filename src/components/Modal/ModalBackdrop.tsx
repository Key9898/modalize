interface ModalBackdropProps {
  onClick?: () => void;
  isClosing?: boolean;
  zIndexClass?: string;
  className?: string;
}

/**
 * Semi-transparent backdrop behind the modal.
 */
export function ModalBackdrop({
  onClick,
  isClosing = false,
  zIndexClass = 'z-[1000]',
  className = '',
}: ModalBackdropProps) {
  return (
    <div
      className={`modalize-backdrop ${isClosing ? 'modalize-backdrop--closing' : ''} ${zIndexClass} ${className}`}
      onClick={onClick}
      aria-hidden="true"
      data-testid="modalize-backdrop"
    />
  );
}
