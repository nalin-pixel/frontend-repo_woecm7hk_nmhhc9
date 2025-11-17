import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(251,146,60,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-tr from-rose-500/20 to-amber-400/20 blur-3xl" />
          <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-3xl sm:text-4xl font-bold text-white">
            Build with Creative House
          </motion.h3>
          <p className="relative z-10 mt-3 text-white/75 max-w-2xl">
            Tell us about your vision. We partner with founders, product teams, and leaders to design brands, ship products, and craft stories that resonate.
          </p>
          <form className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" placeholder="Your name" />
            <input type="email" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" placeholder="Email" />
            <textarea rows={4} className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" placeholder="Tell us about your project" />
            <button className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:opacity-95 transition">
              Request a call
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
