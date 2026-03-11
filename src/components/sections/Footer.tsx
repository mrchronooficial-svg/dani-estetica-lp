import { OrnamentDivider } from "@/components/ui/SectionDivider";

export default function Footer() {
  return (
    <footer className="bg-bg py-8 border-t border-border">
      <div className="max-w-[420px] mx-auto px-5 text-center">
        <p className="font-light text-sm tracking-[0.08em] uppercase text-text">
          DANI ESTÉTICA
        </p>

        <OrnamentDivider />

        <p className="text-xs text-text-secondary mb-3">
          © 2026 Dani Estética. Todos os direitos reservados.
        </p>

        <p className="text-xs text-text-secondary/60">
          <span>Termos de uso</span>
          <span className="mx-2">|</span>
          <span>Política de privacidade</span>
        </p>

        <p className="text-[10px] text-text-secondary/40 mt-4 leading-relaxed">
          * O tempo diário dedicado à automassagem pode variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
}
