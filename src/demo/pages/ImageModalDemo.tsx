import { useModal, ImageModal } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, ImageModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <img src="preview.jpg" onClick={open} alt="Preview" />
      <ImageModal
        isOpen={isOpen}
        onClose={close}
        src="full-size.jpg"
        title="Beautiful Landscape"
        downloadable
      />
    </>
  );
}`;

export function ImageModalDemo() {
  const { isOpen, open, close } = useModal();

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Image Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          A focused lightbox for high-resolution images with zoom and download
          capabilities.
        </p>
      </section>

      <section className="card bg-base-200/50 p-6 md:p-12 border border-base-300 items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center gap-6">
          <div
            className="cursor-pointer group relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-500"
            onClick={open}
          >
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop"
              alt="Demo Preview"
              className="group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
              <span className="btn btn-primary btn-md px-6 shadow-xl">
                Detailed Preview
              </span>
            </div>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click the thumbnail above to open the lightbox
          </p>
        </div>

        <ImageModal
          isOpen={isOpen}
          onClose={close}
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=800&fit=crop"
          title="Abstract Gradient Mesh"
          downloadable
        />
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
