"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import HoverCard from "@/components/ui/HoverCard";
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

        <StaggerContainer className="flex flex-col gap-4">
          {BONUS.map((bonus) => (
            <StaggerItem key={bonus.num}>
              <HoverCard>
                <p className="text-xs font-bold text-accent uppercase tracking-wider">
                  🎁 BÔNUS #{bonus.num}
                </p>

                <div className="bg-primary-light/30 rounded-lg h-32 flex items-center justify-center mt-3">
                  <span className="text-text-secondary text-sm">
                    Bônus {bonus.num}
                  </span>
                </div>

                <h3 className="font-bold text-lg mt-3 text-text">
                  {bonus.title}
                </h3>

                <p className="text-sm text-text-secondary mt-2">
                  {bonus.desc}
                </p>

                <p className="text-accent font-bold mt-2">
                  VALOR: R${bonus.value}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
