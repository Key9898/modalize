# Modalize - Project Development Rules

> **CRITICAL:** Any AI Agent, IDE, or Human Contributor editing this repository MUST read and strictly adhere to these rules before writing or modifying any code. These rules act as the absolute source of truth alongside `PROJECT_PLAN.md`.

## 1. UI/UX & Design Philosophy

- **Style:** The UI/UX must always be **Clean, Simple, and Professional (Pro)**. Avoid cluttered interfaces and unnecessary complexity. Focus on providing a premium experience.
- **Responsiveness (Absolute Rule):** Any component or page must be 100% responsive and work flawlessly across **Desktop, Tablet, Mobiles, all devices, and all screen sizes**. Mobile-first design is heavily encouraged.
- **Animations:** Modals and interactive elements should have smooth, polished transitions (e.g., proper fade-ins, slide-ups for bottom sheets) without feeling sluggish.

## 2. Styling & CSS Rules

- **Strictly Tailwind CSS:** Use Tailwind CSS v4 utility classes for all styling.
- **No Inline CSS:** Absolutely **NO** inline styling (`style={{ ... }}`) is allowed anywhere. **Exception:** Third-party library requirements (e.g., `prism-react-renderer` style prop) where inline styles are mandatory for the library to function correctly.
- **Global Themes:** Adhere to `global.css` and strictly use semantic DaisyUI colors (`bg-base-100`, `text-base-content`, `text-primary`, etc.) to guarantee seamless Light and Dark mode behavior. Do not hardcode arbitrary hex values unless they are brand colors mapped in the config.

## 3. Icons & Assets

- **`lucide-react` Only:** Exclusively use `lucide-react` for all icons across the project.
- **Prohibited:** Inline `<svg>` icons, HeroIcons, React Icons, and FontAwesome are strictly forbidden.

## 4. Architecture & React Patterns

- **Component Pattern:** Use the **Compound Components Pattern** (e.g., `<Modal.Header>`, `<Modal.Body>`) for complex UI components to maintain maximum developer flexibility.
- **Strict Types:** Everything must be strongly typed with TypeScript. Using `any` is forbidden unless absolutely unavoidable. Unused parameters MUST use the `_` prefix convention (e.g., `_event`, `_email`) which is permitted by the ESLint `argsIgnorePattern: '^_'` rule.
- **Circular Dependencies:** Check imports carefully. Shared contexts and utility types must live in separate files (e.g., `ModalContext.tsx`) to prevent circular referencing issues.
- **No Unused React Imports:** Do not import `React` (e.g., `import React from 'react'`) in JSX/TSX files since React 18+ uses the new JSX transform. Only import specific hooks (e.g., `useState`).

## 5. Modularity & Workflow (What Else To Know)

- **Zero-Unnecessary-Dependencies (Core Library Only):** The **core library** (`src/components/`, `src/hooks/`, `src/utils/`) must remain extremely lightweight — no heavy packages for simple features. This rule applies to the library bundle only. The **demo app** (`src/demo/`) may install documentation-serving packages (e.g., `prism-react-renderer` for syntax highlighting) as they are `devDependencies` and do not affect the published library size.
- **Storybook First:** Any newly added or drastically modified component should have its `.stories.tsx` file updated or created so that it can be reviewed in isolation. Stories files that use React hooks inside the `render` function are permitted — the ESLint `react-hooks/rules-of-hooks` rule is intentionally disabled for all `*.stories.tsx` files in `eslint.config.js`.
- **Accessibility Ensurement:** Focus trapping, proper ARIA labels (`aria-modal`, `aria-labelledby`, `role="dialog"`), and keyboard navigation (ESC to close) are non-negotiable for modals.
- **Terminal Cleanliness & Code Checks:** Always ensure ALL THREE of the following pass flawlessly before considering a task completed. Do not ignore linter warnings.
  - `npm run lint` — Zero ESLint errors
  - `npx tsc --noEmit` — Zero TypeScript errors
  - `npm run build` — Production build must succeed without errors
- **Consult the Plan:** Before starting any new feature or structural change, check `docs/PROJECT_PLAN.md` to ensure the work aligns with the project direction.

## 6. Demo App — Code Block Standard

- **Use `CodeBlock` Component:** ALL code examples displayed in the demo app (`src/demo/`) MUST use the shared `src/demo/components/CodeBlock.tsx` component. Never write custom copy-to-clipboard logic in individual pages — this causes code duplication and inconsistency.
- **`CodeBlock` Props:** Always provide `language` (e.g., `"tsx"`, `"bash"`, `"css"`) and `filename` (e.g., `"Terminal"`, `"App.tsx"`) props for correct syntax highlighting and header labels.
- **Syntax Highlighting:** `CodeBlock` uses `prism-react-renderer` and automatically adapts theme: `oneDark` for `dim`/`dark` app themes, `oneLight` for `light` app theme.

31. **Brand Identity Consistency:** The Logo and Favicon background colors MUST match the designated theme primary colors exactly: Dim (`oklch(86.133% 0.141 139.549)`), Dark (`oklch(75% 0.15 264)`), Light (`oklch(65% 0.15 264)`).
32. **Documentation Protocol:** Every change (even minor bug fixes/typos) MUST be documented in `docs/CHANGELOG.md` to maintain a complete history. However, `docs/PROJECT_PLAN.md` MUST ONLY be updated for "New Feature Additions", "Significant Architectural Changes", or "Updated Design Standards" (The Source of Truth). Minor bug fixes that do not change the feature's core specification should skip the Plan update to keep it concise.
33. **Animation Standard:** Exclusively use `framer-motion` for all UI animations, transitions, and interactive states. Traditional CSS transitions and Tailwind transition classes are discouraged for complex animations to maintain a high-end, consistent motion system.
34. **CSS Source of Truth & Mandatory Execution:** **YOU MUST READ `src/styles/global.css` BEFORE STARTING ANY STYLE-RELATED MODIFICATIONS.** NEVER modify or override global styles without first reading and thoroughly understanding the source of truth. Always use the predefined theme variables (e.g., `--color-primary`, `--color-base-100`) rather than hardcoding new OKLCH or HEX values, to ensure the Brand Identity remains consistent across all modules.
35. **STRICT RULE ADHERENCE:** ALL AGENTS MUST follow every single rule in this `PROJECT_RULES.md` document without exception. Any task performed MUST be cross-checked against these rules before completion to ensure 100% compliance with the Project's standards and architecture.
36. **FOCUSED IMPLEMENTATION & SCOPE INTEGRITY:** Agents MUST ONLY modify the code sections directly related to the requested task. UNLESS explicitly asked for refactoring, AGENTS ARE FORBIDDEN from altering or "improving" stable, working code that is outside the current task's scope. This ensures that current functionalities remain intact and prevents unnecessary regressions.
