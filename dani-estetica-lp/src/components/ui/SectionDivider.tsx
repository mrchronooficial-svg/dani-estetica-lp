export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-2.5">
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
    </div>
  );
}

export function OrnamentDivider() {
  return (
    <div className="w-full flex items-center justify-center gap-3 py-2.5">
      <div className="w-12 h-[2px] rounded-full bg-gradient-to-r from-transparent to-cta" />
      <span className="text-accent text-sm">✦</span>
      <div className="w-12 h-[2px] rounded-full bg-gradient-to-l from-transparent to-accent" />
    </div>
  );
}
