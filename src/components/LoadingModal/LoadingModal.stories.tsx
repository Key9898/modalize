import type { Meta, StoryObj } from '@storybook/react';
import { LoadingModal } from './LoadingModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof LoadingModal> = {
  title: 'Components/App/LoadingModal',
  component: LoadingModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Loading</button>
        <div className="absolute opacity-0">
          <button id="closeLoadingTest" onClick={close}></button>
        </div>
        <LoadingModal 
           {...args} 
           isOpen={isOpen} 
        />
        {/* Helper to close since loading modal overlays without close buttons */}
        <p className="mt-4 text-xs">Press ESC to close loading modal visually in storybook.</p>
      </>
    );
  },
  args: {
    message: 'Processing your payment...',
    spinner: 'default'
  },
};
