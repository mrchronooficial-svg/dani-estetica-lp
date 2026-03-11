"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import HorizontalCarousel from "@/components/ui/HorizontalCarousel";
import { BONUS } from "@/lib/constants";

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Bonus() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        <div className="text-center mb-10">
          <SectionLabel text="PRESENTES EXCLUSIVOS" />
          <h2 className="text-2xl font-extrabold text-text mt-4 leading-tight">
            {parseBold(
              "Para acelerar seus resultados e potencializar sua transformação, você vai receber estes **presentes exclusivos:**"
            )}
          </h2>
        </div>

        <HorizontalCarousel>
          {BONUS.map((bonus) => (
            <div
              key={bonus.num}
              className="bg-white rounded-xl border border-border p-5 h-full"
            >
              <div className="bg-primary-light/30 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-text-secondary text-sm">
                  Bônus {bonus.num}
                </span>
              </div>

              <p className="text-xs font-bold text-accent uppercase tracking-wider">
                🎁 BÔNUS #{bonus.num}
              </p>

              <h3 className="font-bold text-lg mt-2 text-text">
                {bonus.title}
              </h3>

              <p className="text-sm text-text-secondary mt-2">
                {bonus.desc}
              </p>

              <p className="text-accent font-bold mt-3">
                VALOR: R${bonus.value}
              </p>
            </div>
          ))}
        </HorizontalCarousel>
      </div>
    </section>
  );
}
