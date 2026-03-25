import { create } from 'zustand';

export type Theme = 'light' | 'dark' | 'dim';

interface DemoState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

export const useDemoStore = create<DemoState>(set => ({
  theme: (localStorage.getItem('theme') as Theme) || 'dim',
  isSidebarCollapsed: localStorage.getItem('sidebar-collapsed') === 'true',
  isMobileSidebarOpen: false,
  setTheme: theme => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

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
    set(state => {
      const newState = !state.isSidebarCollapsed;
      localStorage.setItem('sidebar-collapsed', String(newState));
      return { isSidebarCollapsed: newState };
    });
  },
  toggleMobileSidebar: () => {
    set(state => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen }));
  },
  closeMobileSidebar: () => {
    set({ isMobileSidebarOpen: false });
  },
}));
