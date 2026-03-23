import { useState } from 'react';
import { useModal, LoginModal } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, LoginModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  const handleLogin = async (data) => {
    // await loginUser(data);
    close();
  };

  return (
    <>
      <button onClick={open}>Login</button>
      <LoginModal
        isOpen={isOpen}
        onClose={close}
        onSubmit={handleLogin}
        socialLogins={[
          { provider: 'google', onClick: () => {} },
          { provider: 'github', onClick: () => {} }
        ]}
      />
    </>
  );
}`;

export function LoginModalDemo() {
  const { isOpen, open, close } = useModal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: { email: string; password: string }) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      close();
      alert(`Logged in as: ${data.email}`);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Login Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          Pre-built authentication modal with email/password and social login supports.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <button className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20" onClick={open}>
            Open Login Form
          </button>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click to see loading states and validation
          </p>
        </div>

        <LoginModal
          isOpen={isOpen}
          onClose={close}
          onSubmit={handleSubmit}
          loading={loading}
          socialLogins={[{ provider: 'google', onClick: () => {} }, { provider: 'github', onClick: () => {} }]}
          onForgotPassword={() => alert('Forgot password clicked')}
          onSignup={() => alert('Signup clicked')}
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
