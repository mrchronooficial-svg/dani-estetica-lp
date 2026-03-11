export default function GarantiaSeal({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-28 h-28">
        {/* Outer ring with conic gradient */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #C9A96E, #D4A59A, #C9A96E, #D4A59A, #C9A96E)",
            padding: "3px",
          }}
        >
          <div className="w-full h-full rounded-full bg-bg" />
        </div>

        {/* Inner circle with gradient */}
        <div
          className="absolute inset-2 rounded-full flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #C9A96E 0%, #B3944F 100%)",
          }}
        >
          <span className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase">
            Garantia
          </span>
          <span className="text-white text-3xl font-extrabold leading-none -mt-0.5">
            7
          </span>
          <span className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase -mt-0.5">
            Dias
          </span>
        </div>

        {/* Decorative stars */}
        <span className="absolute -top-1 -left-1 text-accent text-xs">✦</span>
        <span className="absolute -top-1 -right-1 text-accent text-xs">✦</span>
        <span className="absolute -bottom-1 -left-1 text-accent text-xs">✦</span>
        <span className="absolute -bottom-1 -right-1 text-accent text-xs">✦</span>
      </div>
    </div>
  );
}
