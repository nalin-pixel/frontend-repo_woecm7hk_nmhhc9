import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 flex items-center justify-center shadow-md shadow-orange-500/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 text-lg font-semibold tracking-wide">Creative House</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#strategy" className="hover:text-white transition-colors">Strategy</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md text-white transition-all">Get in touch</a>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 border border-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}
