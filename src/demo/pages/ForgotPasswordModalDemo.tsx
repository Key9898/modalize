import { ForgotPasswordModal } from '../../components/ForgotPasswordModal';
import { useModal } from '../../hooks';
import { Mail } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, ForgotPasswordModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  const handleSubmit = async (email: string) => {
    // Send email to your API here
    await api.recoverPassword(email);
  };

  return (
    <>
      <button onClick={open}>Forgot Password?</button>

      <ForgotPasswordModal 
        isOpen={isOpen} 
        onClose={close} 
        onSubmit={handleSubmit}
        successMessage="If an account exists with this email, you will receive a password reset link shortly."
      />
    </>
  );
}`;

export function ForgotPasswordModalDemo() {
  const { isOpen, open, close } = useModal();

  const handleSubmit = async (_email: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Forgot Password Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          A pre-built modal for handling password recovery flows with built-in validation and success states.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Account Recovery</h3>
            <p className="text-base-content/60 text-sm max-w-sm mx-auto">
              Test the recovery flow. Submitting will trigger a mock 1.5s API simulation.
            </p>
          </div>
          <button className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20" onClick={open}>
            Reset Password
          </button>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Automated email validation included
          </p>
        </div>

        <ForgotPasswordModal 
          isOpen={isOpen} 
          onClose={close} 
          onSubmit={handleSubmit}
          successMessage="If an account exists with this email, you will receive a password reset link shortly."
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
