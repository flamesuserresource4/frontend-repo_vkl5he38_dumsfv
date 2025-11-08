import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500" />
          <span className="font-extrabold tracking-tight text-xl">YoKYa.id</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-indigo-600 text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-indigo-700 transition"
          >
            Konsultasi Gratis
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-indigo-700 transition"
              onClick={() => setOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
