import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './BottomSheet';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Bottom Sheet</button>
        <BottomSheet {...args} isOpen={isOpen} onClose={close}>
          <div className="p-4 bg-base-100 min-h-[50vh]">
            <h3 className="font-bold text-lg">Sheet Action</h3>
            <p className="py-2">Swipe down to close this sheet.</p>
          </div>
        </BottomSheet>
      </>
    );
  },
  args: {
    showHandle: true,
  },
};
