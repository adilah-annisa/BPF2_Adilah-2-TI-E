import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoSedap from "./LogoSedap";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Promo", href: "#promo" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

function scrollToHash(href) {
  const id = href?.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HamburgerIcon({ open }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M4 17H20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function GuestNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white/70 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/guest" className="flex items-center">
            <LogoSedap />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
                className="text-slate-600 hover:text-emerald-500 transition-colors font-semibold text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full border border-emerald-500/40 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 transition-all font-semibold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-semibold shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-slate-200 bg-white/80 hover:border-emerald-500/30 transition-all"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5">
              <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-soft p-3">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        scrollToHash(item.href);
                      }}
                      className="px-3 py-3 rounded-2xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all font-semibold"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-2xl border border-emerald-500/40 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 font-semibold transition-all text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-2xl bg-emerald-500 text-white hover:bg-emerald-600 font-semibold transition-all text-center"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
