# Modalize

A modern, accessible, and highly customizable React modal component library built with TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Features

- **Clean, Simple, Professional**: High-end UI/UX out of the box.
- **Fully Accessible**: Implements focus trap, screen reader announcements, ARIA attributes (`aria-modal`, `role="dialog"`), and proper keyboard navigation (ESC handling).
- **Compound API**: Build customized modals effortlessly with `<Modal>`, `<Modal.Header>`, `<Modal.Body>`, `<Modal.Footer>`.
- **Pre-built Components**: Speed up development with 10+ ready-to-use modals like `LoginModal`, `GalleryModal`, `ConfirmModal`, `BottomSheet`, and more.
- **Stacked Modals**: Out-of-the-box support for multiple layered modals with automated focus and z-index handling.
- **Motion & Swipe**: Fluid animations powered by Framer Motion, reduced motion supports, and touch swipe navigation out of the box. Mobile notch (Safe-Area insets) support included.

## Installation

```bash
npm install modalize
```

## Setup

Modalize styling is purely Tailwind CSS v4 and DaisyUI based. Be sure your project is configured with them.

```css
@import "tailwindcss";
@plugin "daisyui";

/* Application specific globals... */
```

## Basic Usage (Compound API)

```tsx
import { useModal, Modal } from 'modalize';

function App() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open} className="btn btn-primary">Open Base Modal</button>
      <Modal isOpen={isOpen} onClose={close} size="md">
        <Modal.Header>Welcome</Modal.Header>
        <Modal.Body>
          <p>Modalize handles focus trapping, scroll locking, and more!</p>
        </Modal.Body>
        <Modal.Footer align="right">
          <button className="btn" onClick={close}>Cancel</button>
          <button className="btn btn-primary">Submit</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## API Documentation

### `useModal(initialState?: boolean)`
A utility hook to manage the state of your modal.
Returns: 
- `isOpen` (boolean)
- `open` (function to open)
- `close` (function to close)
- `toggle` (function to toggle)

### `<Modal>` (Base Component)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls the visibility of the modal. |
| `onClose` | `() => void` | | Callback triggered when the modal requests to close. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Defines the max-width of the modal. |
| `animation` | `boolean` | `true` | If false, disables opening / closing animations. |
| `closeOnEsc`| `boolean` | `true` | Closes topmost modal on ESC. |
| `closeOnBackdrop` | `boolean` | `true` | Closes modal when overlay is clicked. |
| `portal` | `boolean` | `true` | Renders the modal inside a React Portal. |

### Pre-built Modals

Modalize provides several fully-styled pre-built components that cover common use cases out of the box:
- **AlertModal & ConfirmModal**: For simple user feedback.
- **LoginModal, SignupModal, ForgotPasswordModal**: Provides full visual states (loading spinners, error banners, success states).
- **ImageModal, GalleryModal, VideoModal**: Media wrappers. Note that Gallery Modal supports native Touch Swipe!
- **FormModal, LoadingModal, EmptyStateModal**: General utilities.
- **BottomSheet, Drawer**: Mobile-friendly slide-in variants.

Each provides exhaustive props (e.g., `loading`, `error`, `successMessage`, `socialLogins` for Auth forms). 

## License
MIT
