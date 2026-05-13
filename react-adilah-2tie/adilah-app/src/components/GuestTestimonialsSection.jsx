import React from "react";

const testimonials = [
  {
    nama: "Alya",
    ulasan:
      "Rasanya serius enak! Packaging rapi dan sampai tanpa kendur. Recommended banget.",
  },
  {
    nama: "Bima",
    ulasan:
      "Delivery cepat. Burger-nya masih hangat dan bumbunya pas. Mantap!",
  },
  {
    nama: "Citra",
    ulasan:
      "Konsisten tiap pesan. Dari pertama sampai sekarang selalu puas sama rasanya.",
  },
  {
    nama: "Dimas",
    ulasan:
      "Harga oke, porsi pas. Supportnya juga cepat kalau ada kendala.",
  },
  {
    nama: "Eka",
    ulasan:
      "Suka banget sama pilihan menu dan promo yang mereka kasih. Legit!",
  },
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-emerald-500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.5 8.5C8.5 8.5 7 10 7 12v4h6v-4c0-1.1-.9-2-2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 8.5c-2 0-3.5 1.5-3.5 3.5v4h6v-4c0-1.1-.9-2-2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getCustomerAvatarSrc(name) {
  // Uses local images from: /public/img/{nama}.jpg
  return `/img/${name}.jpg`;
}

export default function GuestTestimonialsSection() {
  return (
    <section id="promo" className="pt-10 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-emerald-600">
            Review Pelanggan
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-800">
            Kata mereka tentang Sedap
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.nama}
              className="group rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-soft p-6 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <QuoteIcon />
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-emerald-700 font-extrabold text-sm">
                    {t.nama.charAt(0)}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-slate-700 leading-relaxed">
                “{t.ulasan}”
              </p>

              <div className="mt-5 flex items-center gap-3">
                <img
                  src={getCustomerAvatarSrc(t.nama)}
                  alt={t.nama}
                  className="h-11 w-11 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <p className="font-extrabold text-slate-800 leading-tight">
                    {t.nama}
                  </p>
                  <p className="text-sm text-slate-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
