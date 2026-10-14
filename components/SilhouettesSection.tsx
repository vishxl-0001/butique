import Image from "next/image";
import Link from "next/link";
import { IconCouronne } from "./icons/CoutureIcons";

const SILHOUETTES = [
  {
    nom: "Robe de Bal Royale",
    description: "Volume spectaculaire, jupons étagés et taille cintrée.",
    image: "/images/real/real-bride-glitter-ballgown.jpg",
    filter: "Robe de bal",
  },
  {
    nom: "Sirène & Sur-Jupe",
    description: "Ligne sensuelle transformable pour danser jusqu'à l'aube.",
    image: "/images/real/real-couple-veil.jpg",
    filter: "Sirène & sur-jupe",
  },
  {
    nom: "Traîne Cathédrale",
    description: "Déploiement magistral de 4 à 5 mètres de dentelle et tulle.",
    image: "/images/real/real-cathedral-train-hall.jpg",
    filter: "Traîne cathédrale",
  },
  {
    nom: "Dentelle & Manches Illusion",
    description: "Broderies botaniques fines et fleurs 3D sculptées sur le bras.",
    image: "/images/real/real-mannequin-corset-flowers.jpg",
    filter: "Dentelle & manches",
  },
  {
    nom: "Corset de Cristaux",
    description: "Plastron étincelant serti de milliers de strass Swarovski.",
    image: "/images/corset-cristaux-macro.jpg",
    filter: "Corset de cristaux",
  },
  {
    nom: "Voiles & Couronnes",
    description: "Tiares dorées et voiles bordés d'arabesques royales.",
    image: "/images/coiffe-plumes.jpg",
    filter: "Voiles & couronnes",
  },
];

export default function SilhouettesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#17121C] text-[#F8F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0B12] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
              <IconCouronne className="w-3.5 h-3.5 text-[#D4688A]" />
              <span>II · Les Silhouettes Iconiques</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#F8F2EA] leading-tight"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              L&apos;art du <span className="italic text-[#D8BE8F]">volume</span> et des lignes.
            </h2>
          </div>

          <Link
            href="/les-mariees"
            className="text-xs uppercase tracking-widest text-[#D4688A] hover:text-[#F8F2EA] font-semibold transition-colors group flex items-center gap-1.5"
          >
            <span>Voir toute la collection</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Swipeable arched cards on mobile / 3-column grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible pb-4 snap-x snap-mandatory scrollbar-none">
          {SILHOUETTES.map((s, idx) => (
            <Link
              key={idx}
              href={`/les-mariees?silhouette=${encodeURIComponent(s.filter)}`}
              className="group relative flex-none w-[75vw] sm:w-auto snap-start flex flex-col bg-[#0E0B12] p-4 rounded-3xl border border-white/5 hover:border-[#D8BE8F]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Arched Photo Mask */}
              <div className="relative w-full aspect-[4/5] rounded-[999px_999px_12px_12px] overflow-hidden bg-[#17121C] border border-[#D8BE8F]/20 mb-4">
                <Image
                  src={s.image}
                  alt={s.nom}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col px-1">
                <h3
                  className="text-xl font-serif text-[#F8F2EA] group-hover:text-[#D4688A] transition-colors mb-1"
                  style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                >
                  {s.nom}
                </h3>
                <p className="text-xs text-[#D9D5E4]/80 font-light leading-relaxed mb-3">
                  {s.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-[11px] text-[#D8BE8F]">
                  <span>Découvrir cette ligne</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
