import { Terminal, Lightbulb, Box, Code2 } from 'lucide-react';

export function ApiReference() {
  return (
    <div className="max-w-4xl mx-auto pb-12 space-y-12">
      {/* Header & Philosophy */}
      <section className="space-y-6 bg-base-200/50 p-8 rounded-2xl border border-base-300">
        <h2 className="text-4xl font-extrabold tracking-tight logo-font">
          What is Modalize?
        </h2>
        <p className="text-lg text-base-content/70 leading-relaxed max-w-3xl">
          <strong>Modalize</strong> is a comprehensive, production-ready React modal library designed to eliminate the boilerplate of building overlays. It provides a robust foundation for accessibility (WAI-ARIA, Focus Traps, Screen Readers), seamless animations powered by <strong>Framer Motion</strong>, and deeply integrated <strong>Tailwind CSS v4 (DaisyUI)</strong> styling.
        </p>
        <p className="text-lg text-base-content/70 leading-relaxed max-w-3xl">
          Whether you need a simple bottom sheet, an advanced image gallery with touch-swipe, or a full authentication modal with loading states, Modalize provides exactly what you need out of the box through its <strong>Compound Components</strong> and <strong>13+ Pre-built Templates</strong>.
        </p>
      </section>

      {/* section: useModal */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold logo-font">useModal()</h2>
        </div>
        <p className="text-base-content/70 mb-6 leading-relaxed">
          The primary hook for managing modal state. It returns boolean states and control functions to safely open, close, and toggle modals.
        </p>

        <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100/50 shadow-sm mb-6">
          <table className="table table-zebra table-sm">
            <thead>
              <tr className="bg-base-200/50 text-base-content/80">
                <th className="font-semibold py-3 pl-4">Return Value</th>
                <th className="font-semibold py-3">Type</th>
                <th className="font-semibold py-3 pr-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-sm pl-4">isOpen</td>
                <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                <td className="text-base-content/80">The current visibility state of the modal.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">open</td>
                <td><span className="badge badge-neutral badge-sm">() ={'>'} void</span></td>
                <td className="text-base-content/80">Function to set <code className="text-primary text-xs bg-primary/10 px-1 py-0.5 rounded">isOpen</code> to true.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">close</td>
                <td><span className="badge badge-neutral badge-sm">() ={'>'} void</span></td>
                <td className="text-base-content/80">Function to set <code className="text-primary text-xs bg-primary/10 px-1 py-0.5 rounded">isOpen</code> to false.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">toggle</td>
                <td><span className="badge badge-neutral badge-sm">() ={'>'} void</span></td>
                <td className="text-base-content/80">Function to toggle the current open state.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="alert alert-info text-sm bg-info/10 text-info border-info/20 shadow-none rounded-xl">
          <Lightbulb className="w-5 h-5 shrink-0" />
          <span>You can initialize the hook with a default state: <code className="bg-base-100/50 px-1 py-0.5 rounded text-xs font-mono ml-1">useModal(true)</code> (Default is false).</span>
        </div>
      </section>

      {/* section: <Modal> Base */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Box className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold logo-font">{'<Modal>'} Props</h2>
        </div>
        <p className="text-base-content/70 mb-6 leading-relaxed">
          The root wrapper component for all modals. It handles focus trapping, proper z-index stacking, React Portals, and ARIA attributes out of the box.
        </p>

        <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100/50 shadow-sm">
          <table className="table table-zebra table-sm">
            <thead>
              <tr className="bg-base-200/50 text-base-content/80">
                <th className="font-semibold py-3 pl-4">Prop</th>
                <th className="font-semibold py-3">Type</th>
                <th className="font-semibold py-3">Default</th>
                <th className="font-semibold py-3 pr-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-sm pl-4">isOpen</td>
                <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                <td className="font-mono text-xs text-base-content/50">-</td>
                <td className="text-base-content/80">Whether the modal is visible. <strong>(Required)</strong></td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">onClose</td>
                <td><span className="badge badge-neutral badge-sm">() ={'>'} void</span></td>
                <td className="font-mono text-xs text-base-content/50">-</td>
                <td className="text-base-content/80">Callback triggered on overlay click or ESC key. <strong>(Required)</strong></td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">size</td>
                <td><span className="badge badge-neutral badge-sm">ModalSize</span></td>
                <td className="font-mono text-primary text-xs">md</td>
                <td className="text-base-content/80">Max width constraint: <code className="text-xs">sm | md | lg | xl | full</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">animation</td>
                <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                <td className="font-mono text-primary text-xs">true</td>
                <td className="text-base-content/80">If false, completely disables entrance/exit CSS animations.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">closeOnEsc</td>
                <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                <td className="font-mono text-primary text-xs">true</td>
                <td className="text-base-content/80">Enables closing the topmost modal by pressing the Escape key.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">closeOnBackdrop</td>
                <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                <td className="font-mono text-primary text-xs">true</td>
                <td className="text-base-content/80">Allows clicking the outside darkened overlay to close.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">portal</td>
                <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                <td className="font-mono text-primary text-xs">true</td>
                <td className="text-base-content/80">Renders the modal at the end of <code className="text-xs font-mono bg-base-200 px-1 py-0.5 rounded">document.body</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">zIndex</td>
                <td><span className="badge badge-neutral badge-sm">number</span></td>
                <td className="font-mono text-xs text-base-content/50">auto</td>
                <td className="text-base-content/80">Override automated z-index stacking.</td>
              </tr>
              <tr>
                <td className="font-mono text-sm pl-4">ariaLabel</td>
                <td><span className="badge badge-neutral badge-sm">string</span></td>
                <td className="font-mono text-xs text-base-content/50">-</td>
                <td className="text-base-content/80">Screen reader accessibility announcement name.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* section: Compound Components */}
      <section className="mb-0">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold logo-font">Compound Architecture</h2>
        </div>
        <p className="text-base-content/70 mb-6 leading-relaxed">
          The <code className="text-primary text-sm font-mono bg-primary/10 px-1 py-0.5 rounded">Modal</code> object contains sub-components to rapidly build consistent UI layouts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Header */}
          <div className="bg-base-100/60 border border-base-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold logo-font mb-3 text-base-content">
              {'<Modal.Header>'}
            </h3>
            <p className="text-sm text-base-content/70 mb-4 h-16">
              Renders standard top padding with a bold Title and an auto-aligned close (<code>X</code>) button.
            </p>
            <div className="text-xs space-y-2 font-mono text-base-content/60">
              <div className="flex justify-between border-b border-base-200 pb-1"><span>showCloseButton</span> <span className="text-primary">boolean</span></div>
              <div className="flex justify-between border-b border-base-200 pb-1"><span>className</span> <span className="text-primary">string</span></div>
            </div>
          </div>

          {/* Body */}
          <div className="bg-base-100/60 border border-base-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold logo-font mb-3 text-base-content">
              {'<Modal.Body>'}
            </h3>
            <p className="text-sm text-base-content/70 mb-4 h-16">
              Contains the primary scrollable content. Applies responsive horizontal padding.
            </p>
            <div className="text-xs space-y-2 font-mono text-base-content/60">
              <div className="flex justify-between border-b border-base-200 pb-1"><span>scrollable</span> <span className="text-primary">boolean</span></div>
              <div className="flex justify-between border-b border-base-200 pb-1"><span>className</span> <span className="text-primary">string</span></div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-base-100/60 border border-base-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold logo-font mb-3 text-base-content">
              {'<Modal.Footer>'}
            </h3>
            <p className="text-sm text-base-content/70 mb-4 h-16">
              Bottom action bar with layout alignment. Usually contains Submit or Cancel buttons.
            </p>
            <div className="text-xs space-y-2 font-mono text-base-content/60">
              <div className="flex justify-between border-b border-base-200 pb-1"><span>align</span> <span className="text-primary">left|center|right|between</span></div>
              <div className="flex justify-between border-b border-base-200 pb-1"><span>className</span> <span className="text-primary">string</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* section: Pre-built Modals Reference */}
      <section className="mt-16 mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold logo-font">Pre-built Modals Props</h2>
        </div>
        <p className="text-base-content/70 mb-6 leading-relaxed">
          Modalize ships with 13+ pre-built modals. While they accept the standard Base Modal props (`isOpen`, `onClose`, `size`, `animation`, etc.), they also expose their own specific features. Here are the highlighted specific props for each category:
        </p>

        {/* Auth Modals Table */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4">Auth Modals (Login, Signup, ForgotPassword)</h3>
          <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100/50 shadow-sm">
            <table className="table table-zebra table-sm">
              <thead>
                <tr className="bg-base-200/50 text-base-content/80">
                  <th className="font-semibold py-3 pl-4">Prop</th>
                  <th className="font-semibold py-3">Type</th>
                  <th className="font-semibold py-3 pr-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-sm pl-4">onSubmit</td>
                  <td><span className="badge badge-neutral badge-sm">function</span></td>
                  <td className="text-base-content/80">Callback containing formData values. <strong>(Required)</strong></td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">loading</td>
                  <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                  <td className="text-base-content/80">Disables form fields and shows a spinner on the submit button.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">error</td>
                  <td><span className="badge badge-neutral badge-sm">string</span></td>
                  <td className="text-base-content/80">Displays a red alert banner with the error message.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">successMessage</td>
                  <td><span className="badge badge-neutral badge-sm">string</span></td>
                  <td className="text-base-content/80">Displays a green success alert banner.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">socialLogins</td>
                  <td><span className="badge badge-neutral badge-sm">SocialLoginConfig[]</span></td>
                  <td className="text-base-content/80">(Login only) Array of Providers (Google, Apple, etc.) to show OAuth buttons.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">fields</td>
                  <td><span className="badge badge-neutral badge-sm">SignupField[]</span></td>
                  <td className="text-base-content/80">(Signup only) Array defining which fields to render: <code className="text-xs">['name', 'email', 'password', 'confirmPassword']</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Media Modals Table */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4">Media Modals (Image, Gallery, Video)</h3>
          <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100/50 shadow-sm">
            <table className="table table-zebra table-sm">
              <thead>
                <tr className="bg-base-200/50 text-base-content/80">
                  <th className="font-semibold py-3 pl-4">Prop</th>
                  <th className="font-semibold py-3">Type</th>
                  <th className="font-semibold py-3 pr-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-sm pl-4">src</td>
                  <td><span className="badge badge-neutral badge-sm">string</span></td>
                  <td className="text-base-content/80">(Image/Video) Main media source URL.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">images</td>
                  <td><span className="badge badge-neutral badge-sm">GalleryImage[]</span></td>
                  <td className="text-base-content/80">(Gallery) Array of objects: <code className="text-xs">`{'{src, alt?, thumbnail?, title?}'}`</code>.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">zoomable</td>
                  <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                  <td className="text-base-content/80">(Image) Enables scaling image up via CSS sizing. Default: `true`.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">initialIndex</td>
                  <td><span className="badge badge-neutral badge-sm">number</span></td>
                  <td className="text-base-content/80">(Gallery) Starting image index. Default: `0`.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">loop</td>
                  <td><span className="badge badge-neutral badge-sm">boolean</span></td>
                  <td className="text-base-content/80">(Gallery) Enables infinite scroll from last to first image. Default: `true`.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="alert alert-info text-sm bg-info/10 text-info border-info/20 mt-4 shadow-none rounded-xl">
            <Lightbulb className="w-5 h-5 shrink-0" />
            <span>Note: <code className="font-mono font-bold bg-base-100 rounded px-1">GalleryModal</code> supports native touch-swipe navigation vertically driven by Framer Motion.</span>
          </div>
        </div>

        {/* Utilities & App Modals Table */}
        <div>
          <h3 className="text-lg font-bold mb-4">Utilities (Confirm, Alert, EmptyState, Loading, Form, BottomSheet, Drawer)</h3>
          <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100/50 shadow-sm">
            <table className="table table-zebra table-sm">
              <thead>
                <tr className="bg-base-200/50 text-base-content/80">
                  <th className="font-semibold py-3 pl-4">Prop</th>
                  <th className="font-semibold py-3">Type</th>
                  <th className="font-semibold py-3 pr-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-sm pl-4">variant</td>
                  <td><span className="badge badge-neutral badge-sm">'success'|'warning'|'error'|'info'</span></td>
                  <td className="text-base-content/80">(Alert/Confirm) Changes button colors / icon colors appropriately.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">onConfirm</td>
                  <td><span className="badge badge-neutral badge-sm">() ={'>'} void</span></td>
                  <td className="text-base-content/80">(Confirm) Callback when primary action is accepted.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">position</td>
                  <td><span className="badge badge-neutral badge-sm">'left'|'right'|'top'|'bottom'</span></td>
                  <td className="text-base-content/80">(Drawer) Direction from which the drawer slides into the screen.</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm pl-4">snapPoints</td>
                  <td><span className="badge badge-neutral badge-sm">string[]</span></td>
                  <td className="text-base-content/80">(BottomSheet) Array of viewport heights: <code className="text-xs">['25%', '50%', '100%']</code>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
