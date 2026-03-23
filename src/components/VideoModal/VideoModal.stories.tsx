import type { Meta, StoryObj } from '@storybook/react';
import { VideoModal } from './VideoModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof VideoModal> = {
  title: 'Components/Media/VideoModal',
  component: VideoModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VideoModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Video</button>
        <VideoModal 
           {...args} 
           isOpen={isOpen} 
           onClose={close} 
        />
      </>
    );
  },
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Sample Video',
    autoplay: true,
    controls: true,
  },
};
