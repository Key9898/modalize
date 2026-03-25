import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius of the modal panel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn btn-primary" onClick={open}>
          Open Base Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={close}>
          <Modal.Header>Example Title</Modal.Header>
          <Modal.Body>This is the modal body content.</Modal.Body>
          <Modal.Footer align="right">
            <button className="btn btn-ghost" onClick={close}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={close}>
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
  args: { size: 'md', closeOnEsc: true, closeOnBackdrop: true },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: 'sm' },
};

export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: 'lg' },
};

export const RadiusNone: Story = {
  ...Default,
  args: { ...Default.args, radius: 'none' },
};

export const RadiusSm: Story = {
  ...Default,
  args: { ...Default.args, radius: 'sm' },
};

export const RadiusXl: Story = {
  ...Default,
  args: { ...Default.args, radius: 'xl' },
};

export const RadiusFull: Story = {
  ...Default,
  args: { ...Default.args, radius: 'full' },
};
