import { create } from 'zustand';

export type Theme = 'light' | 'dark' | 'dim';

interface DemoState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

export const useDemoStore = create<DemoState>((set) => ({
  theme: (localStorage.getItem('theme') as Theme) || 'dim',
  isSidebarCollapsed: localStorage.getItem('sidebar-collapsed') === 'true',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update Favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      let iconPath = '/favicons/favicon-dim.svg';
      if (theme === 'light') iconPath = '/favicons/favicon-light.svg';
      if (theme === 'dark') iconPath = '/favicons/favicon-dark.svg';
      
      favicon.setAttribute('href', iconPath);
    }

    set({ theme });
  },
  toggleSidebar: () => {
    set((state) => {
      const newState = !state.isSidebarCollapsed;
      localStorage.setItem('sidebar-collapsed', String(newState));
      return { isSidebarCollapsed: newState };
    });
  },
}));
