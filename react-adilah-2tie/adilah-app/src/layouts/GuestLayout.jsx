import React from "react";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 [scroll-behavior:smooth] relative overflow-hidden">
      {/* Mesh gradient (Growio-like) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.20),transparent_60%)] blur-3xl" />
        <div className="absolute top-40 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
