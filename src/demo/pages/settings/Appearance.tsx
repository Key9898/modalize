import { Palette, Sun, Moon, Sparkles } from 'lucide-react';
import { useDemoStore } from '../../store/useDemoStore';
import type { Theme } from '../../store/useDemoStore';

const themes = [
  { id: 'dim', name: 'Dim', description: 'Dark with lime accent', icon: Moon },
  { id: 'dark', name: 'Dark', description: 'Pure dark with indigo accent', icon: Moon },
  { id: 'light', name: 'Light', description: 'Clean light with blue accent', icon: Sun },
];

const codeThemes = [
  { id: 'one-dark', name: 'One Dark', description: 'Popular dark syntax theme' },
  { id: 'one-light', name: 'One Light', description: 'Clean light syntax theme' },
  { id: 'github', name: 'GitHub', description: 'GitHub-inspired syntax' },
];

export function Appearance() {
  const { theme: currentTheme, setTheme } = useDemoStore();

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Appearance</h2>
            <p className="text-sm text-base-content/60">Customize how Modalize looks</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Theme</h3>
        <p className="text-sm text-base-content/60">Select your preferred color theme for the dashboard.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map(theme => {
            const Icon = theme.icon;
            return (
              <label 
                key={theme.id} 
                className="card bg-base-200 p-4 cursor-pointer hover:bg-base-300 transition-colors border-2 border-transparent has-[:checked]:border-primary"
              >
                <input 
                  type="radio" 
                  name="theme" 
                  value={theme.id} 
                  className="hidden" 
                  checked={currentTheme === theme.id}
                  onChange={() => setTheme(theme.id as Theme)}
                />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-base-300 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold">{theme.name}</div>
                    <div className="text-xs text-base-content/60">{theme.description}</div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Code Theme</h3>
        <p className="text-sm text-base-content/60">Syntax highlighting theme for code examples.</p>
        <div className="form-control w-full max-w-xs">
          <select className="select select-bordered w-full" aria-label="Code theme selector">
            {codeThemes.map(theme => (
              <option key={theme.id} value={theme.id} selected={theme.id === 'one-dark'}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-base-content/60" />
          <div>
            <h3 className="text-lg font-semibold">Reduced Motion</h3>
            <p className="text-sm text-base-content/60">Minimize animations throughout the dashboard.</p>
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="label-text">Enable reduced motion</span>
          </label>
        </div>
      </section>
    </div>
  );
}
