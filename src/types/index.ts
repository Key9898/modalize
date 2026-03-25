import type { ReactNode } from 'react';

// ===== Base Modal Types =====

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  radius?: ModalRadius;
  closeOnEsc?: boolean;
  closeOnBackdrop?: boolean;
  animation?: boolean;
  animationDuration?: number;
  className?: string;
  overlayClassName?: string;
  zIndex?: number;
  portal?: boolean;
  portalContainer?: HTMLElement;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  children: ReactNode;
}

export interface ModalHeaderProps {
  className?: string;
  showCloseButton?: boolean;
  children: ReactNode;
}

export interface ModalBodyProps {
  className?: string;
  scrollable?: boolean;
  children: ReactNode;
}

export interface ModalFooterProps {
  className?: string;
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

export interface ModalContextValue {
  onClose: () => void;
  size: ModalSize;
  isClosing: boolean;
  titleId: string;
}

// ===== Specialty Modal Types =====

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  buttonText?: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  radius?: ModalRadius;
  loading?: boolean;
}

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success';
  size?: ModalSize;
  radius?: ModalRadius;
  loading?: boolean;
  closeOnConfirm?: boolean;
}

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignup?: () => void;
  title?: string;
  loading?: boolean;
  error?: string;
  successMessage?: string;
  showRememberMe?: boolean;
  socialLogins?: Array<{
    provider: string;
    icon?: ReactNode;
    onClick: () => void;
  }>;
  radius?: ModalRadius;
}

export interface SignupData {
  email: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  [key: string]: unknown;
}

export type SignupField =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | string;

export interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SignupData) => void | Promise<void>;
  onLogin?: () => void;
  title?: string;
  loading?: boolean;
  error?: string;
  successMessage?: string;
  showTerms?: boolean;
  termsUrl?: string;
  privacyUrl?: string;
  fields?: SignupField[];
  radius?: ModalRadius;
}

export interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void | Promise<void>;
  onLogin?: () => void;
  title?: string;
  loading?: boolean;
  error?: string;
  successMessage?: string;
  radius?: ModalRadius;
}

// ===== Media Modal Types =====

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  title?: string;
  zoomable?: boolean;
  downloadable?: boolean;
  radius?: ModalRadius;
}

export interface GalleryImage {
  src: string;
  alt?: string;
  thumbnail?: string;
  title?: string;
}

export interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex?: number;
  showThumbnails?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  onImageChange?: (index: number) => void;
  radius?: ModalRadius;
}

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  type?: 'video/mp4' | 'video/webm' | 'video/ogg' | 'youtube' | 'vimeo';
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  radius?: ModalRadius;
}

// ===== Utility Modal Types =====

export interface EmptyStateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  radius?: ModalRadius;
}

export interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
  showProgress?: boolean;
  progress?: number;
  spinner?: 'default' | 'dots' | 'pulse';
  radius?: ModalRadius;
}

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, unknown>) => void | Promise<void>;
  title?: string;
  submitText?: string;
  cancelText?: string;
  loading?: boolean;
  radius?: ModalRadius;
  children?: ReactNode;
}

export interface DrawerProps extends ModalProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  title?: string;
  showCloseButton?: boolean;
}

export interface BottomSheetProps extends ModalProps {
  snapPoints?: number[];
  initialSnapIndex?: number;
  title?: string;
  showHandle?: boolean;
}

/**
 * Return type for the useModal hook.
 */
export interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
