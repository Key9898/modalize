# Modalize - React Modal Library

A modern, accessible, and highly customizable React modal component library built with TypeScript, Vite, and Tailwind CSS v4.

---

## Project Overview

**Goal:** Create a production-ready npm package for React modals that provides both flexibility through compound components and convenience through pre-built modal components.

**Key Principles:**

- Clean, simple, and professional UI/UX
- Fully responsive (mobile/desktop) - zero UI breaks
- Accessible (a11y compliant)
- Developer-friendly API
- Theme-agnostic (follows user's theme)

---

## Branding

| Asset              | Design                      | Colors (Source of Truth) |
| :----------------- | :-------------------------- | :----------------------- |
| **Dashboard Logo** | Layers Icon (Lucide)        | oklch (Dim/Dark/Light)   |
| **Favicon**        | "M" Letter (JetBrains Mono) | Exact matching OKLCH     |
| **Sidebar**        | Collapsible Navigation      | Theme-aware, Premium UI with Custom Scrollbar & Perfect Alignment |
| **Main Footer**     | Minimalist Attribution      | Copyright & Developer credit |

### Color Specifications

- **Dim:** `oklch(86.133% 0.141 139.549)` (Primary)
- **Dark:** `oklch(75% 0.15 264)` (Primary)
- **Light:** `oklch(65% 0.15 264)` (Primary)

---

## Technology Stack

### Library Stack

| Category        | Technology                     |
| --------------- | ------------------------------ |
| Framework       | React 18+                      |
| Language        | TypeScript                     |
| Build Tool      | Vite                           |
| Styling         | Tailwind CSS v4                |
| Motion Engine   | Framer Motion (Standard)       |
| Theme           | DaisyUI (custom dark theme)    |
| Package Manager | npm                            |
| Testing         | Vitest + React Testing Library |
| Documentation   | Storybook                      |

### Demo App Stack

| Category         | Technology   |
| ---------------- | ------------ |
| Router           | React Router |
| State Management | Zustand      |

### Code Quality Tools

| Tool     | Purpose                       |
| -------- | ----------------------------- |
| Prettier | Code formatting               |
| ESLint   | Code linting & best practices |

### CI/CD

| Category     | Technology     |
| ------------ | -------------- |
| Platform     | GitHub Actions |
| Auto-publish | On release tag |

### Peer Dependencies

| Package   | Version  |
| --------- | -------- |
| React     | >=18.0.0 |
| React DOM | >=18.0.0 |

### License

MIT License

---

## Architecture

### API Design

**1. Compound Components Pattern**

```tsx
<Modal isOpen={isOpen} onClose={close}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>Actions</Modal.Footer>
</Modal>
```

**2. Hook-based API**

```tsx
const { isOpen, open, close, toggle } = useModal();
```

**3. Pre-built Components**

```tsx
<LoginModal />
<SignupModal />
<ConfirmModal />
<ImageModal />
// etc.
```

---

## UI/UX Guidelines

### Design Principles

| Principle    | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| Clean        | Minimal visual clutter, clear hierarchy, whitespace usage   |
| Simple       | Intuitive API, easy to use, minimal configuration needed    |
| Professional | Polished animations, consistent spacing, refined typography |

### Development Rules

1. **Icons:** Exclusively use `lucide-react` for all icons. Do not use HeroIcons, React Icons, or inline SVGs.
2. **Styling:** Strictly use Tailwind CSS classes. **DO NOT** use inline CSS (`style={{...}}`) anywhere in the application.

### Visual Design

#### Colors

| Element          | Light Theme     | Dark Theme       |
| ---------------- | --------------- | ---------------- |
| Backdrop         | rgba(0,0,0,0.5) | rgba(0,0,0,0.7)  |
| Modal Background | white           | base-100         |
| Border           | gray-200        | base-300         |
| Text Primary     | gray-900        | base-content     |
| Text Secondary   | gray-500        | base-content/70% |

#### Typography

| Element     | Size               | Weight              |
| ----------- | ------------------ | ------------------- |
| Modal Title | text-xl (1.25rem)  | font-semibold (600) |
| Body Text   | text-base (1rem)   | font-normal (400)   |
| Button Text | text-sm (0.875rem) | font-medium (500)   |
| Helper Text | text-xs (0.75rem)  | font-normal (400)   |

#### Spacing

| Element              | Value         |
| -------------------- | ------------- |
| Modal Padding        | 1.5rem (24px) |
| Header Margin Bottom | 1rem (16px)   |
| Footer Margin Top    | 1.5rem (24px) |
| Button Gap           | 0.5rem (8px)  |
| Input Gap            | 1rem (16px)   |

#### Border Radius

| Size | Value          |
| ---- | -------------- |
| sm   | 0.375rem (6px) |
| md   | 0.5rem (8px)   |
| lg   | 0.75rem (12px) |
| xl   | 1rem (16px)    |

#### Shadows

| Variant | Value                                 |
| ------- | ------------------------------------- |
| Default | 0 25px 50px -12px rgba(0, 0, 0, 0.25) |
| Subtle  | 0 4px 6px -1px rgba(0, 0, 0, 0.1)     |
| Strong  | 0 35px 60px -15px rgba(0, 0, 0, 0.3)  |

### Animation Guidelines

| Animation     | Duration | Easing                        |
| ------------- | -------- | ----------------------------- |
| Fade In       | 150ms    | ease-out                      |
| Fade Out      | 100ms    | ease-in                       |
| Scale In      | 200ms    | cubic-bezier(0.16, 1, 0.3, 1) |
| Scale Out     | 150ms    | ease-in                       |
| Slide Up      | 200ms    | cubic-bezier(0.16, 1, 0.3, 1) |
| Backdrop Fade | 150ms    | ease-out                      |

---

## Responsive Design Specifications

### Breakpoints

| Breakpoint | Width     | Target Devices        |
| ---------- | --------- | --------------------- |
| xs         | < 640px   | Mobile (small)        |
| sm         | >= 640px  | Mobile (large)        |
| md         | >= 768px  | Tablet                |
| lg         | >= 1024px | Desktop               |
| xl         | >= 1280px | Desktop (large)       |
| 2xl        | >= 1536px | Desktop (extra large) |

### Modal Sizes by Breakpoint

| Size | Mobile (<640px) | Tablet (768px) | Desktop (1024px+) |
| ---- | --------------- | -------------- | ----------------- |
| sm   | 90% max-w-xs    | max-w-sm       | max-w-sm          |
| md   | 90% max-w-sm    | max-w-md       | max-w-md          |
| lg   | 90% max-w-md    | max-w-lg       | max-w-lg          |
| xl   | 90% max-w-lg    | max-w-xl       | max-w-xl          |
| full | 100%            | 100%           | 90% max-w-4xl     |

### Mobile-First Behavior

| Feature         | Mobile            | Tablet         | Desktop        |
| --------------- | ----------------- | -------------- | -------------- |
| Modal Position  | Bottom (slide-up) | Center         | Center         |
| Close Button    | Always visible    | Always visible | Always visible |
| Backdrop Click  | Close             | Close          | Close          |
| Swipe to Close  | Enabled           | Optional       | Disabled       |
| Max Height      | 90vh              | 85vh           | 80vh           |
| Scrollable Body | Yes               | Yes            | Yes            |

### Touch vs Mouse Interactions

| Interaction       | Touch Device | Mouse Device |
| ----------------- | ------------ | ------------ |
| Close on Backdrop | Tap          | Click        |
| Swipe to Close    | Enabled      | Disabled     |
| Hover Effects     | Disabled     | Enabled      |
| Focus Ring        | On tap       | On tab/click |
| Long Press        | Context menu | Right-click  |

### Font Scaling

| Breakpoint | Base Font | Title | Body |
| ---------- | --------- | ----- | ---- |
| Mobile     | 14px      | 18px  | 14px |
| Tablet     | 15px      | 20px  | 15px |
| Desktop    | 16px      | 22px  | 16px |

### Button Sizes by Device

| Device  | Height | Padding   | Font Size |
| ------- | ------ | --------- | --------- |
| Mobile  | 44px   | 12px 16px | 14px      |
| Tablet  | 40px   | 10px 16px | 14px      |
| Desktop | 36px   | 8px 16px  | 14px      |

### Input Sizes by Device

| Device  | Height | Padding   | Font Size |
| ------- | ------ | --------- | --------- |
| Mobile  | 44px   | 12px 16px | 16px      |
| Tablet  | 40px   | 10px 16px | 16px      |
| Desktop | 36px   | 8px 12px  | 14px      |

### Safe Area Handling (Mobile)

| Property       | Value                       |
| -------------- | --------------------------- |
| padding-bottom | env(safe-area-inset-bottom) |
| padding-top    | env(safe-area-inset-top)    |
| padding-left   | env(safe-area-inset-left)   |
| padding-right  | env(safe-area-inset-right)  |

---

## Development Experience

### Clean Terminal Output

Development server output က clean ဖြစ်ရမယ်။ ဥပမာ:

```
VITE v7.3.1  ready in 6337 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Terminal Output Guidelines

| Guideline         | Description                             |
| ----------------- | --------------------------------------- |
| No verbose logs   | HMR updates တွေကို concise ဖော်ပြ       |
| Clear server info | Vite ready message နဲ့ local URL ပြရမယ် |
| DaisyUI banner    | DaisyUI version banner ပြသရမယ်          |
| Error clarity     | Error messages တွေက clear ဖြစ်ရမယ်      |
| Timestamp format  | 12-hour format (e.g., 2:05:24 AM)       |

### Vite Configuration for Clean Output

```ts
// vite.config.ts
export default defineConfig({
  server: {
    port: 5173,
    host: true,
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
  },
  logLevel: 'info',
});
```

### HMR Output Format

```
2:05:24 AM [vite] (client) hmr update /src/components/Modal.tsx
```

- Timestamp ပါရမယ်
- File path က short ဖြစ်ရမယ်
- Update type ပြရမယ် (hmr update, page reload)

### Console Logging Standards

| Type            | Usage                                   |
| --------------- | --------------------------------------- |
| `console.log`   | Development only (remove in production) |
| `console.warn`  | Deprecation warnings                    |
| `console.error` | Errors only                             |
| `console.info`  | Build info, version info                |

### Build Output

```
vite v7.3.1 building for production...
✓ 150 modules transformed.
dist/index.js   25.42 kB │ gzip: 8.15 kB
dist/style.css  12.30 kB │ gzip: 3.45 kB
✓ built in 2.45s
```

### Code Quality Configuration

#### Prettier Configuration

Code formatting အတွက် Prettier ကို အသုံးပြုမည်။ Git commit မပြုလုပ်ခင် အလိုအလျောက် format လုပ်ရန် lint-staged နှင့် husky ကို အသုံးပြုမည်။

**Scripts:**

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{ts,tsx,css,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css,json}\""
  }
}
```

**Prettier Rules:**

| Option          | Value |
| --------------- | ----- |
| Semi            | true  |
| Single Quote    | true  |
| Tab Width       | 2     |
| Trailing Comma  | es5   |
| Print Width     | 80    |
| Bracket Spacing | true  |
| Arrow Parens    | avoid |
| End of Line     | lf    |

#### ESLint Configuration

Code quality နှင့် best practices အတွက် ESLint ကို အသုံးပြုမည်။ React နှင့် TypeScript အတွက် recommended rules တွေကို အသုံးပြုမည်။

**Scripts:**

```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.{ts,tsx}\"",
    "lint:fix": "eslint \"src/**/*.{ts,tsx}\" --fix"
  }
}
```

**ESLint Rules:**

| Rule                                              | Value | Description                |
| ------------------------------------------------- | ----- | -------------------------- |
| react/react-in-jsx-scope                          | off   | React 17+ auto import      |
| react/prop-types                                  | off   | Using TypeScript           |
| @typescript-eslint/no-unused-vars                 | warn  | Unused variables detection |
| @typescript-eslint/explicit-module-boundary-types | off   | Return type optional       |
| no-console                                        | warn  | Console usage warning      |
| eqeqeq                                            | error | Strict equality            |
| prefer-const                                      | warn  | Use const when possible    |

#### Pre-commit Hooks

Git commit မပြုလုပ်ခင် အလိုအလျောက် lint နှင့် format စစ်ဆေးရန် husky နှင့် lint-staged ကို အသုံးပြုမည်။

**lint-staged Configuration:**

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,json,md}": ["prettier --write"]
  }
}
```

**Workflow:**

1. `git commit` လုပ်တဲ့အခါ husky pre-commit hook အလုပ်လုပ်မယ်
2. lint-staged က staged files တွေကို စစ်ဆေးမယ်
3. ESLint က code quality စစ်ဆေးမယ်
4. Prettier က code format လုပ်မယ်
5. အားလုံး OK ဖြစ်ရင် commit အောင်မြင်မယ်

---

## Props API Documentation

### Base Modal Props

```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
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
```

### Modal.Header Props

```tsx
interface ModalHeaderProps {
  className?: string;
  showCloseButton?: boolean;
  children: React.ReactNode;
}
```

### Modal.Body Props

```tsx
interface ModalBodyProps {
  className?: string;
  scrollable?: boolean;
  children: React.ReactNode;
}
```

### Modal.Footer Props

```tsx
interface ModalFooterProps {
  className?: string;
  align?: 'left' | 'center' | 'right' | 'between';
  children: React.ReactNode;
}
```

### useModal Hook

```tsx
interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

