import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-[var(--font-manrope)]">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <footer id="get-started" className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Build your symbiotic future</h3>
              <p className="mt-2 text-white/70">Start exploring the canvas of collaboration today.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Enter your email"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-90 transition">
                Request Access
              </button>
            </form>
          </div>
          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Symbio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
