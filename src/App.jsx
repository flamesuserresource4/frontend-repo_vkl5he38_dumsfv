import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} YoKYa.id — Full Stack Web Developer</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Layanan</a>
            <a href="#projects" className="hover:text-gray-900">Proyek</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
