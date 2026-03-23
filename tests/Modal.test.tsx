import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from '../src/components/Modal';

describe('Modal', () => {
  it('renders correctly when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => { }}>
        <Modal.Header>Test Title</Modal.Header>
        <Modal.Body>Test Body</Modal.Body>
      </Modal>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => { }}>
        <Modal.Header>Test Title</Modal.Header>
        <Modal.Body>Test Body</Modal.Body>
      </Modal>
    );

    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <Modal.Header showCloseButton>Test Title</Modal.Header>
      </Modal>
    );

    const closeButtons = screen.getAllByRole('button');
    // Assuming the close button is one of them, usually the first one in the header
    fireEvent.click(closeButtons[0]);
    expect(handleClose).toHaveBeenCalled();
  });
});
