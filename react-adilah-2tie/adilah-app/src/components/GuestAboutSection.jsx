import React from "react";

function FeatureCard({ title, description }) {
  return (
    <div className="group relative rounded-3xl bg-white/70 border border-slate-200 px-6 py-6 backdrop-blur shadow-soft hover:shadow-2xl transition-all">
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-emerald-500/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <h3 className="text-slate-900 font-extrabold text-xl">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function GuestAboutSection() {
  return (
    <section id="about" className="pt-6 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700">
                Tentang Sedap
              </span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-slate-800">
              Tujuan kami adalah mendigitalisasi rasa.
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
              Dari bahan pilihan sampai proses penyajian, semua dibuat agar
              pengalaman kuliner Anda terasa autentik—ringkas, konsisten, dan
              selalu nikmat.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Kualitas terukur", "Proses rapi", "Rasa konsisten"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard title="Bahan Segar" description="Dipilih setiap hari untuk rasa yang paling hidup." />
            <FeatureCard title="Layanan Cepat" description="Proses cepat, delivery terjaga, siap saat Anda butuh." />
            <FeatureCard title="Harga Sahabat" description="Nyaman di kantong tanpa mengorbankan kualitas." />
          </div>
        </div>
      </div>
    </section>
  );
}
