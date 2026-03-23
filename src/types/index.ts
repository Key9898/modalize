import React from 'react';

// ===== Base Modal Types =====

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
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
  children: React.ReactNode;
}

export interface ModalHeaderProps {
  className?: string;
  showCloseButton?: boolean;
  children: React.ReactNode;
}

export interface ModalBodyProps {
  className?: string;
  scrollable?: boolean;
  children: React.ReactNode;
}

export interface ModalFooterProps {
  className?: string;
  align?: 'left' | 'center' | 'right' | 'between';
  children: React.ReactNode;
}

// ===== Hook Types =====

export interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

// ===== Pre-built Modal Types =====

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  closeOnConfirm?: boolean;
}

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  buttonText?: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

// ===== Auth Modal Types =====

export interface SocialLoginConfig {
  provider: 'google' | 'facebook' | 'github' | 'apple';
  onClick: () => void;
  icon?: React.ReactNode;
}

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (credentials: {
    email: string;
    password: string;
  }) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignup?: () => void;
  title?: string;
  loading?: boolean;
  error?: string;
  successMessage?: string;
  showRememberMe?: boolean;
  socialLogins?: SocialLoginConfig[];
}

export interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
}

export type SignupField = 'name' | 'email' | 'password' | 'confirmPassword';

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
}

// ===== Utility Modal Types =====

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, unknown>) => void | Promise<void>;
  title?: string;
  submitText?: string;
  cancelText?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export interface EmptyStateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
  showProgress?: boolean;
  progress?: number;
  spinner?: 'default' | 'dots' | 'pulse';
}

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  snapPoints?: ('25%' | '50%' | '75%' | '100%')[];
  initialSnap?: number;
  showHandle?: boolean;
  closeOnBackdrop?: boolean;
  children: React.ReactNode;
}

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'full';
  title?: string;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  children: React.ReactNode;
}

// ===== Internal Types =====

export interface ModalContextValue {
  onClose: () => void;
  size: ModalSize;
  isClosing: boolean;
}
