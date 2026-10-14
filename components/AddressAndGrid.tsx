import Image from "next/image";
import {
  IconPin,
  IconTelephone,
  IconWhatsApp,
  IconInstagram,
  IconCouronne,
} from "./icons/CoutureIcons";

const INSTAGRAM_PHOTOS = [
  {
    src: "/images/grid/grid-boules-perles.jpg",
    alt: "Perles baroques et soie satinée",
  },
  {
    src: "/images/grid/grid-bouquet-ivoire.jpg",
    alt: "Bouquet couture de roses et gardénias ivoire",
  },
  {
    src: "/images/grid/grid-coupe-champagne.jpg",
    alt: "Coupe de champagne en cristal taillé",
  },
  {
    src: "/images/grid/grid-souliers-mariee.jpg",
    alt: "Souliers de mariée en satin et broche de cristaux",
  },
  {
    src: "/images/grid/grid-ecrin-bague.jpg",
    alt: "Écrin de velours et bague solitaire taille émeraude",
  },
  {
    src: "/images/grid/grid-arche-fleurs.jpg",
    alt: "Arche florale romantique et voile cathédrale",
  },
];

export default function AddressAndGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[#0E0B12] text-[#F8F2EA] relative border-t border-[#D8BE8F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atelier Address & Visit Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
                <IconPin className="w-3.5 h-3.5 text-[#D4688A]" />
                <span>IX · Notre Adresse à Perpignan</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-serif text-[#F8F2EA] leading-tight mb-3"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Poussez la porte de l&apos;
                <span className="italic text-[#D8BE8F]">Atelier</span>.
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D5E4]/80 font-light leading-relaxed">
                Situé au cœur de Perpignan, notre salon est pensé comme un
                écrin intimiste et chaleureux, entièrement privatisé pour votre
                séance d&apos;essayage.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#17121C] border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <IconPin className="w-5 h-5 text-[#D4688A] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F8F2EA]">
                    Rue des Princesses – Atelier
                  </h4>
                  <p className="text-xs text-[#D9D5E4] mt-0.5">
                    21 Rue Rem Villeneuve
                    <br />
                    66000 Perpignan, France
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-3">
                <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F] block mb-1">
                  Horaires d&apos;accueil (sur rendez-vous) :
                </span>
                <p className="text-xs text-[#D9D5E4]">
                  Du mardi au samedi · 10h00 – 18h30
                  <br />
                  <span className="text-[10px] text-white/50 italic">
                    (Fermé dimanche & lundi)
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="https://maps.google.com/?q=21+Rue+Rem+Villeneuve+66000+Perpignan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F2EA] text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors"
                >
                  <IconPin className="w-3.5 h-3.5 text-[#D8BE8F]" />
                  Itinéraire GPS
                </a>
                <a
                  href="tel:+33646858626"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F2EA] text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors"
                >
                  <IconTelephone className="w-3.5 h-3.5 text-[#D8BE8F]" />
                  06 46 85 86 26
                </a>
                <a
                  href="https://wa.me/33646858626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Shopfront Vitrine Preview */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#D8BE8F]/30 bg-[#17121C]">
              <Image
                src="/images/boutique-facade-dusk.jpg"
                alt="Façade de l'atelier Rue des Princesses au crépuscule à Perpignan"
                fill
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#F8F2EA]">
                <span className="font-serif italic">La vitrine à la tombée du soir</span>
                <span className="text-[10px] uppercase text-[#D8BE8F]">Perpignan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instagram 6-Grid Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4688A] block font-medium">
                  Galerie & Instantanés
                </span>
                <h3
                  className="text-xl sm:text-2xl font-serif text-[#F8F2EA]"
                  style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                >
                  L&apos;univers @rue_des_princesses_66
                </h3>
              </div>

              <a
                href="https://www.instagram.com/rue_des_princesses_66/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[#D8BE8F] hover:text-[#D4688A] flex items-center gap-1.5 font-semibold transition-colors"
              >
                <IconInstagram className="w-4 h-4" />
                <span>Rejoindre</span>
              </a>
            </div>

            {/* 6-Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INSTAGRAM_PHOTOS.map((photo, idx) => (
                <a
                  key={idx}
                  href="https://www.instagram.com/rue_des_princesses_66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#17121C] border border-white/5 hover:border-[#D4688A]/60 shadow-md transition-all hover:scale-103"
                  aria-label={photo.alt}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 220px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <IconInstagram className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
