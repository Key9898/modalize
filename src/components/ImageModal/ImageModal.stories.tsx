import type { Meta, StoryObj } from '@storybook/react';
import { ImageModal } from './ImageModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof ImageModal> = {
  title: 'Components/Media/ImageModal',
  component: ImageModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Image</button>
        <ImageModal 
           {...args} 
           isOpen={isOpen} 
           onClose={close} 
        />
      </>
    );
  },
  args: {
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    alt: 'Sample Landscape',
    title: 'Beautiful Mountain View',
    zoomable: true,
    downloadable: true,
  },
};
