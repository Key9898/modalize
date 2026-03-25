import { useState } from 'react';
import { EmptyStateModal } from '../../components/EmptyStateModal';
import { useModal } from '../../hooks';
import { FolderOpen } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import type { ModalRadius } from '../../types';

const codeExample = `import { useModal, EmptyStateModal } from 'modalize';
import { FolderOpen } from 'lucide-react';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Load Data</button>

      <EmptyStateModal 
        isOpen={isOpen} 
        onClose={close} 
        icon={<FolderOpen className="w-12 h-12 text-base-content/30" />}
        title="No Projects Found"
        description="Get started by creating a new project. You can manage all your settings and configurations from the dashboard."
        action={{
          label: "Create New Project",
          onClick: close
        }}
      />
    </>
  );
}`;

export function EmptyStateModalDemo() {
  const { isOpen, open, close } = useModal();
  const [radius, setRadius] = useState<ModalRadius>('lg');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Empty State Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          A pre-built modal for displaying empty states or "no data found"
          placeholders with call-to-actions.
        </p>
      </section>

      <section className="card bg-base-200/50 p-6 md:p-12 border border-base-300 items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center gap-6 w-full text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <select
              className="select select-bordered select-md bg-base-100 w-48"
              value={radius}
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Empty state radius selector"
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
              Open Empty State
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Ideal for first-time user experiences and empty collections
          </p>
        </div>

        <EmptyStateModal
          isOpen={isOpen}
          onClose={close}
          radius={radius}
          icon={<FolderOpen className="w-12 h-12 text-base-content/30" />}
          title="No Projects Found"
          description="Get started by creating a new project. You can manage all your settings and configurations from the dashboard."
          action={{
            label: 'Create New Project',
            onClick: close,
          }}
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
