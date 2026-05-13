export default function GradientFoodArt({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      {/* Decorative SVG blob */}
      <svg
        className="h-full w-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B074" stopOpacity="0.95" />
            <stop offset="0.45" stopColor="#34D399" stopOpacity="0.55" />
            <stop offset="1" stopColor="#93C5FD" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="600" x2="800" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B074" stopOpacity="0.25" />
            <stop offset="0.6" stopColor="#22C55E" stopOpacity="0.45" />
            <stop offset="1" stopColor="#10B981" stopOpacity="0.75" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        <path
          d="M152 178C205 68 327 42 414 80C504 119 567 219 598 312C630 406 625 498 540 534C454 570 343 538 260 500C177 462 99 423 88 338C77 254 99 246 152 178Z"
          fill="url(#g1)"
          filter="url(#blur)"
        />
        <path
          d="M506 98C588 92 674 151 705 236C736 322 710 421 637 468C564 515 455 512 380 460C305 408 266 320 292 238C318 156 424 104 506 98Z"
          fill="url(#g2)"
          filter="url(#blur)"
        />

        {/* Subtle lines */}
        <g opacity="0.25" stroke="#0F172A" strokeWidth="2">
          <path d="M110 380C190 330 270 330 350 380C430 430 510 430 590 380" />
          <path d="M140 420C220 370 300 370 380 420C460 470 540 470 620 420" />
        </g>

        {/* Floating dots */}
        <g>
          {[
            [120, 210, 10],
            [220, 155, 6],
            [310, 220, 7],
            [470, 160, 8],
            [560, 250, 6],
            [660, 200, 9],
            [620, 360, 7],
            [520, 410, 6],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#00B074" fillOpacity="0.25" />
          ))}
        </g>
      </svg>

      {/* Glass highlight overlay */}
      <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur [mask-image:radial-gradient(closest-side_at_30%_20%,black,transparent_65%)]" />
    </div>
  );
}