function useModal(initialState?: boolean): UseModalReturn;
```

### Pre-built Modal Props

#### ConfirmModal Props

```tsx
interface ConfirmModalProps {
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
```

#### AlertModal Props

```tsx
interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  buttonText?: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}
```

#### LoginModal Props

```tsx
interface LoginModalProps {
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
  showRememberMe?: boolean;
  socialLogins?: SocialLoginConfig[];
}

interface SocialLoginConfig {
  provider: 'google' | 'facebook' | 'github' | 'apple';
  onClick: () => void;
  icon?: React.ReactNode;
}
```

#### SignupModal Props

```tsx
interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SignupData) => void | Promise<void>;
  onLogin?: () => void;
  title?: string;
  loading?: boolean;
  error?: string;
  showTerms?: boolean;
  termsUrl?: string;
  privacyUrl?: string;
  fields?: SignupField[];
}

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
}

type SignupField = 'name' | 'email' | 'password' | 'confirmPassword';
```

#### ForgotPasswordModal Props

```tsx
interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void | Promise<void>;
  onLogin?: () => void;
  title?: string;
  loading?: boolean;
  error?: string;
  successMessage?: string;
}
```

#### ImageModal Props

```tsx
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  title?: string;
  zoomable?: boolean;
  downloadable?: boolean;
}
```

#### GalleryModal Props

```tsx
interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex?: number;
  showThumbnails?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  onImageChange?: (index: number) => void;
}

