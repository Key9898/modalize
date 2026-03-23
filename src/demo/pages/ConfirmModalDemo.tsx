import { useState } from 'react';
import { useModal, ConfirmModal } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, ConfirmModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  const handleConfirm = () => {
    // Perform your action here
    console.log('Action confirmed');
  };

  return (
    <>
      <button onClick={open}>Delete Item</button>

      <ConfirmModal
        isOpen={isOpen}
        onClose={close}
        onConfirm={handleConfirm}
        title="Delete Resource?"
        message="This action cannot be undone. All related data will be permanently removed."
        confirmText="Yes, delete it"
        variant="danger"
        size="sm"
      />
    </>
  );
}`;

export function ConfirmModalDemo() {
  const { isOpen, open, close } = useModal();
  const [variant, setVariant] = useState<'danger' | 'warning' | 'info' | 'success'>('danger');
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      close();
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Confirm Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          A pre-built specialized modal for important decisions or destructive actions.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={variant} 
              onChange={e => setVariant(e.target.value as 'danger' | 'warning' | 'info' | 'success')}
              aria-label="Confirm modal variant selector"
            >
              <option value="danger">Danger (Delete)</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
              <option value="success">Success</option>
            </select>
            <button 
              className={`btn btn-md w-48 shadow-lg ${
                variant === 'danger' ? 'btn-error shadow-error/20' : 
                variant === 'warning' ? 'btn-warning shadow-warning/20' : 
                variant === 'info' ? 'btn-info shadow-info/20' : 
                'btn-success shadow-success/20'
              }`} 
              onClick={open}
            >
              Live Preview
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click to see variants and loading state behaviors
          </p>
        </div>

        <ConfirmModal
          isOpen={isOpen}
          onClose={close}
          onConfirm={handleConfirm}
          title={variant === 'danger' ? 'Delete Item?' : variant === 'warning' ? 'Update Settings?' : variant === 'info' ? 'Confirm Action?' : 'Success Task?'}
          message="Are you sure you want to proceed with this operation? This might have consequences for the system state."
          confirmText={variant === 'danger' ? 'Yes, delete it' : 'Confirm'}
          variant={variant}
          loading={loading}
          closeOnConfirm={false} // Manually managing close after loading
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
