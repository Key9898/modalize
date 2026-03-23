import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoStore } from '../store/useDemoStore';
import type { Theme } from '../store/useDemoStore';
import { Search, Github, Settings, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const themes = [
  { id: 'dim', name: 'Dim', description: 'Dark with lime accent', icon: Moon },
  { id: 'dark', name: 'Dark', description: 'Pure dark with indigo accent', icon: Moon },
  { id: 'light', name: 'Light', description: 'Clean light with blue accent', icon: Sun },
];

export function Navbar() {
  const { theme, setTheme } = useDemoStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="navbar bg-base-100 border-b border-base-300 px-6 h-16 shrink-0 z-40">
      <div className="flex-1">
        <motion.label 
          whileHover={{ scale: 1.01 }}
          className="input input-sm input-bordered flex items-center gap-2 w-64 bg-base-200 border-none transition-all focus-within:ring-2 focus-within:ring-primary/20"
        >
          <Search className="w-4 h-4 opacity-70 text-primary" />
          <input type="text" className="grow text-xs" placeholder="Search components..." />
        </motion.label>
      </div>

      <div className="flex-none flex items-center gap-2">
        {/* Settings Dropdown with Framer Motion */}
        <div className="relative">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost btn-sm gap-2 h-9 flex items-center cursor-pointer"
          >
            <Settings className="w-4 h-4 opacity-70" />
            <span className="hidden sm:inline font-medium">Settings</span>
          </motion.div>

          <AnimatePresence>
            {isDropdownOpen && (
              <>
                {/* Backdrop to close dropdown */}
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsDropdownOpen(false)} />
                
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-64 p-2 shadow-2xl bg-base-100 rounded-xl border border-base-300 z-50 origin-top-right"
                >
                  <div className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest mb-3 px-3 pt-2">
                    QUICK THEME
                  </div>
                  <div className="space-y-0.5">
                    {themes.map(t => {
                      const Icon = t.icon;
                      return (
                        <label 
                          key={t.id}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-base-200 transition-all border border-transparent hover:border-base-300 group"
                        >
                          <input
                            type="radio"
                            name="theme-quick"
                            className="radio radio-xs radio-primary"
                            checked={theme === t.id}
                            onChange={() => {
                              setTheme(t.id as Theme);
                              setIsDropdownOpen(false);
                            }}
                          />
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 transition-colors ${theme === t.id ? 'text-primary' : 'text-base-content/40 group-hover:text-primary'}`} />
                            <div className="flex flex-col">
                              <span className={`text-sm font-semibold ${theme === t.id ? 'text-primary' : 'text-base-content'}`}>{t.name}</span>
                              <span className="text-[10px] opacity-50">{t.description}</span>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  <div className="divider my-2 opacity-10"></div>
                  <Link 
                    to="/settings/appearance" 
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-base-content/60 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    VIEW ALL SETTINGS
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        
        <div className="h-4 w-[1px] bg-base-300 mx-1"></div>

        <div className="flex items-center gap-2">
          <motion.a
            initial={false}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Key9898/modalize"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle hover:bg-base-300 transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-4.5 h-4.5" />
          </motion.a>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-sm px-4 font-bold tracking-tight rounded-lg shadow-md hover:shadow-primary/20"
          >
            npm install
          </motion.button>
        </div>
      </div>
    </header>
  );
}
