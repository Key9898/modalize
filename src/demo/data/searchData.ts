import type { LucideIcon } from 'lucide-react';
import {
  Home,
  Terminal,
  BookOpen,
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
  Palette,
  SlidersHorizontal,
} from 'lucide-react';

export interface SearchItem {
  id: string;
  name: string;
  path: string;
  icon: LucideIcon;
  category: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  {
    id: 'overview',
    name: 'Overview',
    path: '/',
    icon: Home,
    category: 'Get Started',
    keywords: ['home', 'dashboard', 'main', 'start', 'intro', 'introduction'],
  },
  {
    id: 'installation',
    name: 'Installation',
    path: '/installation',
    icon: Terminal,
    category: 'Get Started',
    keywords: [
      'install',
      'setup',
      'npm',
      'yarn',
      'pnpm',
      'getting started',
      'guide',
    ],
  },
  {
    id: 'api-reference',
    name: 'API Reference',
    path: '/api-reference',
    icon: BookOpen,
    category: 'Get Started',
    keywords: [
      'api',
      'documentation',
      'docs',
      'reference',
      'props',
      'methods',
      'hooks',
    ],
  },
  {
    id: 'modal',
    name: 'Modal',
    path: '/modal',
    icon: Box,
    category: 'Components',
    keywords: ['dialog', 'popup', 'overlay', 'base', 'core'],
  },
  {
    id: 'confirm-modal',
    name: 'Confirm Modal',
    path: '/confirm-modal',
    icon: CheckSquare,
    category: 'Components',
    keywords: [
      'confirm',
      'confirmation',
      'yes',
      'no',
      'approve',
      'accept',
      'dialog',
    ],
  },
  {
    id: 'alert-modal',
    name: 'Alert Modal',
    path: '/alert-modal',
    icon: AlertCircle,
    category: 'Components',
    keywords: [
      'alert',
      'warning',
      'error',
      'success',
      'info',
      'notification',
      'message',
    ],
  },
  {
    id: 'login-modal',
    name: 'Login Modal',
    path: '/login-modal',
    icon: LogIn,
    category: 'Components',
    keywords: ['login', 'signin', 'sign in', 'auth', 'authentication', 'form'],
  },
  {
    id: 'signup-modal',
    name: 'Signup Modal',
    path: '/signup-modal',
    icon: UserPlus,
    category: 'Components',
    keywords: [
      'signup',
      'register',
      'sign up',
      'auth',
      'authentication',
      'form',
      'create account',
    ],
  },
  {
    id: 'forgot-password',
    name: 'Forgot Password',
    path: '/forgot-password',
    icon: KeyRound,
    category: 'Components',
    keywords: ['forgot', 'password', 'reset', 'recovery', 'email', 'auth'],
  },
  {
    id: 'image-modal',
    name: 'Image Modal',
    path: '/image-modal',
    icon: ImageIcon,
    category: 'Components',
    keywords: ['image', 'photo', 'picture', 'zoom', 'media', 'lightbox'],
  },
  {
    id: 'gallery-modal',
    name: 'Gallery Modal',
    path: '/gallery-modal',
    icon: LayoutGrid,
    category: 'Components',
    keywords: ['gallery', 'images', 'photos', 'carousel', 'slideshow', 'media'],
  },
  {
    id: 'video-modal',
    name: 'Video Modal',
    path: '/video-modal',
    icon: Film,
    category: 'Components',
    keywords: [
      'video',
      'movie',
      'player',
      'youtube',
      'vimeo',
      'media',
      'embed',
    ],
  },
  {
    id: 'form-modal',
    name: 'Form Modal',
    path: '/form-modal',
    icon: FileText,
    category: 'Components',
    keywords: ['form', 'input', 'fields', 'submit', 'validation'],
  },
  {
    id: 'empty-state',
    name: 'Empty State',
    path: '/empty-state',
    icon: FolderOpen,
    category: 'Components',
    keywords: ['empty', 'placeholder', 'no data', 'null', 'blank'],
  },
  {
    id: 'loading-modal',
    name: 'Loading Modal',
    path: '/loading-modal',
    icon: RefreshCw,
    category: 'Components',
    keywords: ['loading', 'spinner', 'progress', 'wait', 'pending', 'loader'],
  },
  {
    id: 'bottom-sheet',
    name: 'BottomSheet',
    path: '/bottom-sheet',
    icon: PanelBottom,
    category: 'Components',
    keywords: ['bottom', 'sheet', 'drawer', 'slide', 'mobile', 'swipe'],
  },
  {
    id: 'drawer',
    name: 'Drawer',
    path: '/drawer',
    icon: PanelRight,
    category: 'Components',
    keywords: ['drawer', 'sidebar', 'slide', 'panel', 'navigation'],
  },
  {
    id: 'appearance',
    name: 'Appearance',
    path: '/settings/appearance',
    icon: Palette,
    category: 'Settings',
    keywords: ['theme', 'appearance', 'dark', 'light', 'dim', 'color', 'mode'],
  },
  {
    id: 'preferences',
    name: 'Preferences',
    path: '/settings/preferences',
    icon: SlidersHorizontal,
    category: 'Settings',
    keywords: ['preferences', 'settings', 'config', 'options', 'defaults'],
  },
];

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();

  return searchData
    .map(item => {
      const nameMatch = item.name.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.category.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(kw => kw.includes(lowerQuery));

      let score = 0;
      if (item.name.toLowerCase() === lowerQuery) score = 100;
      else if (item.name.toLowerCase().startsWith(lowerQuery)) score = 80;
      else if (nameMatch) score = 60;
      else if (keywordMatch) score = 40;
      else if (categoryMatch) score = 20;

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item)
    .slice(0, 8);
}
