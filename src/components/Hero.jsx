import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Live Preview
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(168,85,247,0.45)]">
            AI + Human Symbiosis
          </h1>
          <p className="mt-5 text-lg text-white/80">
            A futuristic canvas where human intuition meets machine intelligence. Explore an
            interactive 3D narrative that celebrates collaboration, creativity, and control.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="pointer-events-auto rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-90 transition"
            >
              Get Started
            </a>
            <a
              href="#showcase"
              className="pointer-events-auto rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/20 transition"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
