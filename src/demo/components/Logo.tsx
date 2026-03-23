import { motion, AnimatePresence } from 'framer-motion';
import { useDemoStore } from '../store/useDemoStore';

interface LogoProps {
  className?: string;
  variant?: 'stack' | 'portal' | 'focus';
}

export function Logo({ 
  className = "w-9 h-9", 
}: LogoProps) {
  const { theme, toggleSidebar } = useDemoStore();

  const getLogoSrc = () => {
    switch (theme) {
      case 'light': return '/logo/logo-light.svg';
      case 'dark': return '/logo/logo-dark.svg';
      default: return '/logo/logo-dim.svg';
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={toggleSidebar}
      className={`relative cursor-pointer ${className} active:brightness-95 transition-all`}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={theme}
          src={getLogoSrc()}
          alt="Modalize Logo"
          initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 15, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>
    </motion.div>
  );
}
