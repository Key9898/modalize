import { useState } from 'react';
import { useModal, LoadingModal } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, LoadingModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  const handleTask = async () => {
    open();
    // Await background work here
    setTimeout(close, 2000);
  };

  return (
    <>
      <button onClick={handleTask}>Run Task</button>
      <LoadingModal
        isOpen={isOpen}
        message="Optimizing assets... please wait"
        showProgress
        progress={45}
      />
    </>
  );
}`;

export function LoadingModalDemo() {
  const { isOpen, open, close } = useModal();
  const [progress, setProgress] = useState(0);

  const startTask = () => {
    open();
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(close, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Loading Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          Overlay for blocking non-critical user interactions during background
          processes.
        </p>
      </section>

      <section className="card bg-base-200/50 p-6 md:p-12 border border-base-300 items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center gap-6">
          <button
            className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20"
            onClick={startTask}
          >
            Run Background Task
          </button>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Supports progress bars and custom messages
          </p>
        </div>

        <LoadingModal
          isOpen={isOpen}
          message="Optimizing assets... please wait"
          showProgress
          progress={progress}
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
