import { Brain, Sparkles, Users, Cpu } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Co-creation Engine',
    desc: 'Blend strategic human direction with generative AI for truly hybrid outcomes.'
  },
  {
    icon: Users,
    title: 'Collaborative Control',
    desc: 'Stay in command with adaptive guardrails and transparent decision trails.'
  },
  {
    icon: Cpu,
    title: 'Real-time Adaptation',
    desc: 'Systems that listen, learn, and respond to your intent in milliseconds.'
  },
  {
    icon: Sparkles,
    title: 'Immersive Visuals',
    desc: 'Cinematic lighting, depth, and motion to make complex ideas feel intuitive.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-[#0b0114] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for Human + AI flow</h2>
          <p className="mt-3 text-white/70">The building blocks of a symbiotic creative process.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-fuchsia-400/40 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 grid place-items-center">
                <f.icon className="h-6 w-6 text-fuchsia-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
