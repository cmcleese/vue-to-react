import type { ReactNode } from 'react';
import { BookOpen, Box, Compass, Layers, Rocket } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
  activePath?: string;
}

export function MainLayout({ children, activePath = '/core-concepts' }: MainLayoutProps) {
  const navItems = [
    { label: 'Introduction', path: '/intro', icon: Compass },
    { label: 'Core Concepts', path: '/core-concepts', icon: BookOpen },
    { label: 'Advanced Patterns', path: '/advanced', icon: Box },
    { label: 'State Management', path: '/state', icon: Layers },
    { label: 'Deployment', path: '/deploy', icon: Rocket },
  ];

  return (
    <div className="flex min-h-screen w-full bg-main text-gray-200 font-sans selection:bg-primary/30 selection:text-primary-foreground">
      
      {/* Left Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-[260px] bg-sidebar border-r border-white/5 flex flex-col z-10">
        {/* Logo Area */}
        <div className="flex items-center gap-3 h-16 px-6 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center shadow-[0_0_15px_rgba(92,213,246,0.3)]">
            <span className="text-white font-bold text-lg leading-none">V</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">Vue2React</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.path === activePath;
            const Icon = item.icon;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 relative group
                  ${isActive 
                    ? 'text-white bg-white/5' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }
                `}
                onClick={(e) => {
                  if (item.path !== activePath) e.preventDefault();
                }}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r shadow-[0_0_10px_rgba(92,213,246,0.8)]" />
                )}
                <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'}`} />
                {item.label}
              </a>
            )
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-[260px] mr-[220px] min-h-screen flex flex-col relative">
        <div className="flex-1 p-10 lg:p-14 max-w-[900px] w-full">
          {children}
        </div>
      </main>

      {/* Right Rail */}
      <aside className="fixed top-0 right-0 h-screen w-[220px] bg-sidebar border-l border-white/5 py-10 px-6 z-10 overflow-y-auto">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
          On This Page
        </h3>
        <ul className="space-y-3">
          {[
            { label: 'Overview', id: 'overview' },
            { label: 'The Virtual DOM', id: 'virtual-dom', active: true },
            { label: 'JSX Syntax', id: 'jsx-syntax' },
            { label: 'Component Lifecycle', id: 'component-lifecycle' },
          ].map((link) => (
             <li key={link.id}>
               <a 
                 href={`#${link.id}`}
                 className={`text-sm block transition-colors duration-200 relative
                   ${link.active ? 'text-tertiary font-medium' : 'text-gray-500 hover:text-gray-300'}
                 `}
               >
                 {link.label}
                 {link.active && (
                   <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-tertiary shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                 )}
               </a>
             </li>
          ))}
        </ul>
      </aside>

    </div>
  );
}
