import { MainLayout } from '../components/layout/MainLayout';

export function LessonPage() {
  return (
    <MainLayout>
      <div className="space-y-6 pb-20">
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary font-medium tracking-wide text-sm uppercase shadow-primary/20">Migration Guide</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span className="text-gray-400 text-sm">Lesson 3.4</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            The Virtual DOM
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mt-4">
            Transitioning from Vue's reactivity system to React's Virtual DOM reconciliation. Understand how React optimizes rendering without manual dependency tracking.
          </p>
        </div>

        {/* Lesson Placeholder Content */}
        <div className="prose prose-invert max-w-none">
          <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary shadow-[0_0_12px_rgba(80,223,156,0.6)]" />
            <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
               <span className="text-secondary drop-shadow-[0_0_8px_rgba(80,223,156,0.4)]">💡</span> Core Mindset Shift
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vue uses mutable state where "magic" property access tracks dependencies. 
              React uses immutable state; you must explicitly call a setter function to trigger a component re-render.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-10 text-lg font-light">
            Both frameworks use a Virtual DOM under the hood, but they reconcile it differently. React re-renders the whole
            component tree downwards by default, while Vue tracks fine-grained dependencies to only update necessary components.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Vue Code Block */}
            <div className="rounded-xl bg-[#0f1117] border border-white/5 overflow-hidden shadow-lg shadow-black/20">
               <div className="flex items-center gap-2 bg-black/40 px-4 py-3 border-b border-white/5">
                 <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
                 </div>
                 <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Vue.js Component</h4>
                 <div className="ml-auto text-[10px] text-gray-500 uppercase">Options API</div>
               </div>
               <pre className="text-sm text-gray-300 p-5 overflow-x-auto font-mono leading-relaxed">
                  <code className="text-gray-400">
                  <span className="text-emerald-400">{"<script>"}</span>
                  {"export default {"}
                  {"  data() {"}
                  {"    return {"}
                  {"      count: 0"}
                  {"    }"}
                  {"  },"}
                  {"  methods: {"}
                  {"    increment() {"}
                  <span className="text-emerald-300">{"      this.count++"}</span>
                  {"    }"}
                  {"  }"}
                  {"}"}
                  <span className="text-emerald-400">{"</script>"}</span>

                  <span className="text-emerald-400">{"<template>"}</span>
                  {"  <button @click=\"increment\">"}
                  {"    Count is: {{ count }}"}
                  {"  </button>"}
                  <span className="text-emerald-400">{"</template>"}</span>
                  </code>
               </pre>
            </div>
            
            {/* React Code Block */}
            <div className="rounded-xl bg-[#0f1117] border border-white/5 overflow-hidden shadow-lg shadow-black/20 relative group">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               <div className="flex items-center gap-2 bg-black/40 px-4 py-3 border-b border-white/5">
                 <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">React.js Hooks</h4>
                 <div className="ml-auto text-[10px] text-gray-500 uppercase">Functional</div>
               </div>
               <pre className="text-sm text-gray-300 p-5 overflow-x-auto font-mono leading-relaxed">
                <code className="text-gray-400">
                <span className="text-purple-400">{"import"}</span> {"{ useState }"} <span className="text-purple-400">{"from"}</span> <span className="text-emerald-300">{"'react'"}</span>

                <span className="text-purple-400">{"function"}</span> <span className="text-blue-300">{"Counter"}</span>{"() {"}
                {"  "}<span className="text-purple-400">{"const"}</span> {"[count, setCount] = "} <span className="text-blue-300">{"useState"}</span>{"(0)"}

                {"  "}<span className="text-purple-400">{"return"}</span> {"("}
                {"    <button onClick={() => setCount(c => c + 1)}>"}
                {"      Count is: "}<span className="text-primary">{"{count}"}</span>
                {"    </button>"}
                {"  );"}
                {"}"}
                </code>
               </pre>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
