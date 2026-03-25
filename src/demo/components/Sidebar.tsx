import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  SlidersHorizontal,
  Home,
  Terminal,
  Box,
  CheckSquare,
  AlertCircle,
  LogIn,
  UserPlus,
  KeyRound,
  Image as ImageIcon,
  LayoutGrid,
  Film,
  FileText,
  FolderOpen,
  RefreshCw,
  PanelBottom,
  PanelRight,
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
} from 'lucide-react';
import { Logo } from './Logo';
import { useDemoStore } from '../store/useDemoStore';

const getStarted = [
  { name: 'Overview', path: '/', icon: Home },
  { name: 'Installation', path: '/installation', icon: Terminal },
  { name: 'API Reference', path: '/api-reference', icon: BookOpen },
];

const components = [
  { name: 'Modal', path: '/modal', icon: Box },
  { name: 'Confirm Modal', path: '/confirm-modal', icon: CheckSquare },
  { name: 'Alert Modal', path: '/alert-modal', icon: AlertCircle },
  { name: 'Login Modal', path: '/login-modal', icon: LogIn },
  { name: 'Signup Modal', path: '/signup-modal', icon: UserPlus },
  { name: 'Forgot Password', path: '/forgot-password', icon: KeyRound },
  { name: 'Image Modal', path: '/image-modal', icon: ImageIcon },
  { name: 'Gallery Modal', path: '/gallery-modal', icon: LayoutGrid },
  { name: 'Video Modal', path: '/video-modal', icon: Film },
  { name: 'Form Modal', path: '/form-modal', icon: FileText },
  { name: 'Empty State', path: '/empty-state', icon: FolderOpen },
  { name: 'Loading Modal', path: '/loading-modal', icon: RefreshCw },
  { name: 'BottomSheet', path: '/bottom-sheet', icon: PanelBottom },
  { name: 'Drawer', path: '/drawer', icon: PanelRight },
];

const settings = [
  { name: 'Appearance', path: '/settings/appearance', icon: Palette },
  {
    name: 'Preferences',
    path: '/settings/preferences',
    icon: SlidersHorizontal,
  },
];

