const palette = [
  { a: "#00B074", b: "#22C55E" },
  { a: "#10B981", b: "#3B82F6" },
  { a: "#34D399", b: "#60A5FA" },
  { a: "#059669", b: "#22C55E" },
  { a: "#00B074", b: "#93C5FD" },
  { a: "#22C55E", b: "#34D399" },
];

export default function MenuCardImage({ index = 0 }) {
  const p = palette[index % palette.length];

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(700px circle at 20% 10%, ${p.a}55, transparent 45%),` +
            `radial-gradient(600px circle at 80% 30%, ${p.b}40, transparent 55%),` +
            `linear-gradient(135deg, #F8FAFC 0%, #ECFDF5 45%, #EFF6FF 100%)`,
        }}
      />
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-[color:rgba(0,176,116,0.15)] blur-2xl" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* placeholder plate */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-white/70 backdrop-blur border border-white/70 shadow-soft" />
      </div>
    </div>
  );
}

