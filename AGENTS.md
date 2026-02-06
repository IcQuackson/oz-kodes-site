# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React + TypeScript app code.
- `src/pages/` contains route-level pages (`Index.tsx`, `NotFound.tsx`).
- `src/components/` contains reusable UI and section components; `src/components/ui/` is the shadcn-ui/Radix-based library.
- `src/hooks/` and `src/lib/` store shared hooks and utilities (importable via `@/` alias).
- `src/assets/` stores local images used by the app.
- `src/test/` contains Vitest setup and example tests.
- `public/` contains static assets served as-is.

## Build, Test, and Development Commands
- `npm run dev`: start the Vite dev server with HMR.
- `npm run build`: production build to `dist/`.
- `npm run build:dev`: development-mode build for debugging.
- `npm run preview`: serve the production build locally.
- `npm run lint`: run ESLint across the repo.
- `npm run test`: run Vitest in CI mode.
- `npm run test:watch`: run Vitest in watch mode.

## Coding Style & Naming Conventions
- Language: TypeScript + React, ES modules.
- Indentation: 2 spaces, no tabs. Use double quotes for strings.
- Keep React components in `PascalCase` (e.g., `HeroSection.tsx`).
- Hooks use `useX` naming (e.g., `use-mobile.tsx`).
- Use `@/` imports for `src/` (configured in `vitest.config.ts`).
- Linting: ESLint with React Hooks and React Refresh rules. No Prettier in this repo.

## Testing Guidelines
- Framework: Vitest with `jsdom` and Testing Library.
- Naming: `*.test.ts` or `*.test.tsx` under `src/` (configured in `vitest.config.ts`).
- Add tests for new components or behaviors that affect UI rendering or routing.

## Commit & Pull Request Guidelines
- Commit messages are short and descriptive; recent history shows simple, imperative titles (e.g., `Create ...`).
- A prefixed style appears in history (`template: ...`), but it is not consistent; follow existing style where possible.
- PRs should include a clear summary of changes, tests run (e.g., `npm run test`, `npm run lint`), and screenshots or short clips for UI changes.

## Configuration Tips
- Tailwind and PostCSS are configured via `tailwind.config.ts` and `postcss.config.js`.
- Router routes live in `src/App.tsx`; keep the catch-all `*` route last.
