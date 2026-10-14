import Link from "next/link";
import {
  IconCouronne,
  IconTelephone,
  IconWhatsApp,
  IconInstagram,
  IconFacebook,
  IconPin,
  IconEtoile,
} from "./icons/CoutureIcons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0E0B12] text-[#F8F2EA] border-t border-[#D8BE8F]/20 relative overflow-hidden pt-16 pb-28 md:pb-16">
      {/* Background soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D8BE8F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Craft Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#17121C] border border-[#D8BE8F]/40 flex items-center justify-center">
                <IconCouronne className="w-5 h-5 text-[#D4688A]" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-normal text-[#D4688A]"
                  style={{ fontFamily: "var(--font-pinyon), cursive" }}
                >
                  Rue des Princesses
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#D8BE8F] -mt-1 font-light">
                  Atelier Haute Couture · Perpignan
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D9D5E4]/80 leading-relaxed font-light mt-1">
              Atelier dédié aux futures mariées en quête d&apos;éclat, de volume
              féerique et de broderies minutieuses. Le jour où tout le monde se
              retourne.
            </p>

            {/* Google Rating - Real 4,2/5 from 93 avis */}
            <div className="mt-2 p-3 rounded-xl bg-[#17121C] border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D8BE8F]">
                  {[1, 2, 3, 4].map((star) => (
                    <IconEtoile
                      key={star}
                      className="w-3.5 h-3.5 fill-[#D8BE8F] text-[#D8BE8F]"
                    />
                  ))}
                  {/* 0.2 partial star */}
                  <span className="text-xs font-serif font-bold ml-1 text-[#F8F2EA]">
                    4,2 / 5
                  </span>
                </div>
                <p className="text-[10px] text-[#D9D5E4]/70 mt-0.5 tracking-wide">
                  93 avis vérifiés Google
                </p>
              </div>
              <a
                href="https://www.google.com/search?q=rue+des+princesses+perpignan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-wider text-[#D4688A] hover:underline font-medium"
              >
                Lire les avis ↗
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Haute Couture */}
          <div className="flex flex-col gap-3">
            <h3 className="label-small-caps text-[#D8BE8F]">
              La Maison · Index
            </h3>
            <ul className="space-y-2 text-xs text-[#D9D5E4]">
              <li>
                <Link
                  href="/les-mariees"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">I.</span> Les
                  Mariées & Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/haute-couture-atelier"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">II.</span>{" "}
                  L&apos;Atelier & Savoir-faire
                </Link>
              </li>
              <li>
                <Link
                  href="/ceremonies-couleurs"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">III.</span>{" "}
                  Cérémonies & Couleurs
                </Link>
              </li>
              <li>
                <Link
                  href="/accessoires"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">IV.</span>{" "}
                  Voiles, Couronnes & Gants
                </Link>
              </li>
              <li>
                <Link
                  href="/reels-galerie"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">V.</span> Reels
                  & Galerie Vidéo
                </Link>
              </li>
              <li>
                <Link
                  href="/trouver-ma-silhouette"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">VI.</span> Quiz
                  : Trouver ma silhouette
                </Link>
              </li>
              <li>
                <Link
                  href="/mes-coups-de-coeur"
                  className="hover:text-[#D4688A] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#D8BE8F]/60 text-[10px]">VII.</span> Mes
                  coups de cœur
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Horaires & Atelier */}
          <div className="flex flex-col gap-3">
            <h3 className="label-small-caps text-[#D8BE8F]">
              Atelier & Horaires
            </h3>
            <p className="text-xs text-[#D9D5E4] leading-relaxed">
              <strong className="text-[#F8F2EA] block mb-1">
                Accueil privé sur rendez-vous :
              </strong>
              Du mardi au samedi
              <br />
              10h00 – 18h30
              <br />
              <span className="text-[10px] text-[#D8BE8F]/80 italic">
                (Fermé dimanche & lundi)
              </span>
            </p>

            <div className="mt-2 text-xs text-[#D9D5E4] space-y-1">
              <p className="font-serif italic text-sm text-[#F8F2EA]">
                &ldquo;Chaque essayage est un moment suspendu d&apos;émotion.&rdquo;
              </p>
              <p className="text-[11px] text-[#D8BE8F]">
                Salon privatisé pour vous et vos proches.
              </p>
            </div>
          </div>

          {/* Col 4: Contact direct & Réseaux */}
          <div className="flex flex-col gap-3">
            <h3 className="label-small-caps text-[#D8BE8F]">
              Adresse & Contact
            </h3>
            <div className="text-xs text-[#D9D5E4] space-y-2">
              <div className="flex items-start gap-2">
                <IconPin className="w-4 h-4 text-[#D8BE8F] shrink-0 mt-0.5" />
                <span>
                  21 Rue Rem Villeneuve
                  <br />
                  66000 Perpignan, France
                </span>
              </div>

              <div className="pt-1 space-y-1.5">
                <a
                  href="tel:+33646858626"
                  className="flex items-center gap-2 text-[#F8F2EA] hover:text-[#D4688A] transition-colors"
                >
                  <IconTelephone className="w-4 h-4 text-[#D8BE8F]" />
                  06 46 85 86 26
                </a>
                <a
                  href="https://wa.me/33646858626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F8F2EA] hover:text-[#25D366] transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4 text-[#25D366]" />
                  WhatsApp Direct
                </a>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://www.instagram.com/rue_des_princesses_66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @rue_des_princesses_66"
                  className="w-8 h-8 rounded-full bg-[#17121C] border border-white/10 flex items-center justify-center text-[#D9D5E4] hover:text-[#D4688A] hover:border-[#D4688A]/50 transition-all"
                >
                  <IconInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/hautecouture66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook hautecouture66"
                  className="w-8 h-8 rounded-full bg-[#17121C] border border-white/10 flex items-center justify-center text-[#D9D5E4] hover:text-[#D4688A] hover:border-[#D4688A]/50 transition-all"
                >
                  <IconFacebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal compliance line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D9D5E4]/60 gap-4">
          <p>
            © {currentYear} Rue des Princesses – Atelier. Tous droits réservés.
          </p>

          <p className="text-[#D8BE8F]/80">
            Site sans traceur ni cookie · Respect total de votre vie privée
          </p>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-[#F8F2EA]">
              Plan d&apos;accès
            </Link>
            <span>·</span>
            <Link href="/haute-couture-atelier" className="hover:text-[#F8F2EA]">
              Mentions Atelier
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
