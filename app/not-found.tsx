import Link from "next/link";
import { IconCouronne, IconEtoile } from "@/components/icons/CoutureIcons";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#0E0B12] text-[#F8F2EA] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Soft spotlight */}
      <div className="spotlight-radial absolute inset-0 pointer-events-none" />

      <div className="max-w-md mx-auto text-center relative z-10 p-8 rounded-3xl bg-[#17121C]/80 border border-[#D8BE8F]/30 shadow-2xl">
        <div className="w-16 h-16 rounded-full border border-[#D8BE8F]/40 bg-[#0E0B12] flex items-center justify-center mx-auto mb-6 shadow-xl">
          <IconCouronne className="w-8 h-8 text-[#D4688A]" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2 font-medium">
          Erreur 404
        </span>

        <h1
          className="text-3xl sm:text-4xl font-serif text-[#F8F2EA] leading-tight mb-4"
          style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
        >
          Cette porte ne s&apos;ouvre pas… mais la rue{" "}
          <span className="italic text-[#D4688A]">continue</span>.
        </h1>

        <p className="text-xs sm:text-sm text-[#D9D5E4]/80 leading-relaxed font-light mb-8">
          La page que vous recherchez semble s&apos;être évanouie comme un voile de tulle dans la brise. Revenez à l&apos;accueil de notre atelier pour découvrir nos créations.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3.5 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-widest font-semibold btn-shine-sweep shadow-lg shadow-[#D4688A]/30 transition-transform hover:scale-105"
          >
            Retourner à l&apos;accueil
          </Link>
          <Link
            href="/les-mariees"
            className="px-6 py-3.5 rounded-full border border-white/20 hover:border-[#D8BE8F] text-[#F8F2EA] text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Voir la collection
          </Link>
        </div>
      </div>
    </div>
  );
}
