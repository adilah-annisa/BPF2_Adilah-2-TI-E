import React from "react";

const UNSPLASH_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500";

const products = [
  {
    id: 1,
    name: "Signature Burger Sedap",
    price: 45000,
    image: UNSPLASH_PRODUCT_IMAGE,
  },
  {
    id: 2,
    name: "Ayam Crispy Premium",
    price: 52000,
    image: UNSPLASH_PRODUCT_IMAGE,
  },
  {
    id: 3,
    name: "Pasta Alfredo Lezat",
    price: 56000,
    image: UNSPLASH_PRODUCT_IMAGE,
  },
  {
    id: 4,
    name: "Sate Daging Pilihan",
    price: 48000,
    image: UNSPLASH_PRODUCT_IMAGE,
  },
  {
    id: 5,
    name: "Nasi Bakar Spesial",
    price: 47000,
    image: UNSPLASH_PRODUCT_IMAGE,
  },
];

function formatPrice(idr) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(idr);
  } catch {
    return `Rp ${idr.toLocaleString("id-ID")}`;
  }
}

function ProductCard({ product }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-soft overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/75 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            Unggulan
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-slate-900 font-extrabold text-lg">{product.name}</h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-emerald-600 font-extrabold text-base">
            {formatPrice(product.price)}
          </span>

          <button
            type="button"
            className="rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-600 transition-colors"
            onClick={() => {}}
            aria-label={`Add ${product.name}`}
          >
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GuestFeaturedProductsSection() {
  return (
    <section id="menu" className="pt-10 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600">Produk Unggulan</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-800">
              Pilihan favorit yang selalu bikin ketagihan
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
          >
            Lihat Semua
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
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
