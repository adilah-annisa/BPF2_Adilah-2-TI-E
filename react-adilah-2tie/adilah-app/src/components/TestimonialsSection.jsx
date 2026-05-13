import testimonials from "../data/visitorTestimonials.json";

const avatarGradients = [
  "from-hijau to-emerald-400",
  "from-sky-500 to-indigo-400",
  "from-emerald-500 to-teal-400",
  "from-lime-500 to-green-400",
  "from-emerald-400 to-cyan-400",
];

function Avatar({ seed = 0 }) {
  const g = avatarGradients[seed % avatarGradients.length];
  const initials = ["S", "D", "P", "A", "N"][seed % 5];

  return (
    <div
      className={`h-12 w-12 rounded-full bg-gradient-to-br ${g} p-[2px] shadow-soft`}
      aria-hidden="true"
    >
      <div className="h-full w-full rounded-full bg-white/90 flex items-center justify-center border border-white/70">
        <span className="font-extrabold text-gray-900 text-sm">{initials}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="promo" className="bg-gray-50/60 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-poppins-extrabold text-3xl text-gray-900">Testimonial</h2>
            <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
              Demo review dari pelanggan. Styling dibuat premium dan rapi seperti landing modern.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-soft px-5 py-4">
            <p className="text-sm text-gray-600">Promosi aktif</p>
            <p className="mt-1 text-lg font-extrabold text-gray-900">
              Diskon <span className="text-hijau">hingga 20%</span>
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article
              key={t.name}
              className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-soft p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Avatar seed={idx} />
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">{t.name}</h3>
                  <p className="text-xs font-semibold text-hijau">Verified</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                “{t.review}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