interface GalleryImage {
  src: string;
  alt?: string;
  thumbnail?: string;
  title?: string;
}
```

#### VideoModal Props

```tsx
interface VideoModalProps {
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
```

#### FormModal Props

```tsx
interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, unknown>) => void | Promise<void>;
  title?: string;
  submitText?: string;
  cancelText?: string;
  loading?: boolean;
  children: React.ReactNode;
}
```

#### EmptyStateModal Props

```tsx
interface EmptyStateModalProps {
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
```

#### LoadingModal Props

```tsx
interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
  showProgress?: boolean;
  progress?: number;
  spinner?: 'default' | 'dots' | 'pulse';
}
```

#### BottomSheet Props

```tsx
interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  snapPoints?: ('25%' | '50%' | '75%' | '100%')[];
  initialSnap?: number;
  showHandle?: boolean;
  closeOnBackdrop?: boolean;
  children: React.ReactNode;
}
```

#### Drawer Props

```tsx
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'full';
  title?: string;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  children: React.ReactNode;
}
```

---

## Multiple Modal Management

### Stacked Modals Support

Library က stacked modals (modal ပေါ် modal ဖွင့်တာ) ကို support လုပ်ပါသည်။

**Features:**

- Unlimited stack depth (no hard limit)
- Automatic z-index management
- Focus trap for each modal layer
- ESC key closes topmost modal only
- Backdrop stacking with opacity adjustment

**Usage Example:**

```tsx
function Example() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <Modal.Body>
        <button onClick={() => setShowSecond(true)}>Open Second Modal</button>

        <Modal isOpen={showSecond} onClose={() => setShowSecond(false)}>
          <Modal.Body>Second modal on top</Modal.Body>
        </Modal>
      </Modal.Body>
    </Modal>
  );
}
```

### Z-index Strategy

| Layer      | Z-index            | Description           |
| ---------- | ------------------ | --------------------- |
| Backdrop 1 | 1000               | First modal backdrop  |
| Modal 1    | 1001               | First modal           |
| Backdrop 2 | 1010               | Second modal backdrop |
| Modal 2    | 1011               | Second modal          |
| Backdrop N | 1000 + (N-1) \* 10 | Nth modal backdrop    |
| Modal N    | 1001 + (N-1) \* 10 | Nth modal             |

**Custom Z-index:**

```tsx
<Modal isOpen={true} zIndex={9999}>
  {/* High priority modal */}
