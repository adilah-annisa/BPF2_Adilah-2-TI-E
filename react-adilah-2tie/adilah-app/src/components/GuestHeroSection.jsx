import React from "react";

export default function GuestHeroSection() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Decorative whitespace */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-slate-800 font-extrabold text-4xl leading-[1.08] sm:text-5xl">
              Kelezatan Autentik, Diantar Langsung ke Meja Anda.
            </h1>

            <p className="mt-5 max-w-xl text-slate-600 leading-relaxed text-base sm:text-lg">
              Nikmati pengalaman kuliner terbaik dengan bahan pilihan dan koki
              profesional hanya di Sedap.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-soft hover:bg-emerald-600 transition-all duration-300"
              >
                Lihat Menu Unggulan
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-white/70 px-6 py-3 font-semibold text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300"
              >
                Kenapa Sedap?
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Bahan pilihan", value: "Quality terjaga" },
                { label: "Delivery", value: "Cepat & rapi" },
                { label: "Rasa", value: "Konsisten tiap hari" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-2xl bg-white/70 border border-slate-200 px-4 py-4 backdrop-blur shadow-soft"
                >
                  <p className="text-sm font-semibold text-slate-700">
                    {x.label}
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">
                    {x.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-emerald-500/15 via-white to-sky-200/20 blur-2xl" />

            <div className="relative rounded-[40px] border border-slate-200 bg-white/70 shadow-soft backdrop-blur">
              <div className="p-4 sm:p-6">
                {/* “3D” stacked hero visuals (local assets) */}
                <div className="relative h-[340px] sm:h-[440px]">
                  <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%)]" />

                  {/* soft glow underlay */}
                  <div className="pointer-events-none absolute left-1/2 top-[64%] h-[160px] w-[220px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-2xl" />

                  {/* Back layer (restaurant) */}
                  <img
                    src="/img/restaurant/90650625-9e35-4de4-ba84-e36778e43ef8.jpg"
                    alt="Ilustrasi 3D restaurant"
                    className="absolute left-[55%] top-[52%] h-[210px] w-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl object-contain drop-shadow-[0_30px_45px_rgba(16,185,129,0.14)]"
                    style={{
                      animation: "float-slow 6s ease-in-out infinite",
                      transform: "rotate(8deg)",
                    }}
                  />

                  {/* Middle layer (makanan) */}
                  <img
                    src="/img/makanann/e845198d-f387-42d9-b971-19f64253b655.jpg"
                    alt="Ilustrasi 3D makanan"
                    className="absolute left-1/2 top-[52%] h-[260px] sm:h-[320px] w-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl object-contain drop-shadow-[0_35px_55px_rgba(16,185,129,0.18)]"
                    style={{
                      animation: "float-slow 4.8s ease-in-out infinite",
                      transform: "rotate(-6deg)",
                    }}
                  />

                  {/* Front layer (food) */}
                  <img
                    src="/img/food/0caf8c33-af12-446c-a029-c32175f2002c.jpg"
                    alt="Ilustrasi 3D burger"
                    className="absolute left-[46%] top-[46%] h-[220px] w-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl object-contain drop-shadow-[0_30px_45px_rgba(59,130,246,0.10)]"
                    style={{
                      animation: "float-slow 5.4s ease-in-out infinite",
                      transform: "rotate(12deg)",
                      // slight delay effect
                      animationDelay: "0.2s",
                    }}
                  />

                  {/* subtle floating glows */}
                  <div className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-emerald-500/15 blur-2xl" />
                  <div className="pointer-events-none absolute -top-8 right-6 h-20 w-20 rounded-full bg-sky-500/10 blur-2xl" />

                  {/* 3D highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)] opacity-30" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-3xl bg-emerald-500/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
