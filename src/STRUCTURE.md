Recommended docs-site layout:

- `src/assets/`: Images, icons, and static brand assets
- `src/components/`: Reusable React components
  - `layout/`: Navbar, Sidebar, Footer, and Page Shell
  - `ui/`: Design system primitives (Button, Input, Card)
  - `docs/`: Documentation specific features (Code blocks, Vue/React comparison toggles)
- `src/content/`: The core documentation in MDX
  - `concepts/`, `comparisons/`, `guides/`
- `src/pages/`: Route-level components (Home, Doc detail, search view)
- `src/hooks/`: Custom React logic (search hooks, theme toggles)
- `src/lib/`: External tool configurations (Fuse.js, MDX setup) and core utilities
- `src/styles/`: Global Scss and Tailwind CSS entry points
- `src/types/`: Shared TypeScript interfaces and utility types
- `src/data/`: Static metadata, navigation maps, and sidebar configs
