import { motion } from 'framer-motion'
import { Sparkles, Brain, Users, ArrowRight } from 'lucide-react'

const features = [
  {
    id: 'studio',
    icon: Sparkles,
    title: 'Creative Studio',
    copy:
      'Brand systems, visual identities, and digital experiences that move people. We craft bold work with emotional depth.',
    bullets: ['Brand identity', 'Web + product design', 'Campaign art direction'],
  },
  {
    id: 'strategy',
    icon: Brain,
    title: 'Strategy Hub',
    copy:
      'Clear thinking that catalyzes growth. We align vision, positioning, and go-to-market strategy for long-term momentum.',
    bullets: ['Vision + positioning', 'Growth strategy', 'Go-to-market playbooks'],
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Space',
    copy:
      'Gatherings, programs, and a network of builders. Learn, collaborate, and create with peers pushing the culture forward.',
    bullets: ['Salons + workshops', 'Member programs', 'Founder circles'],
  },
]

export default function FeatureSections() {
  return (
    <section id="explore" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(251,113,133,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          What we are made of
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.a
              key={f.id}
              href={`#${f.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent to-rose-500/10" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.copy}</p>
                <ul className="mt-4 space-y-1 text-white/60">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 inline-flex items-center gap-2 text-rose-300 group-hover:text-rose-200">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
