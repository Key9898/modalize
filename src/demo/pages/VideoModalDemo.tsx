import { useModal, VideoModal } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, VideoModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Play Trailer</button>
      <VideoModal
        isOpen={isOpen}
        onClose={close}
        src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        type="youtube"
        title="Rick Roll"
        autoplay
      />
    </>
  );
}`;

export function VideoModalDemo() {
  const { isOpen, open, close } = useModal();

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Video Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          Optimized modal for video playback from various sources like YouTube
          and Vimeo.
        </p>
      </section>

      <section className="card bg-base-200/50 p-6 md:p-12 border border-base-300 items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center gap-6">
          <button
            className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20"
            onClick={open}
          >
            Play Demo Video
          </button>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Automatic aspect ratio handling and autoplay support
          </p>
        </div>

        <VideoModal
          isOpen={isOpen}
          onClose={close}
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          type="youtube"
          title="Rick Roll"
          autoplay
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
