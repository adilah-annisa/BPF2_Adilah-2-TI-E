import { FiZap, FiDroplet, FiShoppingBag } from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Fast Delivery",
    desc: "Estimasi pengantaran cepat dengan proses yang rapi.",
  },
  {
    icon: FiDroplet,
    title: "Fresh Food",
    desc: "Bahan segar, dimasak dengan konsistensi rasa.",
  },
  {
    icon: FiShoppingBag,
    title: "Easy Order",
    desc: "Pesan cepat lewat UI yang bersih dan responsif.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50/60 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="font-poppins-extrabold text-3xl text-gray-900">Kenapa Sedap?</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Sedap adalah restoran modern yang fokus pada kecepatan, kualitas, dan pengalaman pesan yang nyaman—mulai dari landing sampai makanan sampai di tangan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl bg-white/70 border border-gray-200 p-6 backdrop-blur shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hijau/15 text-hijau">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
              <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-hijau to-emerald-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

