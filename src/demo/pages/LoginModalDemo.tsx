import { useState } from 'react';
import { useModal, LoginModal, type ModalRadius } from '../../index';
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
  const [radius, setRadius] = useState<ModalRadius>('lg');

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
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={radius} 
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Login modal radius selector"
            >
              <option value="none">Radius: None</option>
              <option value="sm">Radius: SM</option>
              <option value="md">Radius: MD</option>
              <option value="lg">Radius: LG (Default)</option>
              <option value="xl">Radius: XL</option>
              <option value="2xl">Radius: 2XL</option>
              <option value="full">Radius: Full</option>
            </select>
            <button className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20" onClick={open}>
              Open Login Form
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click to see loading states, radius inheritance and validation
          </p>
        </div>

        <LoginModal
          isOpen={isOpen}
          onClose={close}
          onSubmit={handleSubmit}
          loading={loading}
          radius={radius}
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
