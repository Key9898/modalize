# Modalize - Change Log

All notable changes to the Modalize project will be documented in this file. This ensures all AI Agents and contributors stay in sync with the latest project developments.

---

## [2026-03-23] - Code Quality, Syntax Highlighting & Rules Update

### Added
- **Syntax Highlighting:** Installed `prism-react-renderer` and upgraded `CodeBlock.tsx` with full syntax highlighting. Theme-aware: oneDark for dim/dark, oneLight for light theme.
- **Copy Button:** Upgraded to lucide-react `Copy`/`Check` icon button with visual feedback.
- **`filename` prop:** `CodeBlock` now shows a header label (e.g., "Terminal", "App.tsx").
- **`author` field:** `package.json` author set to "Wunna Aung".

### Fixed
- **Overview.tsx:** Quick Start now uses `CodeBlock` — has syntax color + copy button.
- **Installation.tsx:** All code blocks use `CodeBlock`. Removed duplicate copy logic. Fixed package name (`modalize-react` → `modalize`).
- **TypeScript build errors:** Fixed `e.target.value` type cast in `AlertModalDemo`, `ConfirmModalDemo`, `DrawerDemo`, `ModalDemo`. `npm run build` passes clean.
- **Lint (26 errors → 0):** Fixed all pre-existing ESLint errors across demo pages, stories, GalleryModal, Modal, Navbar, Appearance. `npm run lint` passes clean.
- **TypeScript:** `npx tsc --noEmit` passes with zero errors.

### Updated
- **`PROJECT_RULES.md`:** Updated to reflect all standards established this session:
  - Rule 5 clarified — "Zero-Unnecessary-Dependencies" applies to core library only; demo app dependencies (e.g., `prism-react-renderer`) are permitted.
  - New Rule 6 added — Demo App CodeBlock Standard (all code examples must use `CodeBlock` component).
  - Code Checks expanded — `npm run build` added alongside `lint` and `tsc --noEmit`.
  - TypeScript `_` prefix convention documented.
  - Storybook stories ESLint override documented.

---

## [2026-03-23] - Project Completion & Documentation

### Added

- **UI/UX Standardization:** Standardized all demo pages with a consistent card-based centered layout for "Perfect Alignment".
- **Demo Enhancements:** Added descriptive metadata labels and standardized control sizes (`md`) across all 14+ demo modules.
- **Accessibility:** Implemented `announceToScreenReader` using an `sr-only` class (removing inline styles) to improve a11y, fulfilling core accessibility goals.
- **Animations:** Added `modalize-no-animation` class and conditional prop logic in `Modal.tsx` to strictly disable all CSS animations on demand via the `animation` prop.
- **Mobile Support:** Added `env(safe-area-inset-*)` padding globally for `modalize-modal--full` and `modalize-bottomsheet` to respect device notches.
- **Auth Modals:** Added `successMessage` states and types, completely hooking up visual success UI banners for both `LoginModal` and `SignupModal`.
- **Media Modals:** Implemented native touch-swipe gestures in `GalleryModal` using `framer-motion` `drag="x"`.
- **Documentation:** Re-wrote `README.md` from scratch to be a fully comprehensive guide containing API documentation and advanced usage examples.

### Fixed

- **Visual Alignment:** Fixed height and width mismatch between `select` and `button` elements in demo previews, ensuring identical dimensions (`w-48`) for perfect symmetry.
- **Inconsistent Layouts:** Resolved left-aligned vs centered-aligned discrepancies across different demo pages.
- **Code Quality:** Fixed linting warnings in `GalleryModalDemo.tsx` by removing unused `useState` hooks.
- **React Standards:** Systematically removed all outdated `import React` statements in demo pages to comply with Rule 23.
- **PROJECT_PLAN.md:** Marked off all remaining checklist items `[x]` indicating full completion of Phases 1 up to 7, leaving only Phase 8 (NPM Publishing) unchecked.

---

## [2026-03-22] - Settings Page Addition

### Added

- **New Features:**
  - Integrated `framer-motion` as the project standard for all animations (Rule 33).
  - Added Sidebar toggle functionality to the Logo component for improved navigation UX.
