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
  assets/     → Images, svgs, and static assets
  components/
    layout/   → MainLayout, Sidebar, TopNav
    ui/       → Atomic components (shadcn/ui base)
    docs/     → Lesson-specific components (CodeComparison, GotchaCard, etc)
  content/
    comparisons/ → MDX files for side-by-side lessons
    concepts/    → MDX for standalone concept explanations
    guides/      → MDX for migration guides
  pages/      → Route-level components (e.g., LessonPage.tsx)
  providers/  → Global Context Providers (Theme, App Providers)
  hooks/      → Custom React hooks
  data/       → Nav config, lesson metadata
  lib/        → Utils, shiki setup
  styles/     → Global styles
  types/      → TypeScript definitions

## Styling

- Dark theme first
- Tailwind CSS v4 utility classes
- CSS variables for theme tokens (defined in index.css)
- Primary Accent (React): #5cd5f6
- Secondary Accent (Vue): #50df9c
- Tertiary Accent: #A855F7

## Code Style

- Functional components only, no class components
- TypeScript strict mode
- Named exports preferred
- Component files: PascalCase.tsx
- Hook files: useCamelCase.ts

## Content Pattern

Each lesson has: header → concept intro → side-by-side code → key differences → gotchas → summary → next lesson
Lessons are MDX files that use custom components like <CodeComparison>, <GotchaCard>, <KeyDiff>
