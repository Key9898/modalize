# Modalize - Change Log

All notable changes to the Modalize project will be documented in this file. This ensures all AI Agents and contributors stay in sync with the latest project developments.

---

## [2026-03-25] - Accessibility & Code Quality Fixes

### Fixed
- **aria-labelledby Unique ID (WCAG 2.1):** Replaced hard-coded `id="modalize-title"` with React's `useId()` hook for unique ID generation. This ensures nested modals have distinct IDs, preventing ARIA conflicts.
- **prefers-reduced-motion Support (WCAG 2.1 Level AAA):** Added `@media (prefers-reduced-motion: reduce)` media query to disable animations for users who prefer reduced motion.
- **Duplicate CSS Removal:** Removed duplicate `@media (max-width: 640px)` block in global.css that was causing unnecessary CSS bloat.

### Files Modified
- `src/types/index.ts` - Added `titleId` to `ModalContextValue` interface.
- `src/components/Modal/Modal.tsx` - Implemented `useId()` hook for unique titleId generation.
- `src/components/Modal/ModalHeader.tsx` - Updated to use context-provided `titleId` instead of hard-coded ID.
- `src/styles/global.css` - Added reduced motion support and removed duplicate CSS rules.

---

## [2026-03-25] - UI/UX & Interaction Refinement

### Added
- **Pinch-to-Zoom (Rule 33):** Implemented high-end pinch-to-zoom and pan interactions in `ImageModal` using `framer-motion` for professional mobile media viewing.
- **Swipe-to-Dismiss (Rule 33):** Added gesture-based swipe-down-to-dismiss behavior for `BottomSheet` (Standard mobile UX).
- **Loading States:** Implemented consistent loading/spinner support for `AlertModal` to match `ConfirmModal` and `FormModal` architecture.

### Fixed/Improved
- **Gallery Responsiveness (Rule 7):**
  - Resolved navigation button overflow on small screens by switching to responsive padding-based offsets.
  - Replaced fixed `min-height` with fluid `min-h-[300px] md:min-h-[450px]` for better fit on compact devices.
- **Image Controls:** Added "Reset Zoom" and "Zoom In/Out" dedicated control overlays to `ImageModal` for accessibility and ease of use.
- **ImageModal Layout Refinement:**
  - Standardized container padding (`p-6 sm:p-12`) to provide breathing room.
  - Repositioned top-right icons into a flex header to prevent overlap with the image.
  - Constrained image height further (`max-h-[65vh] sm:max-h-[72vh]`) to ensure UI elements remain clear of the content.
  - Lowered zoom control overlay and refined title spacing for a more open, professional feel.
- **A11y:** Ensured ARIA compliance for new gesture-based interactions.

### Files Modified
- `src/types/index.ts` - Added types for new interaction states.
- `src/components/GalleryModal/GalleryModal.tsx` - Fixed navigation and height responsiveness.
- `src/components/BottomSheet/BottomSheet.tsx` - Added swipe-to-dismiss gesture.
- `src/components/ImageModal/ImageModal.tsx` - Implemented pinch-to-zoom and refined controls.
- `src/components/AlertModal/AlertModal.tsx` - Added loading state.

---

## [2026-03-24] - Responsive Sidebar with Mobile Overlay

### Added
- **Responsive Sidebar Pattern:** Implemented industry-standard responsive sidebar behavior following Vercel, Linear, and GitHub patterns.
- **Mobile Sidebar Overlay:** Sidebar now opens as a slide-in overlay on mobile/tablet with backdrop blur.
- **Hamburger Menu:** Added hamburger menu button (Menu icon) to Navbar for mobile/tablet users.
- **Mobile Sidebar State:** New `isMobileSidebarOpen` state in `useDemoStore` with `toggleMobileSidebar` and `closeMobileSidebar` actions.

### Features
- **Desktop (lg: and above):** Sidebar visible by default, can collapse/expand with toggle button.
- **Mobile/Tablet (below lg:):** Sidebar completely hidden by default, hamburger menu in navbar opens overlay.
- **Backdrop:** Semi-transparent backdrop (`bg-black/50`) that closes sidebar on click.
- **Close Button:** X button in mobile sidebar header for explicit close action.
- **Auto-close on Navigate:** Mobile sidebar automatically closes when user clicks a navigation link.
- **Responsive Search:** Search input width adapts (`w-48 sm:w-64`) for better mobile UX.
- **Responsive Buttons:** NPM install button hidden on mobile (`hidden sm:flex`).

### Fixed
- **Logo Duplication:** Resolved a bug where Logo and Title were appearing twice in the mobile sidebar. Ensured only the mobile-specific header (with close button) is shown in the slide-up overlay (Rule 7 Compliance).

### Technical Details
- Extracted `SidebarContent` component for reuse between desktop and mobile sidebars.
- Desktop sidebar uses `hidden lg:flex` to only show on large screens.
- Mobile sidebar uses `AnimatePresence` for smooth enter/exit animations.
- Framer Motion animations for slide-in effect (`x: -288` to `x: 0`).
- Tailwind CSS responsive breakpoints (`lg:` = 1024px).