- **Settings Page:** New Settings page for Dashboard with Appearance and Preferences sections.
- **Sidebar Collapse:** Added collapse/expand functionality to Sidebar with icon mapping for all components and smart tooltips (hover names) in collapsed state. Controlled via `isSidebarCollapsed` state with localStorage persistence.
- **UI Refinements:**
  - Fixed Navbar layout alignment issues (vertical stacking).
  - Synchronized Sidebar section headers (Components & Settings) for better consistency.
  - Organized `public` directory: moved used favicons to `/favicons/`, created `/logo/` with theme-specific SVGs, and removed unused `.svg` files.
  - Migrated code-based Logo to a high-precision SVG asset-based system for perfect branding consistency across themes.
  - Fixed Sidebar icon and section dots (`•••`) alignment bug for perfect vertical centering in collapsed mode.
  - Fixed Main Footer layout bug where content was cutting off and drastically reduced its height for a minimalist design.
  - Improved Sidebar footer version badge readability.
  - Implemented a hover-activated subtle custom scrollbar for Sidebar.
  - Implemented Sidebar Auto-scroll to ensure the active menu item is always visible during navigation.
  - Added a global Main Content Footer with official attribution.
- **Demo Pages:** Added Missing Demo pages (`Installation`, `ForgotPasswordModalDemo`, `EmptyStateModalDemo`) and linked them via `Sidebar.tsx` and `App.tsx`.
- **Testing Infrastructure:** 
  - Configured `Vitest` and React Testing Library in `vite.config.ts` and `vitest.setup.ts`.
  - Added base unit tests in `tests/Modal.test.tsx`.
- **Storybook:** Added initial Storybook configuration and first story (`stories/Modal.stories.tsx`).
- **Code Quality:** Initialized Husky and configured `pre-commit` hook to automatically run `lint-staged` for Prettier and ESLint.
- **Documentation:** Updated `docs/PROJECT_PLAN.md` to accurately reflect completed Phase 1-6 tasks (changed `[ ]` to `[x]`).
- **Appearance Settings:** Theme (Dim/Dark/Light), Reduced Motion, Code Theme options.
- **Appearance Settings Page:** Created `src/demo/pages/settings/Appearance.tsx` with Theme selector (Dim/Dark/Light), Code Theme selector, and Reduced Motion toggle.
- **Preferences Settings Page:** Created `src/demo/pages/settings/Preferences.tsx` with Default Modal Size, Show Code Lines, Auto Close Preview, and Focus Indicator options.
- **Quick Settings Dropdown:** Header dropdown for fast theme switching with link to full Settings page.
- **UserSettings Interface:** TypeScript interface for localStorage settings persistence.
- **Sidebar Settings Section:** Added SETTINGS section to Sidebar component with Appearance and Preferences navigation items (using lucide-react icons: Palette, SlidersHorizontal, Settings).

### Updated

- **Layout Structure:** Added SETTINGS section to sidebar with Appearance and Preferences sub-menus.
- **Demo App Features:** Added Settings Page and Quick Settings features; updated Theme Toggle to support Dim/Dark/Light.
- **Demo App Pages:** Added Settings page to navigation.
- **App Routes:** Added routes for `/settings/appearance` and `/settings/preferences` in `src/demo/App.tsx`.

---

## [2026-03-22] - Brand Identity Overhaul

### Added

- **Logo Design:** Introduced the "Layers" icon (Lucide-based) as the official project logo.
- **Theme Support:** Locked internal theme colors (`oklch` based) for Dim (Lime), Dark (Indigo), and Light (Blue) consistent appearances.
- **Branding Documentation:** Added a dedicated 'Branding' section to `PROJECT_PLAN.md`.
- **Project Rule 31:** Enforced visual consistency between Dashboard Logo and Favicon.

### Updated

- **Favicon Sync:** Updated all favicon SVG files (dim, dark, light) to match the dashboard's new color specs while maintaining the "M" letter design.
- **Sidebar Integration:** Integrated the new `Logo` component into the `Sidebar`.

### Fixed

- **Sidebar Navigation:** Enhanced readability by increasing font size (`menu-md`) and adding a prominent active state indicator (left border and primary background).
- **Color Inconsistency:** Resolved discrepancies between CSS `oklch` colors and static SVG favicon colors by using high-precision specs.
