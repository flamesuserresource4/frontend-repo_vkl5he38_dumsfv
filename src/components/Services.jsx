const services = [
  {
    title: 'Pengembangan Frontend',
    desc: 'UI modern dengan React, aksesibilitas baik, animasi halus, dan performa tinggi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"/></svg>
    ),
  },
  {
    title: 'API & Backend',
    desc: 'Perancangan arsitektur scalable dengan FastAPI, autentikasi, dan integrasi pihak ketiga.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2 4 4 12-12"/></svg>
    ),
  },
  {
    title: 'Basis Data & DevOps',
    desc: 'Desain skema data, MongoDB, CI/CD, kontainerisasi, observabilitas, dan monitoring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Layanan</h2>
          <p className="mt-3 text-gray-600">Solusi menyeluruh untuk membangun produk dari 0 hingga produksi.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 grid place-items-center rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
