import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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

export default function VisitorNavbar() {
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
      <div className="bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/visitor" className="flex items-center gap-3">
              <span className="font-poppins-extrabold text-2xl text-gray-900 tracking-tight">
                Sedap <b className="text-hijau">.</b>
              </span>
            </Link>
          </div>

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
                className="text-gray-600 hover:text-hijau transition-colors font-semibold text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-2xl border border-gray-200 text-gray-700 hover:border-hijau/60 hover:text-hijau font-semibold transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-2xl bg-hijau text-white hover:bg-green-600 font-semibold transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-gray-200 bg-white/80 hover:border-hijau/60 transition-all"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={open ? "block" : "hidden"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5">
            <div className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-soft p-3">
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
                    className="px-3 py-3 rounded-2xl text-gray-700 hover:bg-gray-50 hover:text-hijau transition-all font-semibold"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-2xl border border-gray-200 text-gray-700 hover:border-hijau/60 hover:text-hijau font-semibold transition-all duration-200 text-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-2xl bg-hijau text-white hover:bg-green-600 font-semibold transition-all duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


