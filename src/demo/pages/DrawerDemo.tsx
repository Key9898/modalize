import { useState } from 'react';
import { useModal, Drawer, type ModalRadius } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, Drawer } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Open Drawer</button>
      <Drawer 
        isOpen={isOpen} 
        onClose={close} 
        position="right" 
        title="Cart Summary"
        size="md"
      >
        <p>Your items go here.</p>
      </Drawer>
    </>
  );
}`;

export function DrawerDemo() {
  const { isOpen, open, close } = useModal();
  const [position, setPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
  const [radius, setRadius] = useState<ModalRadius>('lg');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Drawer</h2>
        <p className="text-base-content/60 leading-relaxed">
          A sidebar panel that slides in from any screen edge. Ideal for navigation, carts, or settings.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={position} 
              onChange={e => setPosition(e.target.value as 'left' | 'right' | 'top' | 'bottom')}
              aria-label="Drawer position selector"
            >
              <option value="right">Right Side</option>
              <option value="left">Left Side</option>
              <option value="top">Top Bar</option>
              <option value="bottom">Bottom Bar</option>
            </select>
            <select 
              className="select select-bordered select-md bg-base-100 w-48" 
              value={radius} 
              onChange={e => setRadius(e.target.value as ModalRadius)}
              aria-label="Drawer radius selector"
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
              Open Drawer
            </button>
          </div>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Toggle to test different screen entry points and corner rounding
          </p>
        </div>

        <Drawer isOpen={isOpen} onClose={close} position={position} title="Cart Summary" size="md" radius={radius}>
          <div className="space-y-6">
            <div className="p-4 bg-base-300 transition-all rounded-modalize">Product A x 2 - $40.00</div>
            <div className="p-4 bg-base-300 transition-all rounded-modalize">Product B x 1 - $25.00</div>
            <div className="divider opacity-50">Total</div>
            <div className="text-2xl font-bold px-4">$65.00</div>
            <button className="btn btn-primary w-full mt-4" onClick={close}>Checkout Now</button>
          </div>
        </Drawer>
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
