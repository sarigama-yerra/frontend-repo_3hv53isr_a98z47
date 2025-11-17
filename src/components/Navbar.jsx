import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-md bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white/90 font-semibold tracking-wide">Symbio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
              >
                Get Started
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href="#get-started" className="block rounded-lg px-3 py-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white text-center">
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
