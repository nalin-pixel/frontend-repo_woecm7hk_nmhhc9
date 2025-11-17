import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSections from './components/FeatureSections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="relative">
        <Hero />
        <div className="absolute inset-x-0 top-0">
          <Navbar />
        </div>
      </div>

      <FeatureSections />
      <CTA />

      <footer className="bg-black py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Creative House. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter/X</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
