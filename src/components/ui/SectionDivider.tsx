export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
    </div>
  );
}

export function OrnamentDivider() {
  return (
    <div className="w-full flex items-center justify-center gap-3 py-8">
      <div className="w-12 h-[1px] bg-border" />
      <span className="text-accent text-sm">✦</span>
      <div className="w-12 h-[1px] bg-border" />
    </div>
  );
}
