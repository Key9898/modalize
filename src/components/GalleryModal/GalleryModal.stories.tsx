import type { Meta, StoryObj } from '@storybook/react';
import { GalleryModal } from './GalleryModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof GalleryModal> = {
  title: 'Components/Media/GalleryModal',
  component: GalleryModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GalleryModal>;

const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=150',
    title: 'Mountain Lake',
  },
  {
    src: 'https://images.unsplash.com/photo-1682695796954-cbd046772ee5?auto=format&fit=crop&q=80&w=1000',
    thumbnail: 'https://images.unsplash.com/photo-1682695796954-cbd046772ee5?auto=format&fit=crop&q=80&w=150',
    title: 'Desert Dunes',
  },
];

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Gallery</button>
        <GalleryModal 
           {...args} 
           isOpen={isOpen} 
           onClose={close} 
        />
      </>
    );
  },
  args: {
    images: sampleImages,
    showThumbnails: true,
    loop: true,
  },
};
