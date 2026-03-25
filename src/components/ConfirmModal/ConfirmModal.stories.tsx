import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmModal } from './ConfirmModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>
          Open Confirm Modal
        </button>
        <ConfirmModal
          {...args}
          isOpen={isOpen}
          onClose={close}
          onConfirm={close}
        />
      </>
    );
  },
  args: {
    title: 'Delete Item',
    message:
      'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    variant: 'danger',
  },
};
