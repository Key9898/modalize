import { EmptyStateModal } from '../../components/EmptyStateModal';
import { useModal } from '../../hooks';
import { FolderOpen } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';

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

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Empty State Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          A pre-built modal for displaying empty states or "no data found" placeholders with call-to-actions.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <FolderOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">No Projects Detected</h3>
            <p className="text-base-content/60 text-sm max-w-sm mx-auto">
              Test how the application handles scenarios where the user hasn't created any data yet.
            </p>
          </div>
          <button className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20" onClick={open}>
            Open Empty State
          </button>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Ideal for first-time user experiences
          </p>
        </div>

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
