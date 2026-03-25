import { Link } from 'react-router-dom';
import { Shield, Code, Palette, ArrowRight } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';

export function Overview() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-4xl font-extrabold tracking-tight">
          A modern modal library for React.
        </h2>
        <p className="text-xl text-base-content/60 leading-relaxed max-w-2xl">
          Modalize is a collection of accessible, highly customizable modal
          components built with Tailwind CSS v4 and DaisyUI. Focus on logic,
          we'll handle the overlay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/installation"
            className="btn btn-primary px-8 gap-2 w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/modal"
            className="btn btn-ghost px-8 border border-base-300 w-full sm:w-auto"
          >
            View Components
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-200 p-6 space-y-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg">Fully Accessible</h3>
          <p className="text-sm text-base-content/60">
            Built following WAI-ARIA practices. Focus trap and ARIA attributes
            included.
          </p>
        </div>
        <div className="card bg-base-200 p-6 space-y-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg">Compound API</h3>
          <p className="text-sm text-base-content/60">
            Maximum flexibility through compound components or use handy
            pre-built modals.
          </p>
        </div>
        <div className="card bg-base-200 p-6 space-y-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
            <Palette className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg">Style Agnostic</h3>
          <p className="text-sm text-base-content/60">
            Works with your Tailwind theme. DaisyUI support for instant premium
            themes.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold">Quick Start</h3>
        <p className="text-base-content/60">
          Install via npm and wrap your application with the global styles.
        </p>
        <CodeBlock
          code="npm install modalize"
          language="bash"
          filename="Terminal"
        />
      </section>
    </div>
  );
}
