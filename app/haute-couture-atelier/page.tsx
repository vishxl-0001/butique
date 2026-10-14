import Image from "next/image";
import Link from "next/link";
import AtelierTimeline from "@/components/AtelierTimeline";
import Sparkles from "@/components/Sparkles";
import {
  IconCouronne,
  IconAiguille,
  IconWhatsApp,
  IconEtoile,
} from "@/components/icons/CoutureIcons";

const TISSUS = [
  {
    nom: "Satin Duchesse Lourd",
    origine: "Soie noble au tombé sculptural",
    description: "Une étoffe magistrale qui capte la lumière avec une distinction royale. Idéale pour les plis creux des robes de bal et les traînes cathédrale.",
  },
  {
    nom: "Dentelle de Chantilly & Calais",
    origine: "Arabesques florales d'exception",
    description: "Tissée sur des métiers traditionnels, elle offre cette translucidité poétique le long des bras et sur les dos nus découpés.",
  },
  {
    nom: "Cristaux Swarovski & Strass Taillés",
    origine: "Éclat joaillier cousu grain à grain",
    description: "Chaque pierre est sertie à la main pour créer une parure scintillante qui réagit au moindre faisceau de lumière.",
  },
  {
    nom: "Fleurs 3D en Organza Sculpté",
    origine: "Pétales façonnés un à un",
    description: "Des centaines de fleurs en relief brodées avec des micro-perles pour un effet de jardin enchanté sur les manches et jupes.",
  },
];

export default function HauteCoutureAtelierPage() {
  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20 overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Sparkles count={15} />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-4">
            <IconCouronne className="w-3.5 h-3.5 text-[#D4688A]" />
            <span>Haute Couture & Savoir-Faire Perpignanais</span>
          </div>

          <h1
            className="text-3xl sm:text-6xl font-serif text-[#F8F2EA] leading-tight mb-6"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Une robe qui n&apos;existe{" "}
            <span className="italic text-[#D4688A]">nulle part ailleurs</span>.
          </h1>

          <p className="text-sm sm:text-base text-[#D9D5E4]/90 font-light leading-relaxed max-w-2xl mx-auto">
            Dans notre atelier de la rue Rem Villeneuve à Perpignan, le temps
            ralentit. Le fil de soie s&apos;entrelace aux cristaux et chaque
            mesure est prise avec la solennité d&apos;une pièce d&apos;art.
          </p>
        </div>
      </section>

      {/* Editorial Dual Imagery: Seamstress Hands & Fabric Swatches */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D8BE8F]/30 shadow-2xl bg-[#17121C] group">
            <Image
              src="/images/atelier-mains-couture.jpg"
              alt="Mains de la couturière cousant délicatement des fleurs 3D sur le tulle"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-widest text-[#D4688A] block">
                Le Geste Artisanal
              </span>
              <p
                className="font-serif text-lg text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                La patience du point cousu main
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D8BE8F]/30 shadow-2xl bg-[#17121C] group">
            <Image
              src="/images/tissus-swatches.jpg"
              alt="Échantillons de soies, dentelles et croquis de robes d'atelier"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-widest text-[#D8BE8F] block">
                Matières Nobles
              </span>
              <p
                className="font-serif text-lg text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Sélection rigoureuse des soieries françaises
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prose Promises (Not a generic 3-equal-cards-with-icons grid!) */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-12 border-l border-[#D8BE8F]/30 pl-6 sm:pl-10 ml-4 sm:ml-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4688A] font-semibold block mb-2">
              Engagement I · Le sur-mesure absolu
            </span>
            <h3
              className="text-2xl sm:text-3xl font-serif text-[#F8F2EA] mb-3"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Épouser vos proportions sans compromis
            </h3>
            <p className="text-sm text-[#D9D5E4]/85 leading-relaxed font-light">
              Nous refusons les patrons standardisés. Chaque robe est modelée à partir de vos courbes naturelles : la cambrure des hanches, la ligne de buste, la hauteur exacte selon la cambrure de vos escarpins. Vous n&apos;êtes pas contrainte par la robe : c&apos;est la robe qui devient une seconde peau impériale.
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#D8BE8F] font-semibold block mb-2">
              Engagement II · L&apos;architecture du corset
            </span>
            <h3
              className="text-2xl sm:text-3xl font-serif text-[#F8F2EA] mb-3"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Le secret d&apos;une taille marquée et d&apos;une liberté de mouvement
            </h3>
            <p className="text-sm text-[#D9D5E4]/85 leading-relaxed font-light">
              Une robe de bal volumineuse exige une structure intérieure sans faille. Nos corsets sont pourvus de baleinages souples à mémoire de forme et de doublures de soie respirante. Vous conservez une posture noble et gracieuse jusqu&apos;à la fin de la fête sans sensation d&apos;oppression.
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4688A] font-semibold block mb-2">
              Engagement III · L&apos;intimité de l&apos;essayage
            </span>
            <h3
              className="text-2xl sm:text-3xl font-serif text-[#F8F2EA] mb-3"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Un salon privatisé pour vous et ceux qui vous aiment
            </h3>
            <p className="text-sm text-[#D9D5E4]/85 leading-relaxed font-light">
              À Perpignan, nous n&apos;enchaînons pas les clientes. Chaque rendez-vous est une parenthèse où le salon vous appartient. Votre maman, vos sœurs ou vos amies partagent vos larmes de joie dans la douceur et la discrétion la plus totale.
            </p>
          </div>
        </div>
      </section>

      {/* Fabric Swatches Showcase */}
      <section className="py-16 bg-[#17121C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2">
              La Matière à l&apos;Origine du Rêve
            </span>
            <h2
              className="text-2xl sm:text-4xl font-serif text-[#F8F2EA]"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Les Étoffes de l&apos;Atelier
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TISSUS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E0B12] border border-white/5 hover:border-[#D8BE8F]/40 transition-colors"
              >
                <span className="text-xs text-[#D4688A] font-mono block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="text-lg font-serif text-[#F8F2EA] mb-1">
                  {t.nom}
                </h4>
                <span className="text-[10px] uppercase text-[#D8BE8F] block mb-3">
                  {t.origine}
                </span>
                <p className="text-xs text-[#D9D5E4]/80 leading-relaxed font-light">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reused Atelier Timeline */}
      <AtelierTimeline />

      {/* Major WhatsApp Conversation CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#17121C] to-[#0E0B12] border border-[#D8BE8F]/30 shadow-2xl">
          <IconAiguille className="w-8 h-8 text-[#D4688A] mx-auto mb-4" />
          <h3
            className="text-2xl sm:text-4xl font-serif text-[#F8F2EA] mb-3"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Avez-vous une inspiration particulière ?
          </h3>
          <p className="text-xs sm:text-sm text-[#D9D5E4]/90 max-w-lg mx-auto mb-8 font-light">
            Envoyez-nous vos photos d&apos;inspiration, vos doutes ou vos questions. Nous vous répondons personnellement sur WhatsApp pour débuter l&apos;aventure.
          </p>
          <a
            href="https://wa.me/33646858626?text=Bonjour,%20j'ai%20une%20id%C3%A9e%20de%20robe%20de%20mari%C3%A9e%20et%20j'aimerais%20en%20parler%20avec%20l'atelier."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
          >
            <IconWhatsApp className="w-4 h-4 text-white" />
            Parler de ma robe sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
