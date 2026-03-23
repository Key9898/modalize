import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../components/Modal/Modal';
import type { ModalRadius } from '../../types';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, Modal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={close} size="md" radius="lg">
        <Modal.Header>Welcome to Modalize</Modal.Header>
        <Modal.Body>
          This is a base modal using compound components.
          You can put any content here.
        </Modal.Body>
        <Modal.Footer align="right">
          <button className="btn btn-ghost" onClick={close}>Cancel</button>
          <button className="btn btn-primary" onClick={close}>Proceed</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`;

export function ModalDemo() {
  const { isOpen, open, close } = useModal();
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  const [radius, setRadius] = useState<ModalRadius>('lg');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Base Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          The foundation of the library. Uses a compound component pattern for maximum flexibility.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <select
              className="select select-bordered select-md bg-base-100 w-48"
              value={size}
              onChange={e => setSize(e.target.value as 'sm' | 'md' | 'lg' | 'xl' | 'full')}
              aria-label="Modal size selector"
            >
              <option value="sm">Small (sm)</option>
              <option value="md">Medium (md)</option>
              <option value="lg">Large (lg)</option>
              <option value="xl">XL (xl)</option>
              <option value="full">Full Screen (full)</option>
            </select>
            <select
              className="select select-bordered select-md bg-base-100 w-48"
              value={radius}
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Modal radius selector"
            >
              <option value="none">Radius: None</option>
              <option value="sm">Radius: SM</option>
              <option value="md">Radius: MD</option>
              <option value="lg">Radius: LG</option>
              <option value="xl">Radius: XL</option>
              <option value="2xl">Radius: 2XL</option>
              <option value="full">Radius: Full</option>
            </select>
            <button className="btn btn-primary btn-md w-48 shadow-lg shadow-primary/20" onClick={open}>
              Live Preview
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click to see focus trapping and animations in action
          </p>
        </div>

        <Modal isOpen={isOpen} onClose={close} size={size} radius={radius}>
          <Modal.Header>Base Modal Example</Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <p className="text-base-content/70">
                This modal is rendered via a React Portal to ensure it sits on top of all other content.
                It includes automatic focus management and scroll locking.
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt font-bold text-base-content/40 uppercase">Focus Test Input</span>
                </label>
                <input type="text" className="input input-bordered w-full bg-base-200 border-none" placeholder="Try tabbing..." />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer align="right">
             <button className="btn btn-ghost" onClick={close}>Close</button>
             <button className="btn btn-primary px-6" onClick={close}>Got it</button>
          </Modal.Footer>
        </Modal>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <h3 className="text-xl font-bold">Usage</h3>
        </div>
        <CodeBlock code={codeExample} language="tsx" filename="App.tsx" />
      </section>
    </div>
  );
}
