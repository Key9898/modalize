import type { Meta, StoryObj } from '@storybook/react';
import { EmptyStateModal } from './EmptyStateModal';
import { useModal } from '../../hooks/useModal';
import { FolderX } from 'lucide-react';

const meta: Meta<typeof EmptyStateModal> = {
  title: 'Components/App/EmptyStateModal',
  component: EmptyStateModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyStateModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>
          Open Empty State
        </button>
        <EmptyStateModal
          {...args}
          isOpen={isOpen}
          onClose={close}
          action={{ label: 'Create First Project', onClick: close }}
        />
      </>
    );
  },
  args: {
    title: 'No Projects Found',
    description:
      'Get started by creating a new project. You can add up to 5 projects on the free plan.',
    icon: <FolderX className="w-16 h-16 text-base-content/20" />,
  },
};
