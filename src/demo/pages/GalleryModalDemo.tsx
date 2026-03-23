import { useState } from 'react';
import { useModal, GalleryModal, type ModalRadius } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, GalleryModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();
  const images = [
    { src: '/img1.jpg', title: 'Image 1' },
    { src: '/img2.jpg', title: 'Image 2' },
  ];

  return (
    <>
      <button onClick={open}>Open Gallery</button>
      <GalleryModal 
        isOpen={isOpen} 
        onClose={close} 
        images={images} 
        loop 
        showThumbnails 
      />
    </>
  );
}`;

const demoImages = [
  { src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop', title: 'Gradient A' },
  { src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop', title: 'Gradient B' },
  { src: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=600&fit=crop', title: 'Gradient C' },
];

export function GalleryModalDemo() {
  const { isOpen, open, close } = useModal();
  const [radius, setRadius] = useState<ModalRadius>('lg');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Gallery Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          Full-screen image gallery with keyboard navigation, touch support, and thumbnail previews.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={radius} 
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Gallery radius selector"
            >
              <option value="none">Radius: None</option>
              <option value="sm">Radius: SM</option>
              <option value="md">Radius: MD</option>
              <option value="lg">Radius: LG (Default)</option>
              <option value="xl">Radius: XL</option>
              <option value="2xl">Radius: 2XL</option>
              <option value="full">Radius: Full</option>
            </select>
            <button className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20" onClick={open}>
              Open Image Gallery
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Supports loop, thumbnails, keyboard, and custom radii
          </p>
        </div>

        <GalleryModal isOpen={isOpen} onClose={close} images={demoImages} loop showThumbnails radius={radius} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <h3 className="text-xl font-bold">Usage</h3>
        </div>
        <CodeBlock code={codeExample} />
      </section>
    </div>
  );
}
