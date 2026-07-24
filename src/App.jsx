function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center gap-8 px-6 py-16 sm:px-10">
        <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
          React + Vite + Tailwind CSS
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Fresh project scaffold is ready.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Start building in <code className="rounded bg-zinc-800 px-2 py-1 text-emerald-200">src/App.jsx</code>.
            Tailwind utilities are active through the official Vite plugin.
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          {['Vite dev server', 'React 19', 'Tailwind v4'].map((item) => (
            <div key={item} className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-5">
              <p className="text-sm font-medium uppercase text-zinc-500">{item}</p>
              <p className="mt-3 text-2xl font-semibold text-white">Configured</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
