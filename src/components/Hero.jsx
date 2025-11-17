import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient overlays for mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(244,63,94,0.25),transparent)] pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
              Hybrid space for creativity, strategy, and conscious growth
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              Creative House
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
              A modern home for visionaries. We blend a world-class creative studio, a sharp strategic consulting hub, and a vibrant community for innovators.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:opacity-95 transition">
                Start a project
              </a>
              <a href="#explore" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white/90 backdrop-blur-md hover:bg-white/10 transition">
                Explore the house
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
