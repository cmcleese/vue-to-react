import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  // In the future: Wrap with ThemeProvider, AuthProvider, etc.
  return (
    <>
      {children}
    </>
  );
}
