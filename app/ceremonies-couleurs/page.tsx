import Link from "next/link";
import Image from "next/image";
import ColorStudio from "@/components/ColorStudio";
import { IconCouronne, IconWhatsApp, IconEtoile } from "@/components/icons/CoutureIcons";

export default function CeremoniesCouleursPage() {
  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 sm:py-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#D8BE8F] mb-3">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#D4688A]">Cérémonies & Couleurs</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2">
                Fiançailles · Henné · Cérémonies de Prestige
              </span>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                L&apos;éclat des robes de{" "}
                <span className="italic text-[#A9C8E8]">couleur</span>.
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md font-light leading-relaxed">
              Pour celles qui osent un souffle féerique hors du blanc traditionnel.
              Du bleu glacier aérien au blush poudré, l&apos;atelier donne vie à
              vos envies d&apos;apparat les plus spectaculaires.
            </p>
          </div>
        </div>

        {/* Feature Spotlight: Robe Bleu Glacier */}
        <section className="py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-[999px_999px_20px_20px] overflow-hidden border border-[#A9C8E8]/40 shadow-2xl bg-[#17121C] group">
              <Image
                src="/images/robe-bleu-glace.jpg"
                alt="Robe de bal haute couture bleu glacé en cascades de tulle étagé"
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#0E0B12]/80 border border-[#A9C8E8]/50 text-[#A9C8E8] text-[10px] uppercase tracking-widest">
                  Nuance Signature Atelier
                </span>
                <h3
                  className="font-serif text-2xl text-[#F8F2EA] mt-2"
                  style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                >
                  La Robe Célestine
                </h3>
                <p className="text-xs text-[#D9D5E4]/80 font-light mt-1">
                  Volants vaporeux étagés et bustier plissé main.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17121C] border border-[#A9C8E8]/30 text-[#A9C8E8] text-xs uppercase tracking-wider self-start">
                <IconCouronne className="w-4 h-4" />
                <span>Pièce Maîtresse Fiançailles</span>
              </div>

              <h2
                className="text-2xl sm:text-4xl font-serif text-[#F8F2EA] leading-tight"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Une présence magnétique et inoubliable.
              </h2>

              <p className="text-xs sm:text-sm text-[#D9D5E4]/85 leading-relaxed font-light">
                Plébiscitée pour les fiançailles féeriques, la robe bleu glacé
                évoque la splendeur des contes avec une modernité couture. Les
                multiples couches de tulle aérien s&apos;animent à chacun de vos pas,
                réfléchissant la lumière avec une aura irréelle.
              </p>

              <div className="p-4 rounded-2xl bg-[#17121C] border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#D8BE8F]">Silhouette :</span>
                  <span className="text-[#F8F2EA] font-medium">Princesse à volants étagés</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D8BE8F]">Matière :</span>
                  <span className="text-[#F8F2EA] font-medium">Tulle vaporeux teinté glacier & organza</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D8BE8F]">Occasion :</span>
                  <span className="text-[#F8F2EA] font-medium">Fiançailles, henné, bal de prestige</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/33646858626?text=Bonjour,%20j'aimerais%20des%20informations%20sur%20votre%20robe%20bleu%20glac%C3%A9%20pour%20une%20c%C3%A9r%C3%A9monie."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <IconWhatsApp className="w-4 h-4 text-white" />
                  Demander la robe bleu glacé
                </a>

                <Link
                  href="/rendez-vous"
                  className="px-6 py-3.5 rounded-full bg-[#D4688A] text-white text-xs uppercase tracking-wider font-semibold text-center btn-shine-sweep"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Color Studio */}
        <section className="py-14 sm:py-20 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2">
              Le Nuancier Couture
            </span>
            <h2
              className="text-2xl sm:text-4xl font-serif text-[#F8F2EA]"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Testez vos Nuances Préférées
            </h2>
          </div>

          <ColorStudio />
        </section>
      </div>
    </div>
  );
}