### Files Modified
- `src/demo/store/useDemoStore.ts` - Added mobile sidebar state and actions.
- `src/demo/components/Sidebar.tsx` - Responsive layout with mobile overlay.
- `src/demo/components/Navbar.tsx` - Hamburger menu and responsive adjustments.

---

## [2026-03-24] - Global Search Functionality

### Added
- **Global Search Component:** Implemented a comprehensive search system in `Navbar.tsx` with real-time filtering and keyboard navigation.
- **Search Data Module:** Created `searchData.ts` with all components, pages, and settings indexed for search.
- **Keyboard Navigation:** Full keyboard support (↑↓ to navigate, Enter to select, Escape to close).
- **Smart Scoring:** Search results ranked by relevance (exact match > starts with > contains > keyword match > category match).
- **Visual Feedback:** Animated dropdown with highlighted selection state and result count footer.
- **Category Organization:** Results grouped by category (Get Started, Components, Settings) with icons.

### Features
- **Instant Search:** Real-time filtering as user types with 8 results max display.
- **Clear Button:** Quick clear with X button that maintains focus.
- **Keyboard Shortcuts:** Footer shows navigation hints (↑↓ navigate, ↵ select, esc close).
- **Framer Motion Animations:** Smooth enter/exit transitions for dropdown and clear button.
- **Click Outside Detection:** Auto-close search when clicking outside.

### Technical Details
- Uses `useMemo` for optimized search performance.
- `useCallback` for stable navigation handlers.
- Proper TypeScript typing with `SearchItem` interface.
- Lucide-react icons for consistent iconography.

---

## [2026-03-23] - Advanced Radius System & Core Quality Pass

### Added
- **Radius Inheritance System:** Implemented a CSS-variable based inheritance system (`--modalize-radius`). All internal elements like `.input`, `.btn`, `.alert`, and `.card` now automatically inherit the parent modal's radius, ensuring a cohesive look (Rule 12).
- **Expanded Radius Variants:** Added `2xl` and `full` variants to the `ModalRadius` type and `global.css`.
- **Specialized Container Support:** 
  - **`Drawer`:** Added `radius` prop with smart logic (only rounds the "opening" corners, keeping edge corners flush).
  - **`BottomSheet`:** Added `radius` prop (only rounds top corners).
  - **`LoadingModal`:** Added full radius customization support.
- **Interactive Demos:** Added Radius Selectors to `AlertModal`, `ConfirmModal`, `LoginModal`, `GalleryModal`, `EmptyStateModal`, `Drawer`, and `BottomSheet` demo pages for real-time testing.
- **Utility Classes:** Added `.rounded-modalize` and `.rounded-modalize-sm` to replace all inline styles across the library (Rule 12 compliance).

### Fixed
- **Rule 12 (No Inline CSS):** Systematically removed all `style={{ borderRadius: ... }}` occurrences in favor of CSS utility classes.
- **Rule 21 (Strict Types):** Eliminated all `as any` type assertions in demo pages; everything is now strongly typed with `ModalRadius` and proper union types.
- **Rule 23 (React Imports):** Removed all unused `import React` statements and switched to `import type { ReactNode }` for cleaner, modern React 18+ bundles.
- **Syntax Error:** Resolved a critical JSX syntax error in `GalleryModal.tsx` thumbnails introduced during the styling refactor.

### Checks
- `npm run lint` ✅ Passed (Zero errors)
- `npx tsc --noEmit` ✅ Passed (Zero errors)
- `npm run build` ✅ Passed (Production build successful)

---

## [2026-03-23] - Code Quality, Syntax Highlighting & Rules Update

## [2026-03-23] - Code Quality, Syntax Highlighting & Rules Update

### Added
- **Syntax Highlighting:** Installed `prism-react-renderer` and upgraded `CodeBlock.tsx` with full syntax highlighting. Theme-aware: oneDark for dim/dark, oneLight for light theme.
- **Copy Button:** Upgraded to lucide-react `Copy`/`Check` icon button with visual feedback.
- **`filename` prop:** `CodeBlock` now shows a header label (e.g., "Terminal", "App.tsx").
- **`author` field:** `package.json` author set to "Wunna Aung".

### Fixed
- **Modal Centering:** Switched `modalize-backdrop` from Flexbox to CSS Grid (`place-items: center`) to ensure mathematically perfect centering across all browsers and screen sizes.
- **Mobile Alignment:** Removed the mobile-specific `flex-end` override that was forcing modals to the bottom of the screen; all standard modals are now centered on mobile by default.
- **Animation Smoothness:** Removed `translateY` offsets from `modal-scale-in/out` animations to prevent visual shifting/bouncing during the opening and closing transitions.
- **AlertModal UI Refinement:** Increased vertical padding to `py-8`, added a soft background to icons, and refined typography for a more premium, balanced look.
- **ConfirmModal UI Refinement:** Re-aligned icon and text elements, added descriptive sub-text support, and standardized button sizes for better internal symmetry.
- **Overview.tsx:** Quick Start now uses `CodeBlock` — has syntax color + copy button.

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
