import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export function DemoLayout() {
  return (
    <div className="flex h-screen bg-base-100 text-base-content overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main id="main-scroll-container" className="flex-1 overflow-y-auto px-6 pt-12 md:px-12 border-b border-base-200 custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
          {/* Internal Bottom Space */}
          <div className="h-12 w-full flex-shrink-0"></div>
        </main>

        {/* Fixed Bottom Footer */}
        <footer className="py-2.5 bg-base-100 border-t border-base-200 flex items-center justify-center shrink-0">
          <p className="text-[10px] md:text-xs text-base-content/40 font-medium tracking-tight text-center uppercase">
            © 2026 <span className="text-base-content/60">Modalize</span> • Developed By {" "} <span className="text-primary/70 font-semibold">Wunna Aung</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
