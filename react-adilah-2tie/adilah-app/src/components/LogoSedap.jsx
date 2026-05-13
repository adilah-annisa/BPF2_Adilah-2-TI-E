import React from "react";

export default function LogoSedap({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sedapGrad" x1="8" y1="6" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10b981" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <path
          d="M24 6C32 6 40 14 40 22C40 30 32 38 24 38C16 38 8 30 8 22C8 14 16 6 24 6Z"
          fill="url(#sedapGrad)"
          opacity="0.25"
        />
        <path
          d="M16.2 28.3C18.2 33.6 22.9 37.2 28.7 37.2C34.5 37.2 39.2 33.6 41.2 28.3"
          stroke="#10b981"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M18 20.8C20.2 16.2 23.8 13.4 28.2 13.4C32.6 13.4 36.2 16.2 38.4 20.8"
          stroke="#059669"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <circle cx="20.2" cy="24.2" r="2.1" fill="#10b981" />
        <circle cx="30.8" cy="24.2" r="2.1" fill="#10b981" />
      </svg>

      <span className="font-poppins-extrabold text-2xl text-slate-800 tracking-tight">
        Sedap <b className="text-emerald-500">.</b>
      </span>
    </div>
  );
}