</Modal>
```

---

## Modal Types

### Core Modals (Phase 1)

| Modal         | Description                                 |
| ------------- | ------------------------------------------- |
| Base Modal    | Foundation component with all core features |
| Confirm Modal | Yes/No, Delete confirmation dialogs         |
| Alert Modal   | Simple message display                      |

### Auth Modals (Phase 2)

| Modal                 | Description            |
| --------------------- | ---------------------- |
| Login Modal           | User login form        |
| Signup Modal          | User registration form |
| Forgot Password Modal | Password recovery form |

### Media Modals (Phase 3)

| Modal         | Description            |
| ------------- | ---------------------- |
| Image Modal   | Single image display   |
| Gallery Modal | Image carousel/gallery |
| Video Modal   | Video player modal     |

### Utility Modals (Phase 4)

| Modal             | Description              |
| ----------------- | ------------------------ |
| Form Modal        | Generic form container   |
| Empty State Modal | No data placeholder      |
| Loading Modal     | Progress/spinner display |
| Bottom Sheet      | Mobile slide-up panel    |
| Drawer            | Side panel (left/right)  |

---

## Core Features

### Accessibility (a11y)

- [x] `aria-modal="true"` attribute
- [x] `aria-labelledby` for title linking
- [x] `aria-describedby` for content description
- [x] `role="dialog"` semantic meaning
- [x] Focus trap implementation
- [x] Focus restore on close
- [x] Keyboard navigation (ESC to close, Tab within modal)
- [x] Screen reader announcements

### Animation & Transitions

- [x] Smooth open/close animations
- [x] Backdrop fade animation
- [x] Slide animations (for drawer/bottom sheet)
- [x] Configurable animation duration
- [x] Animation disable option

### Advanced Interaction System
- [x] Pinch-to-zoom & Pan (for ImageModal)
- [x] Swipe-to-dismiss (for BottomSheet)
- [x] Loading/Spinner states (consistent across all action modals)

### Responsive Design

- [x] Mobile-first approach
- [x] Touch-friendly interactions
- [x] Adaptive sizing (full-screen on mobile, centered on desktop)
- [x] Safe area insets support (notch devices)
- [x] Scroll lock on body when modal open

### Developer Experience

- [x] Full TypeScript support
- [x] Comprehensive prop types
- [x] Default props for quick setup
- [x] Event callbacks (onOpen, onClose, onConfirm, etc.)
- [x] Portal rendering
- [x] Z-index management

---

## Project Structure

```
Modalize/
├── src/
│   ├── components/
│   │   ├── Modal/
│   │   │   ├── Modal.tsx
│   │   │   ├── ModalHeader.tsx
│   │   │   ├── ModalBody.tsx
│   │   │   ├── ModalFooter.tsx
│   │   │   ├── ModalBackdrop.tsx
│   │   │   ├── Modal.types.ts
│   │   │   └── index.ts
│   │   ├── ConfirmModal/
│   │   ├── AlertModal/
│   │   ├── LoginModal/
│   │   ├── SignupModal/
│   │   ├── ForgotPasswordModal/
│   │   ├── ImageModal/
│   │   ├── GalleryModal/
│   │   ├── FormModal/
│   │   ├── EmptyStateModal/
│   │   ├── LoadingModal/
│   │   ├── BottomSheet/
│   │   └── Drawer/
│   ├── hooks/
│   │   ├── useModal.ts
│   │   ├── useFocusTrap.ts
│   │   ├── useScrollLock.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── portal.ts
│   │   ├── a11y.ts
│   │   └── index.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── stories/
│   └── *.stories.tsx
├── tests/
│   └── *.test.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Theme Configuration

