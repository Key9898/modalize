import type { Meta, StoryObj } from '@storybook/react';
import { AlertModal } from './AlertModal';
import { useModal } from '../../hooks/useModal';
import { AlertCircle } from 'lucide-react';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>
          Open Alert
        </button>
        <AlertModal {...args} isOpen={isOpen} onClose={close} />
      </>
    );
  },
  args: {
    title: 'Update Available',
    message: 'A new version of the application is ready to be installed.',
    buttonText: 'Got it',
    variant: 'info',
    icon: <AlertCircle className="w-12 h-12 text-info" />,
  },
};
