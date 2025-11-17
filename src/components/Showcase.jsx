import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Prompt to Prototype',
    desc: 'Sketch intent in natural language and see it materialize in seconds.',
  },
  {
    title: 'Adaptive Agents',
    desc: 'Agents negotiate tasks with you, deferring key decisions to the human loop.',
  },
  {
    title: 'Trust by Design',
    desc: 'Transparent logs and reversible steps to keep integrity at the core.',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#0b0114] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">See it in motion</h2>
          <p className="mt-3 text-white/70">A glimpse of what symbiosis feels like in practice.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-white/90 shadow-xl backdrop-blur hover:border-fuchsia-400/40"
            >
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <div className="mt-6 h-40 rounded-xl bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20 ring-1 ring-inset ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
