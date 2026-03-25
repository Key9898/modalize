import {
  SlidersHorizontal,
  Maximize2,
  Code,
  XCircle,
  Focus,
} from 'lucide-react';

const modalSizes = [
  { id: 'sm', name: 'Small', description: 'Compact modal size' },
  { id: 'md', name: 'Medium', description: 'Default balanced size' },
  { id: 'lg', name: 'Large', description: 'Spacious modal size' },
  { id: 'xl', name: 'Extra Large', description: 'Maximum content space' },
  { id: 'full', name: 'Full Screen', description: 'Full viewport modal' },
];

const focusIndicators = [
  { id: 'default', name: 'Default', description: 'Standard focus ring' },
  {
    id: 'high-contrast',
    name: 'High Contrast',
    description: 'More visible focus indicator',
  },
];

export function Preferences() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Preferences</h2>
            <p className="text-sm text-base-content/60">
              Configure your workflow preferences
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Maximize2 className="w-5 h-5 text-base-content/60" />
          <div>
            <h3 className="text-lg font-semibold">Default Modal Size</h3>
            <p className="text-sm text-base-content/60">
              Initial size for modal previews.
            </p>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <select
            className="select select-bordered w-full"
            aria-label="Default modal size selector"
          >
            {modalSizes.map(size => (
              <option key={size.id} value={size.id} selected={size.id === 'md'}>
                {size.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Code className="w-5 h-5 text-base-content/60" />
          <div>
            <h3 className="text-lg font-semibold">Show Code Lines</h3>
            <p className="text-sm text-base-content/60">
              Display line numbers in code examples.
            </p>
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <input
              type="checkbox"
              className="toggle toggle-secondary"
              defaultChecked
            />
            <span className="label-text">Enable line numbers</span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <XCircle className="w-5 h-5 text-base-content/60" />
          <div>
            <h3 className="text-lg font-semibold">Auto Close Preview</h3>
            <p className="text-sm text-base-content/60">
              Automatically close modals when navigating away.
            </p>
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <input
              type="checkbox"
              className="toggle toggle-secondary"
              defaultChecked
            />
            <span className="label-text">Enable auto close</span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Focus className="w-5 h-5 text-base-content/60" />
          <div>
            <h3 className="text-lg font-semibold">Focus Indicator</h3>
            <p className="text-sm text-base-content/60">
              Visibility of focus rings for accessibility.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
          {focusIndicators.map(indicator => (
            <label
              key={indicator.id}
              className="card bg-base-200 p-4 cursor-pointer hover:bg-base-300 transition-colors border-2 border-transparent has-[:checked]:border-secondary"
            >
              <input
                type="radio"
                name="focus-indicator"
                value={indicator.id}
                className="hidden"
                defaultChecked={indicator.id === 'default'}
              />
              <div>
                <div className="font-semibold">{indicator.name}</div>
                <div className="text-xs text-base-content/60">
                  {indicator.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
