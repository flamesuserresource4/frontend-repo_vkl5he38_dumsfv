const projects = [
  {
    title: 'Platform E-Learning',
    desc: 'LMS modern dengan streaming video, kuis interaktif, dan pembayaran.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    img: 'https://images.unsplash.com/photo-1554941829-202a0b2403b1?q=80&w=1480&auto=format&fit=crop',
  },
  {
    title: 'Marketplace UMKM',
    desc: 'Marketplace multi-tenant untuk penjual lokal dengan dashboard analitik.',
    tags: ['React', 'Node', 'Stripe'],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1480&auto=format&fit=crop',
  },
  {
    title: 'SaaS Analytics',
    desc: 'Pelacakan metrik real-time dan charting interaktif.',
    tags: ['Next.js', 'FastAPI', 'Postgres'],
    img: 'https://images.unsplash.com/photo-1551281044-8d8c5aa0f0d5?q=80&w=1480&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Portofolio</h2>
          <p className="mt-3 text-gray-600">Beberapa proyek unggulan yang pernah dikerjakan.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 text-xs text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
