import Image from "next/image";
import Link from "next/link";
import { IconAiguille, IconCiseaux, IconCouronne } from "./icons/CoutureIcons";

const STEPS = [
  {
    step: "01",
    nom: "Le Croquis & L'Inspiration",
    description:
      "Autour d'un échange privilégié dans notre salon privé, nous esquissons ensemble la silhouette de vos rêves : volume de la traîne, hauteur de taille, décolleté et tombé des étoffes.",
    image: "/images/tissus-swatches.jpg",
    detail: "Étude morphologique & esquisse personnalisée",
  },
  {
    step: "02",
    nom: "Le Choix des Tissus Nobles",
    description:
      "Toucher la soie, apprécier la translucidité d'un tulle de soie, choisir les motifs d'une dentelle de Calais ou la disposition des fleurs 3D et cristaux taillés.",
    image: "/images/atelier-mains-couture.jpg",
    detail: "Soies, tulles perlés & dentelles françaises",
  },
  {
    step: "03",
    nom: "Le Premier Essayage de Toile",
    description:
      "Ajustement du patron à même votre corps. Le corset est sculpté pour sublimer votre cambrure tout en vous offrant un confort royal tout au long de la célébration.",
    image: "/images/corset-cristaux-macro.jpg",
    detail: "Baleinage millimétré & maintien d'exception",
  },
  {
    step: "04",
    nom: "La Robe Finale & Ses Finitions",
    description:
      "Dernière séance d'émotion : vous découvrez votre création dans sa plénitude avec ses voiles, sa traîne déployée et ses bijoux de tête assortis.",
    image: "/images/real/real-bride-glitter-ballgown.jpg",
    detail: "Prête pour le jour où tout le monde se retourne",
  },
];

export default function AtelierTimeline() {
  return (
    <section className="py-20 sm:py-28 bg-[#17121C] text-[#F8F2EA] relative overflow-hidden">
      {/* Background warm radial spotlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D8BE8F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0B12] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
            <IconAiguille className="w-3.5 h-3.5 text-[#D4688A]" />
            <span>VI · De l&apos;Idée à la Robe</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-serif text-[#F8F2EA] leading-tight mb-4"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Le rituel de <span className="italic text-[#D8BE8F]">création</span>.
          </h2>

          <p className="text-xs sm:text-sm text-[#D9D5E4]/80 font-light leading-relaxed">
            Chaque robe de notre atelier à Perpignan est une histoire unique,
            façonnée à vos mesures par des mains expertes.
          </p>
        </div>

        {/* 4 Connected Stages */}
        <div className="relative">
          {/* Connecting golden thread on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D8BE8F]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="group flex flex-col bg-[#0E0B12] p-5 rounded-3xl border border-white/5 hover:border-[#D8BE8F]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif text-[#D4688A] font-bold">
                    {s.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#D8BE8F] bg-[#17121C] px-2.5 py-1 rounded-full border border-white/5">
                    Étape {idx + 1}
                  </span>
                </div>

                {/* Arched Step Photo */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#17121C] border border-white/10">
                  <Image
                    src={s.image}
                    alt={s.nom}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/80 via-transparent to-transparent" />
                </div>

                <h3
                  className="text-lg font-serif text-[#F8F2EA] group-hover:text-[#D4688A] transition-colors mb-2"
                  style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                >
                  {s.nom}
                </h3>

                <p className="text-xs text-[#D9D5E4]/80 font-light leading-relaxed mb-4 flex-1">
                  {s.description}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-[#D8BE8F]">
                  <IconCiseaux className="w-3 h-3 text-[#D4688A]" />
                  <span>{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-14 sm:mt-18 p-8 rounded-3xl bg-gradient-to-r from-[#0E0B12] via-[#17121C] to-[#0E0B12] border border-[#D8BE8F]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4
              className="text-xl sm:text-2xl font-serif text-[#F8F2EA] mb-1"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Envie de débuter votre croquis ?
            </h4>
            <p className="text-xs text-[#D9D5E4]/80">
              Venez essayer nos silhouettes et imaginer votre création sur mesure à Perpignan.
            </p>
          </div>

          <Link
            href="/rendez-vous"
            className="px-6 py-3.5 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-wider font-semibold btn-shine-sweep shadow-lg shadow-[#D4688A]/30 shrink-0"
          >
            Prendre rendez-vous à l&apos;atelier
          </Link>
        </div>
      </div>
    </section>
  );
}
