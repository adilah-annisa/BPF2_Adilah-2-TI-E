import React from "react";

function SocialIcon({ type }) {
  const common = "h-5 w-5";
  if (type === "fb") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "ig") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17.5 6.5h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // tw
  return (
    <svg
      viewBox="0 0 24 24"
      className={common}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 4s-.7 2.1-2 3.4c1.3 10.9-7.4 14.7-14 12.2-1.8-.7-3-2-3.9-3.6 1.6.2 3-.3 4.2-1.1-1.6-.2-2.9-1.1-3.4-2.6.7.1 1.4-.1 2-.4C2.6 9.9 2.2 8.3 3 6.9c.6.8 1.5 1.4 2.6 1.6C5 7.3 5.1 5.8 6.1 5c1.2-1 3-1 4.3-.1.7.5 1.2 1 1.6 1.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PartnerLogo({ name }) {
  // Monochrome simple SVG wordmark placeholder
  return (
    <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white/60 backdrop-blur px-5 py-3">
      <span className="text-xs sm:text-sm font-extrabold tracking-wide text-slate-700">
        {name}
      </span>
    </div>
  );
}

export default function GuestFooter() {
  return (
    <footer id="contact" className="pt-12 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white/70 backdrop-blur shadow-soft overflow-hidden">
          <div className="grid gap-10 px-6 py-10 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1">
              <div className="text-lg font-extrabold text-slate-900">Sedap</div>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Jl. Sedap No. 1, koki@sedap.com
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/60 hover:border-emerald-500/40 hover:text-emerald-600 transition-colors"
                  aria-label="Facebook"
                >
                  <SocialIcon type="fb" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/60 hover:border-emerald-500/40 hover:text-emerald-600 transition-colors"
                  aria-label="Instagram"
                >
                  <SocialIcon type="ig" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/60 hover:border-emerald-500/40 hover:text-emerald-600 transition-colors"
                  aria-label="Twitter"
                >
                  <SocialIcon type="tw" />
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                Partner Kami
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <PartnerLogo name="Gojek" />
                <PartnerLogo name="Grab" />
                <PartnerLogo name="ShopeeFood" />
                <div className="invisible">.</div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                Quick Links
              </div>
              <div className="mt-4 flex flex-col gap-2 text-slate-700">
                <a href="#home" className="hover:text-emerald-500 transition-colors font-semibold">
                  Home
                </a>
                <a href="#menu" className="hover:text-emerald-500 transition-colors font-semibold">
                  Menu
                </a>
                <a href="#promo" className="hover:text-emerald-500 transition-colors font-semibold">
                  Promo
                </a>
                <a href="#about" className="hover:text-emerald-500 transition-colors font-semibold">
                  Tentang
                </a>
              </div>

              <div className="mt-8 text-xs text-slate-500">
                © {new Date().getFullYear()} Sedap. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
