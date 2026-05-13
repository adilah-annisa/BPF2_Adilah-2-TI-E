import GradientFoodArt from "./GradientFoodArt";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(0,176,116,0.14),transparent_55%),radial-gradient(700px_circle_at_85%_20%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,176,116,0.20),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1 shadow-soft backdrop-blur">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-hijau/15 text-hijau">
                <FiCheckCircle className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-gray-700">Restoran modern • Delivery cepat • Order mudah</span>
            </div>

            <h1 className="mt-6 font-poppins-extrabold text-4xl leading-[1.05] text-gray-900 sm:text-5xl">
              Sedap—Nikmati makanan premium yang
              <span className="text-hijau"> selalu tepat waktu</span>.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Pesan makanan favoritmu dalam hitungan detik. UI yang bersih, tracking yang jelas, dan packing yang rapi.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-hijau px-5 py-3 text-white font-semibold shadow-soft hover:bg-green-600 transition-all duration-300"
              >
                Pesan Sekarang
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors">
                  <FiArrowRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white/70 px-5 py-3 font-semibold text-gray-700 hover:border-hijau/60 hover:text-hijau transition-all duration-300 backdrop-blur"
              >
                Lihat Kenapa Sedap
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Fresh setiap hari", "Driver berpengalaman", "Promo mingguan", "Support ramah"].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl bg-white/60 border border-gray-200 px-4 py-3 backdrop-blur shadow-soft"
                >
                  <p className="text-sm font-semibold text-gray-800">
                    <span className="mr-2 text-hijau">•</span> {t}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-hijau/15 via-white to-sky-200/20 blur-2xl" />
            <div className="relative rounded-[40px] border border-gray-200 bg-white/60 shadow-soft backdrop-blur">
              <div className="p-5 sm:p-7">
                <div className="relative h-[340px] sm:h-[420px]">
                  <GradientFoodArt className="relative h-full w-full" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Fast", value: "12m" },
                    { label: "Fresh", value: "Daily" },
                    { label: "Easy", value: "1 Tap" },
                  ].map((x) => (
                    <div
                      key={x.label}
                      className="rounded-2xl bg-white/70 border border-gray-200 px-3 py-3 backdrop-blur"
                    >
                      <p className="text-xs font-semibold text-gray-600">{x.label}</p>
                      <p className="mt-1 text-sm font-extrabold text-gray-900">{x.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -left-6 h-20 w-20 rounded-3xl bg-hijau/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

