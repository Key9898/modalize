import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Drawer</button>
        <Drawer {...args} isOpen={isOpen} onClose={close}>
          <div className="p-4">
            Drawer content goes here.
          </div>
        </Drawer>
      </>
    );
  },
  args: {
    position: 'right',
    size: 'md',
    title: 'Menu Drawer',
  },
};