### global.css (DaisyUI Custom Theme)

```css
@plugin "daisyui/theme" {
  name: 'dim';
  default: false;
  prefersdark: false;
  color-scheme: 'dark';
  --color-base-100: oklch(30.857% 0.023 264.149);
  --color-base-200: oklch(28.036% 0.019 264.182);
  --color-base-300: oklch(26.346% 0.018 262.177);
  --color-base-content: oklch(82.901% 0.031 222.959);
  --color-primary: oklch(86.133% 0.141 139.549);
  --color-primary-content: oklch(17.226% 0.028 139.549);
  --color-secondary: oklch(73.375% 0.165 35.353);
  --color-secondary-content: oklch(14.675% 0.033 35.353);
  --color-accent: oklch(74.229% 0.133 311.379);
  --color-accent-content: oklch(14.845% 0.026 311.379);
  --color-neutral: oklch(24.731% 0.02 264.094);
  --color-neutral-content: oklch(82.901% 0.031 222.959);
  --color-info: oklch(86.078% 0.142 206.182);
  --color-info-content: oklch(17.215% 0.028 206.182);
  --color-success: oklch(86.171% 0.142 166.534);
  --color-success-content: oklch(17.234% 0.028 166.534);
  --color-warning: oklch(86.163% 0.142 94.818);
  --color-warning-content: oklch(17.232% 0.028 94.818);
  --color-error: oklch(82.418% 0.099 33.756);
  --color-error-content: oklch(16.483% 0.019 33.756);
  --radius-selector: 0.25rem;
  --radius-field: 0.5rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
  --noise: 1;
}
```

