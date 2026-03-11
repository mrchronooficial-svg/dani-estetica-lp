"use client";

const WHATSAPP_URL =
  "https://wa.me/5521995006267?text=" +
  encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre o Desafio Drena 21.");

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.6c-.388 1.094-2.278 2.09-3.14 2.178-.862.09-1.656.388-5.584-1.164-4.726-1.866-7.712-6.71-7.944-7.02-.232-.31-1.898-2.526-1.898-4.816s1.2-3.416 1.628-3.882c.426-.466.93-.582 1.24-.582.31 0 .62.002.89.016.286.014.67-.108.95.724.31.894 1.052 3.076 1.146 3.3.093.224.155.485.031.776-.124.31-.186.485-.372.748-.186.264-.39.59-.558.79-.186.216-.38.452-.163.886.217.434.964 1.59 2.07 2.576 1.422 1.268 2.62 1.66 2.992 1.844.372.186.59.155.806-.093.217-.248.93-1.084 1.178-1.458.248-.372.496-.31.836-.186.34.124 2.156 1.018 2.526 1.202.372.186.62.278.712.434.093.155.093.9-.294 1.994l-.032-.068z" />
      </svg>
    </a>
  );
}
