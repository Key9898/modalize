import type { FormEvent } from 'react';
import { Modal } from '../Modal';
import type { FormModalProps } from '../../types';

/**
 * Generic form container modal.
 */
export function FormModal({
  isOpen,
  onClose,
  onSubmit,
  title = 'Form',
  submitText = 'Submit',
  cancelText = 'Cancel',
  loading = false,
  children,
}: FormModalProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    onSubmit(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <form id="modalize-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
          {children}
        </form>
      </Modal.Body>
      <Modal.Footer align="right">
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={onClose}
          disabled={loading}
        >
          {cancelText}
        </button>
        <button
          type="submit"
          form="modalize-form"
          className="btn btn-primary btn-sm"
          disabled={loading}
        >
          {loading && <span className="loading loading-spinner loading-xs" />}
          {submitText}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
