import { useState } from 'react';
import { useModal, BottomSheet, type ModalRadius } from '../../index';
import { CodeBlock } from '../components/CodeBlock';
import { Download, Share, Trash2 } from 'lucide-react';

const codeExample = `import { useModal, BottomSheet } from 'modalize';
import { Download, Share, Trash2 } from 'lucide-react';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Open Share Menu</button>
      <BottomSheet isOpen={isOpen} onClose={close} title="Share Options">
        <ul className="menu">
          <li><a><Download /> Download</a></li>
          <li><a><Share /> Re-post</a></li>
          <li><a className="text-error"><Trash2 /> Remove</a></li>
        </ul>
      </BottomSheet>
    </>
  );
}`;

export function BottomSheetDemo() {
  const { isOpen, open, close } = useModal();
  const [radius, setRadius] = useState<ModalRadius>('lg');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Bottom Sheet</h2>
        <p className="text-base-content/60 leading-relaxed">
          A mobile-first slide-up panel. Best for menu items, sharing options,
          and actions on small screens.
        </p>
      </section>

      <section className="card bg-base-200/50 p-6 md:p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <select
              className="select select-bordered select-md bg-base-100 w-48"
              value={radius}
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Bottom sheet radius selector"
            >
              <option value="none">Radius: None</option>
              <option value="sm">Radius: SM</option>
              <option value="md">Radius: MD</option>
              <option value="lg">Radius: LG (Default)</option>
              <option value="xl">Radius: XL</option>
              <option value="2xl">Radius: 2XL</option>
              <option value="full">Radius: Full</option>
            </select>
            <button
              className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20"
              onClick={open}
            >
              Open Share Menu
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Optimized for touch interaction and mobile usage with custom radii
          </p>
        </div>

        <BottomSheet
          isOpen={isOpen}
          onClose={close}
          title="Share Options"
          radius={radius}
        >
          <ul className="menu bg-base-200 rounded-box p-4 gap-2">
            <li>
              <a className="py-3">
                <Download className="w-5 h-5 opacity-70" /> Download Asset
              </a>
            </li>
            <li>
              <a className="py-3">
                <Share className="w-5 h-5 opacity-70" /> Share with Friends
              </a>
            </li>
            <li>
              <a className="text-error py-3">
                <Trash2 className="w-5 h-5" /> Remove Permanently
              </a>
            </li>
          </ul>
        </BottomSheet>
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