---

## Demo App Structure (Dashboard Format)

Project ကို dashboard format နဲ့ တည်ဆောက်မည်။ Component library တစ်ခုအတွက် အသင့်တော်ဆုံး format ဖြစ်ပါသည်။

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  Modalize                    ⚙️ Settings | 📦 NPM       │
├────────────┬────────────────────────────────────────────┤
│            │                                            │
│ SEARCH...  │                                            │
│            │     ┌────────────────────────────────┐     │
│ GETTING    │     │                                │     │
│  Overview  │     │      Modal Preview             │     │
│  Install   │     │                                │     │
│            │     └────────────────────────────────┘     │
│ COMPONENTS │                                            │
│  Modal     │     ┌────────────────────────────────┐     │
│  Confirm   │     │  Props / Controls              │     │
│  Login     │     │  ○ Size: [sm|md|lg]            │     │
│  Signup    │     │  ○ Close on ESC: ✓             │     │
│  Image     │     │  ○ Animation: ✓                │     │
│  Gallery   │     └────────────────────────────────┘     │
│  ...       │                                            │
│            │     ┌────────────────────────────────┐     │
│ SETTINGS   │     │  Code Example                  │     │
│  Appearance│     │  <Modal>...</Modal>            │     │
│  Preferences│    └────────────────────────────────┘     │
└────────────┴────────────────────────────────────────────┘
```

### Header Quick Settings

Header မှာ Settings dropdown တစ်ခု ရှိမည်:

```
┌─────────────────────────────────────────────────────────┐
│  Modalize              [⚙️ Settings ▼]    [📦 NPM]     │
│                        ┌──────────────────┐             │
│                        │ Theme            │             │
│                        │ ○ Dim  ● Dark    │             │
│                        │ ○ Light          │             │
│                        ├──────────────────┤             │
│                        │ Open Settings    │             │
│                        └──────────────────┘             │
└─────────────────────────────────────────────────────────┘
```

### Demo App Features

| Feature            | Description                                 |
| ------------------ | ------------------------------------------- |
| Sidebar Navigation | Components တွေကို လွယ်ကူစွာ ရှာဖွေနိုင်     |
| Live Preview       | Modal တွေကို real-time ကြည့်ရှုနိုင်        |
| Props Controls     | Props တွေကို UI ကနေ ပြောင်းလဲစမ်းကြည့်နိုင် |
| Code Examples      | Copy-paste ready code snippets              |
| Theme Toggle       | Dim/Dark/Light theme ပြောင်းလဲနိုင်         |
| Responsive Preview | Mobile/Desktop view စမ်းကြည့်နိုင်          |
| Settings Page      | Appearance နှင့် Preferences ချိန်ညှိနိုင်  |
| Quick Settings     | Header မှာ theme မြန်မြန်ပြောင်းနိုင်       |

### Demo App Pages

| Page           | Content                                |
| -------------- | -------------------------------------- |
| Overview       | Library intro, features, quick start   |
| Installation   | npm install instructions, setup guide  |
| Modal          | Base modal with all props/variants     |
| Confirm        | Confirm modal examples                 |
| Login          | Login modal examples                   |
| Signup         | Signup modal examples                  |
| ForgotPassword | Forgot password modal examples         |
| Image          | Image modal examples                   |
| Gallery        | Gallery modal examples                 |
| Form           | Form modal examples                    |
| EmptyState     | Empty state modal examples             |
| Loading        | Loading modal examples                 |
| BottomSheet    | Bottom sheet examples                  |
| Drawer         | Drawer examples                        |
| Settings       | Appearance & Preferences configuration |

---

## Settings Configuration

Settings page မှာ အောက်ပါ options တွေ ပါဝင်မည်:

### Appearance Settings

| Setting        | Options                       | Default  | Description                               |
| -------------- | ----------------------------- | -------- | ----------------------------------------- |
| Theme          | Dim / Dark / Light            | Dim      | Dashboard theme selection                 |
| Reduced Motion | On / Off                      | Off      | Animation တွေကို လျှော့ချ (accessibility) |
| Code Theme     | One Dark / One Light / GitHub | One Dark | Code examples syntax highlighting         |

### Preferences Settings

| Setting            | Options                  | Default | Description                          |
| ------------------ | ------------------------ | ------- | ------------------------------------ |
| Default Modal Size | sm / md / lg / xl / full | md      | Preview မှာ default modal size       |
| Show Code Lines    | On / Off                 | On      | Code examples မှာ line numbers ပြရန် |
| Auto Close Preview | On / Off                 | On      | Page ပြောင်းတဲ့အခါ modal auto close  |
| Focus Indicator    | Default / High Contrast  | Default | Focus ring visibility                |

### Settings Storage

User settings တွေကို localStorage မှာ သိမ်းဆည်းမည်:

```tsx
interface UserSettings {
  theme: 'dim' | 'dark' | 'light';
  reducedMotion: boolean;
  codeTheme: 'one-dark' | 'one-light' | 'github';
  defaultModalSize: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCodeLines: boolean;
  autoClosePreview: boolean;
  focusIndicator: 'default' | 'high-contrast';
}
```

---

## Development Phases

### Phase 1: Foundation

**Priority: Critical | Dependencies: None**

- [x] Initialize Vite + React + TypeScript project
- [x] Setup Tailwind CSS v4 with DaisyUI
- [x] Configure custom theme (dim theme provided)
- [x] Setup Prettier for code formatting
- [x] Setup ESLint for code linting
- [x] Setup husky and lint-staged for pre-commit hooks
- [x] Setup project structure
- [x] Create base Modal component with compound pattern
- [x] Implement useModal hook
- [x] Add basic styling
- [x] Setup testing infrastructure
- [x] Setup Storybook

**Success Criteria:**

- Base Modal renders correctly
- useModal hook manages open/close state
- Basic styling matches theme
- `npm run format` works correctly
- `npm run lint` works correctly
- Pre-commit hooks run automatically

---

### Phase 2: Core Features

**Priority: Critical | Dependencies: Phase 1**

- [x] Implement focus trap
- [x] Implement scroll lock
- [x] Add keyboard navigation (ESC, Tab)
- [x] Add all a11y attributes
- [x] Implement Portal rendering
- [x] Add open/close animations
- [x] Add backdrop animation
- [x] Implement responsive sizing

**Success Criteria:**

- All a11y tests pass
- Animations smooth on all devices
- Focus management works correctly
- No scroll issues when modal open

---

### Phase 3: Pre-built Modals (Core)

**Priority: High | Dependencies: Phase 2**

- [x] Create ConfirmModal component
- [x] Create AlertModal component
- [x] Add variants (success, warning, error, info)
- [x] Add size variants (sm, md, lg, xl, full)
- [x] Write tests for each modal
- [x] Create Storybook stories

**Success Criteria:**

- All modals render correctly
- All variants work as expected
- Tests pass with >80% coverage

---

### Phase 4: Auth Modals

**Priority: High | Dependencies: Phase 2**

- [x] Create LoginModal component
- [x] Create SignupModal component
- [x] Create ForgotPasswordModal component
- [x] Add form validation hooks
- [x] Add loading states
- [x] Add error states
- [x] Add success states
- [x] Write tests
- [x] Create Storybook stories

**Success Criteria:**

- Forms validate correctly
- All states render properly
- Responsive on all devices

---

### Phase 5: Media Modals

**Priority: Medium | Dependencies: Phase 2**

- [x] Create ImageModal component
- [x] Create GalleryModal component
- [x] Add zoom functionality
- [x] Add navigation arrows
- [x] Add keyboard navigation (arrows)
- [x] Add touch swipe support
- [x] Write tests
- [x] Create Storybook stories

**Success Criteria:**

- Images load and display correctly
- Gallery navigation works
- Touch gestures work on mobile

---

### Phase 6: Utility Modals

**Priority: Medium | Dependencies: Phase 2**

- [x] Create FormModal component
- [x] Create EmptyStateModal component
- [x] Create LoadingModal component
- [x] Create BottomSheet component
- [x] Create Drawer component
- [x] Add position variants (left, right for Drawer)
- [x] Write tests
- [x] Create Storybook stories

**Success Criteria:**

- All components render correctly
- Animations smooth
- Responsive behavior correct

---

### Phase 7: Polish & Documentation

**Priority: High | Dependencies: All Phases**

- [x] Code review and refactoring
- [x] Performance optimization
- [x] Bundle size optimization
- [x] Write comprehensive README
- [x] Write API documentation
- [x] Create usage examples
- [x] Add JSDoc comments
- [x] Final testing round

**Success Criteria:**

- Bundle size < 50KB gzipped
- Documentation complete
- All tests pass

---

### Phase 8: NPM Publishing

**Priority: Critical | Dependencies: Phase 7**

- [ ] Configure package.json for npm
- [ ] Setup build process
- [ ] Create npm account (if needed)
- [ ] Publish to npm
- [ ] Verify installation works
- [ ] Create GitHub release

**Success Criteria:**

- Package installs correctly via npm
- Import works in fresh project
- Version 1.0.0 published

---

## Testing Strategy

### Unit Tests

- Component rendering
- Props handling
- State management
- Event handling
- Accessibility attributes

### Integration Tests

- Modal open/close flow
- Focus trap behavior
- Keyboard navigation
- Form submission (auth modals)

### Visual Tests (Storybook)

- All component variants
- All sizes
- All states
- Responsive breakpoints

---

## Success Metrics

| Metric              | Target                                            |
| ------------------- | ------------------------------------------------- |
| Bundle Size         | < 50KB gzipped                                    |
| Test Coverage       | > 80%                                             |
| Accessibility Score | 100% (a11y audit)                                 |
| TypeScript          | Strict mode, full types                           |
| Browser Support     | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| React Version       | 18+                                               |

---

## Risk Assessment

| Risk                             | Impact | Mitigation                              |
| -------------------------------- | ------ | --------------------------------------- |
| Tailwind v4 compatibility issues | High   | Test early, check documentation         |
| Focus trap edge cases            | Medium | Use proven library patterns             |
| Animation performance on mobile  | Medium | Test on real devices, optimize          |
| Bundle size bloat                | Medium | Tree-shaking, code splitting            |
| a11y compliance                  | High   | Use a11y testing tools, follow WAI-ARIA |

---

## Next Steps

1. **Start Phase 1** - Initialize project with Vite + React + TypeScript
2. Setup Tailwind CSS v4 with custom theme
3. Create base Modal component
4. Implement useModal hook

---

## Notes

- No backend required - this is a frontend-only library
- Theme will be theme-agnostic but default styling matches provided dark theme
- All modals will support custom className for user overrides
- Library will be tree-shakeable for optimal bundle size
