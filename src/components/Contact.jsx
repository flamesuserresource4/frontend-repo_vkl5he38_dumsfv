import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Mengirim...')
    setTimeout(() => {
      setStatus('Terkirim! Kami akan menghubungi Anda segera.')
    }, 800)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Mulai Diskusi</h2>
            <p className="mt-3 text-gray-600">Ceritakan kebutuhan Anda, kami bantu merancang solusi terbaik. Respon cepat via email.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-green-500"/>Tersedia untuk proyek jangka pendek & panjang</div>
              <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-500"/>Bisa remote / on-site (Jabodetabek)</div>
              <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-fuchsia-500"/>Bahasa: Indonesia & English</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-black/5 p-6 shadow-sm bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nama</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="email@domain.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Perihal</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Pembuatan aplikasi, landing page, dll" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Pesan</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Ceritakan kebutuhan Anda secara singkat" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 shadow-sm hover:bg-indigo-700 transition">Kirim</button>
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
