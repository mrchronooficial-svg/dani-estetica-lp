"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import FAQItem from "@/components/ui/FAQItem";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="bg-bg py-20">
      <div className="max-w-[420px] mx-auto px-5">
        <div className="text-center mb-10">
          <SectionLabel text="TIRE SUAS DÚVIDAS" />
          <h2 className="text-2xl font-medium text-text">
            Perguntas{' '}
            <strong className="font-extrabold">
              <GradientText>Frequentes</GradientText>
            </strong>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem question={item.q} answer={item.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