function SidebarContent({
  isCollapsed,
  onNavigate,
  hideHeader = false,
}: {
  isCollapsed: boolean;
  onNavigate?: () => void;
  hideHeader?: boolean;
}) {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.querySelector('.active');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [location.pathname]);

  return (
    <>
      {!hideHeader && (
        <div
          className={`p-4 border-b border-base-300 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <Logo
              variant="stack"
              className={isCollapsed ? 'w-10 h-10' : 'w-9 h-9'}
            />
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold tracking-tight whitespace-nowrap"
                >
                  Modalize
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      <nav
        ref={navRef}
        className="flex-1 overflow-y-auto overflow-x-hidden p-3 custom-scrollbar"
      >
        <div
          className={`font-bold text-base-content/40 uppercase mb-4 ${isCollapsed ? 'text-center text-[14px] tracking-normal pl-[4px]' : 'text-[11px] tracking-[0.2em] px-3'}`}
        >
          {isCollapsed ? '•••' : 'GETTING STARTED'}
        </div>
        <ul className="menu gap-1 px-0">
          {getStarted.map(comp => {
            const Icon = comp.icon;
            return (
              <li key={comp.path} className="group relative">
                <NavLink
                  to={comp.path}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-4'} py-2.5 rounded-lg transition-colors border-l-4 ${
                      isActive
                        ? 'active bg-primary/10 text-primary font-semibold border-primary rounded-l-none'
                        : 'hover:bg-base-300 text-base-content/70 hover:text-base-content border-transparent'
                    }`
                  }
                >
                  <Icon
                    className={`w-5 h-5 min-w-[20px] ${isCollapsed ? 'mx-auto' : ''}`}
                  />
                  {!isCollapsed && (
                    <motion.span
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="whitespace-nowrap"
                    >
                      {comp.name}
                    </motion.span>
                  )}
                </NavLink>

                <AnimatePresence>
                  {isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute left-20 ml-2 px-3 py-1.5 bg-neutral text-neutral-content text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-neutral-focus"
                    >
                      {comp.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="divider my-4 opacity-50"></div>

        <div
          className={`font-bold text-base-content/40 uppercase mb-4 ${isCollapsed ? 'text-center text-[14px] tracking-normal pl-[4px]' : 'text-[11px] tracking-[0.2em] px-3'}`}
        >
          {isCollapsed ? '•••' : 'COMPONENTS'}
        </div>
        <ul className="menu gap-1 px-0">
          {components.map(comp => {
            const Icon = comp.icon;
            return (
              <li key={comp.path} className="group relative">
                <NavLink
                  to={comp.path}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-4'} py-2.5 rounded-lg transition-colors border-l-4 ${
                      isActive
                        ? 'active bg-primary/10 text-primary font-semibold border-primary rounded-l-none'
                        : 'hover:bg-base-300 text-base-content/70 hover:text-base-content border-transparent'
                    }`
                  }
                >
                  <Icon
                    className={`w-5 h-5 min-w-[20px] ${isCollapsed ? 'mx-auto' : ''}`}
                  />
                  {!isCollapsed && (
                    <motion.span
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="whitespace-nowrap"
                    >
                      {comp.name}
                    </motion.span>
                  )}
                </NavLink>

                <AnimatePresence>
                  {isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute left-20 ml-2 px-3 py-1.5 bg-neutral text-neutral-content text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-neutral-focus"
                    >
                      {comp.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="divider my-4 opacity-50"></div>

        <div
          className={`font-bold text-base-content/40 uppercase mb-4 ${isCollapsed ? 'text-center text-[14px] tracking-normal pl-[4px]' : 'text-[11px] tracking-[0.2em] px-3'}`}
        >
          {isCollapsed ? '•••' : 'SETTINGS'}
        </div>
        <ul className="menu gap-1 px-0">
          {settings.map(setting => {
            const Icon = setting.icon;
            return (
              <li key={setting.path} className="group relative">
                <NavLink
                  to={setting.path}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-4'} py-2.5 rounded-lg transition-colors border-l-4 ${
                      isActive
                        ? 'active bg-primary/10 text-primary font-semibold border-primary rounded-l-none'
                        : 'hover:bg-base-300 text-base-content/70 hover:text-base-content border-transparent'
                    }`
                  }
                >
                  <Icon
                    className={`w-5 h-5 min-w-[20px] ${isCollapsed ? 'mx-auto' : ''}`}
                  />
                  {!isCollapsed && (
                    <motion.span
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {setting.name}
                    </motion.span>
                  )}
                </NavLink>
                {isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-20 ml-2 px-3 py-1.5 bg-neutral text-neutral-content text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl"
                  >
                    {setting.name}
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-base-300 space-y-3 bg-base-200">
        <div className="flex justify-center flex-col items-center pb-1">
          <motion.span
            layout
            className={`px-3 py-1.5 bg-base-300 text-base-content/70 rounded-md font-mono font-bold tracking-tight shadow-sm border border-base-content/5 ${isCollapsed ? 'text-[10px]' : 'text-[12px]'}`}
          >
            v1.0.0
          </motion.span>
        </div>
      </div>
    </>
  );
}

export function Sidebar() {
  const {
    isSidebarCollapsed,
    toggleSidebar,
    isMobileSidebarOpen,
    closeMobileSidebar,
  } = useDemoStore();

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: isSidebarCollapsed ? 80 : 256 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-base-200 h-full border-r border-base-300 flex-col relative z-20 hidden lg:flex"
      >
        <SidebarContent isCollapsed={isSidebarCollapsed} />

        <motion.button
          whileHover={{ x: isSidebarCollapsed ? 5 : -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSidebar}
          className="absolute bottom-20 left-0 right-0 w-full flex items-center justify-center py-2.5 hover:bg-base-300 rounded-lg transition-colors text-base-content/60 hover:text-base-content"
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4 opacity-70" />
              <span className="text-sm font-semibold">Collapse Sidebar</span>
            </div>
          )}
        </motion.button>
      </motion.aside>

      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeMobileSidebar}
            />

            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-72 bg-base-200 border-r border-base-300 flex flex-col z-50 lg:hidden shadow-2xl"
            >
              <div className="p-4 border-b border-base-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Logo variant="stack" className="w-9 h-9" />
                  <span className="text-xl font-bold tracking-tight">
                    Modalize
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMobileSidebar}
                  className="btn btn-ghost btn-sm btn-circle"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <SidebarContent
                isCollapsed={false}
                onNavigate={closeMobileSidebar}
                hideHeader={true}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
