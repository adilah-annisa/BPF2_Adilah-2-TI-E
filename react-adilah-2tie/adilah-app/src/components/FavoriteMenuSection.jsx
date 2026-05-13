import { useMemo } from "react";
import { FiShoppingCart } from "react-icons/fi";
import MenuCardImage from "./MenuCardImage";
import menu from "../data/visitorMenu.json";

export default function FavoriteMenuSection() {
  const items = useMemo(() => menu ?? [], []);

  return (
    <section id="menu" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-poppins-extrabold text-3xl text-gray-900">Favorite Menu</h2>
            <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
              Pilihan populer dengan rasa yang konsisten. Klik Order Now untuk menambah ke pesanan (demo).
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-soft px-5 py-4">
            <p className="text-sm text-gray-600">Mulai pesan sekarang</p>
            <p className="mt-1 text-lg font-extrabold text-gray-900">
              <span className="text-hijau">Sedap</span> dalam hitungan menit
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p, idx) => (
            <article
              key={p.id}
              className="group rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-soft overflow-hidden hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="p-4">
                <div className="h-44">
                  <MenuCardImage index={idx} />
                </div>
              </div>

              <div className="px-5 pb-5">
                <h3 className="text-base font-extrabold text-gray-900 leading-snug">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-700">Rp {p.price.toLocaleString("id-ID")}</p>
                  <span className="inline-flex items-center rounded-xl bg-hijau/15 px-3 py-1 text-xs font-semibold text-hijau">
                    New
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("menu");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 text-white py-2.5 font-semibold hover:bg-gray-800 transition-colors"
                >
                  Order Now
                  <FiShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

