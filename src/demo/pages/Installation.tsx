import { CodeBlock } from '../components/CodeBlock';

const installCode = `npm install modalize`;

const tailwindCode = `@import 'tailwindcss';
@plugin "daisyui";

/* Ensure your brand colors are set properly */
@plugin "daisyui/theme" {
  name: "dim";
  default: true;
  --color-base-100: oklch(30.857% 0.023 264.149);
  --color-primary: oklch(86.133% 0.141 139.549);
}`;

const usageCode = `import { Modal, useModal } from 'modalize';

export function App() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open} className="btn btn-primary">Open Modal</button>

      <Modal isOpen={isOpen} onClose={close}>
        <Modal.Header>Welcome</Modal.Header>
        <Modal.Body>Modalize is now installed and ready!</Modal.Body>
        <Modal.Footer>
          <button onClick={close} className="btn">Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`;

export function Installation() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">Installation</h1>
        <p className="text-base-content/70 text-lg leading-relaxed">
          Get started with Modalize in your React project. Built for Vite,
          Tailwind CSS v4, and Framer Motion.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Install Package</h2>
          <p className="text-base-content/70">Install Modalize via npm.</p>
          <CodeBlock code={installCode} language="bash" filename="Terminal" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Setup Tailwind CSS</h2>
          <p className="text-base-content/70">
            Modalize uses Tailwind CSS for styling. Ensure your{' '}
            <code className="font-mono text-sm bg-base-300 px-1.5 py-0.5 rounded">
              global.css
            </code>{' '}
            is configured.
          </p>
          <CodeBlock code={tailwindCode} language="css" filename="global.css" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Basic Usage</h2>
          <p className="text-base-content/70">
            Import the hook and the modal component to get started.
          </p>
          <CodeBlock code={usageCode} language="tsx" filename="App.tsx" />
        </section>
      </div>
    </div>
  );
}
