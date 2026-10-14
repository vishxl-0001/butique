export default function CoutureMarquee() {
  const words = [
    "Cristaux Swarovski",
    "Dentelle de Calais",
    "Fleurs 3D cousues main",
    "Plumes immaculées",
    "Traîne cathédrale",
    "Haute Couture sur mesure",
    "Corset joaillerie",
    "Atelier Perpignan",
  ];

  return (
    <div
      className="w-full py-4 bg-[#17121C] border-y border-[#D8BE8F]/20 overflow-hidden relative"
      aria-label="Savoir-faire et signatures de l'atelier"
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {[...words, ...words].map((word, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6">
            <span
              className="text-base sm:text-lg italic font-serif text-[#D8BE8F]/90 tracking-wide"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              {word}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4688A] ml-6 sm:ml-8 opacity-75" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
