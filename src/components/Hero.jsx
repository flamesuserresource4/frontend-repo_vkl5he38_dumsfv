export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,theme(colors.indigo.300),transparent_40%),radial-gradient(ellipse_at_bottom_right,theme(colors.fuchsia.300),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50">Full Stack Developer</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Bangun produk web modern bersama <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">YoKYa.id</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Kami membantu startup dan bisnis membangun aplikasi web end-to-end: desain, frontend, backend, hingga deployment dengan performa tinggi.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-semibold px-5 py-3 shadow-sm hover:bg-indigo-700 transition">
                Mulai Proyek
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 text-sm font-semibold px-5 py-3 hover:bg-gray-50 transition">
                Lihat Portofolio
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white" />
              </div>
              <span>Dipercaya klien dari berbagai industri</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-black/5 bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1480&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-lg border border-black/5 bg-white shadow p-4">
                <div className="text-xs text-gray-500">Tech Stack</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-gray-100">React</span>
                  <span className="px-2 py-1 text-xs rounded bg-gray-100">FastAPI</span>
                  <span className="px-2 py-1 text-xs rounded bg-gray-100">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
