# Vue2React — Project Rules

## What This Is

An interactive learning platform for Vue developers transitioning to React.
Side-by-side code comparisons, interactive playgrounds, concept mapping.

## Tech Stack

- React 19, Vite 6+, TypeScript
- Tailwind CSS v4 + sass-embedded
- MDX for lesson content
- react-router-dom v7 for routing
- Fuse.js for search
- shadcn/ui for base components
- lucide-react for icons

## Folder Structure

src/
components/
layout/ → AppShell, Sidebar, TopNav
ui/ → buttons, badges, code panels (shadcn base)
docs/ → lesson-specific components (CodeComparison, GotchaCard, etc)
content/
comparisons/ → MDX files for side-by-side lessons
concepts/ → MDX for standalone concept explanations
guides/ → MDX for migration guides
pages/ → route-level components
hooks/ → custom React hooks
data/ → nav config, lesson metadata
lib/ → utils, shiki setup

## Styling

- Dark theme first
- Tailwind utility classes, no inline styles
- CSS variables for theme tokens (defined in index.css)
- Vue accent color: #42b883 (Vue green)
- React accent color: #61dafb (React cyan)

## Code Style

- Functional components only, no class components
- TypeScript strict mode
- Named exports preferred
- Component files: PascalCase.tsx
- Hook files: useCamelCase.ts

## Content Pattern

Each lesson has: header → concept intro → side-by-side code → key differences → gotchas → summary → next lesson
Lessons are MDX files that use custom components like <CodeComparison>, <GotchaCard>, <KeyDiff>
