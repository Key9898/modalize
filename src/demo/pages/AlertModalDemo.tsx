import { useState } from 'react';
import { useModal, AlertModal, type ModalRadius } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, AlertModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Show Alert</button>
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        variant="info"
        title="System Notification"
        message="This is a simple alert message."
      />
    </>
  );
}`;

export function AlertModalDemo() {
  const { isOpen, open, close } = useModal();
  const [variant, setVariant] = useState<'info' | 'success' | 'warning' | 'error'>('info');
  const [radius, setRadius] = useState<ModalRadius>('lg');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Alert Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          Simple informatory modals for notifications and status updates.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={variant} 
              onChange={e => setVariant(e.target.value as 'info' | 'success' | 'warning' | 'error')}
              aria-label="Alert modal variant selector"
            >
              <option value="info">Info</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={radius} 
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Alert modal radius selector"
            >
              <option value="none">Radius: None</option>
              <option value="sm">Radius: SM</option>
              <option value="md">Radius: MD</option>
              <option value="lg">Radius: LG (Default)</option>
              <option value="xl">Radius: XL</option>
              <option value="2xl">Radius: 2XL</option>
              <option value="full">Radius: Full</option>
            </select>
            <button className="btn btn-primary btn-md w-48 shadow-lg shadow-primary/20" onClick={open}>
              Show Alert
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click to trigger a system notification with selected radius
          </p>
        </div>

        <AlertModal
          isOpen={isOpen}
          onClose={close}
          variant={variant}
          radius={radius}
          title="System Notification"
          message="This is a simple alert message to inform the user about something important happening in the application."
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
