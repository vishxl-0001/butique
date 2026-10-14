"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconCouronne, IconWhatsApp, IconEtoile } from "@/components/icons/CoutureIcons";
import gownsData from "@/data/gowns.json";

export default function TrouverMaSilhouettePage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    lieu: "",
    style: "",
    morpho: "",
    budget: "",
  });

  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (key: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  // 3 suggested gowns based on answers
  const recommendedGowns = [gownsData[0], gownsData[1], gownsData[2]];

  const whatsappMessage = encodeURIComponent(
    `Bonjour Rue des Princesses ! J'ai complété votre quiz "Trouver ma silhouette" :\n- Cérémonie : ${answers.lieu || "Non spécifié"}\n- Style rêvé : ${answers.style || "Princesse"}\n- Silhouette : ${answers.morpho || "Sur mesure"}\n- Gamme : ${answers.budget || "Couture"}\nJ'aimerais essayer vos recommandations lors d'un rendez-vous !`
  );

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 text-center border-b border-white/10 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
            <IconCouronne className="w-3.5 h-3.5 text-[#D4688A]" />
            <span>Consultation Silhouette Personnalisée</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-serif text-[#F8F2EA]"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Trouver Ma <span className="italic text-[#D4688A]">Silhouette</span>.
          </h1>

          <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-lg mx-auto mt-2 font-light">
            En 4 questions intimes et bienveillantes, découvrez la ligne de robe
            conçue pour révéler votre éclat le jour J.
          </p>

          {/* Stepper Progress */}
          {!isFinished && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step
                      ? "w-8 bg-[#D4688A]"
                      : s < step
                      ? "w-4 bg-[#D8BE8F]"
                      : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* STEP 1: LIEU */}
        {!isFinished && step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2
              className="text-2xl sm:text-3xl font-serif text-center"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              1. Où se déroulera votre célébration ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Grand édifice religieux & cathédrale", sub: "Idéal pour une traîne monumentale", img: "/images/real/real-cathedral-train-hall.jpg" },
                { label: "Château ou grand domaine de réception", sub: "Volume princier et allures féeriques", img: "/images/hero-gown-dark.jpg" },
                { label: "Parc, jardin ou cérémonie laïque extérieure", sub: "Romantisme vaporeux et soies dansantes", img: "/images/real/real-bride-gazebo-train.jpg" },
                { label: "Hôtel particulier ou salle intime", sub: "Élégance joaillière et détails sculptés", img: "/images/corset-cristaux-macro.jpg" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect("lieu", opt.label)}
                  className="group relative flex flex-col p-5 rounded-2xl bg-[#17121C] border border-white/10 hover:border-[#D4688A]/60 text-left transition-all hover:scale-102"
                >
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-3 bg-[#0E0B12]">
                    <Image src={opt.img} alt={opt.label} fill className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <span className="font-serif text-base text-[#F8F2EA] group-hover:text-[#D4688A] transition-colors">{opt.label}</span>
                  <span className="text-xs text-[#D9D5E4]/70 mt-1">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: STYLE */}
        {!isFinished && step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2
              className="text-2xl sm:text-3xl font-serif text-center"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              2. Quelle émotion souhaitez-vous susciter ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Princesse scintillante & majestueuse", sub: "Corset cristaux et volume renversant", style: "Princesse Scintillante" },
                { label: "Romantique poétique & fleurs 3D", sub: "Dentelle aérienne et manches illusion", style: "Romantique Poétique" },
                { label: "Sirène glamour avec sur-jupe amovible", sub: "Deux silhouettes en une pour la fête", style: "Sirène Glamour" },
                { label: "Audace féerique en couleur pastel", sub: "Nuance bleu glacé ou blush poudré", style: "Couleur Féerique" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect("style", opt.style)}
                  className="p-6 rounded-2xl bg-[#17121C] border border-white/10 hover:border-[#D8BE8F]/50 text-left transition-all hover:bg-[#0E0B12]"
                >
                  <span className="font-serif text-lg text-[#F8F2EA] block mb-1">{opt.label}</span>
                  <span className="text-xs text-[#D8BE8F]">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: MORPHOLOGIE BIENVEILLANTE */}
        {!isFinished && step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2
              className="text-2xl sm:text-3xl font-serif text-center"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              3. Quel atout souhaitez-vous magnifier ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Marquer la taille avec un corset sculpté", sub: "Architecture intérieure baleinée pour cintrer sans contraindre" },
                { label: "Sublimer le décolleté et le port de tête", sub: "Encolures cœur ou illusion serties de cristaux" },
                { label: "Élancer la silhouette avec une traîne infinie", sub: "Lignes verticales et jupes étagées" },
                { label: "Célébrer des courbes généreuses avec maintien", sub: "Coupe haute couture qui embrasse vos formes" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect("morpho", opt.label)}
                  className="p-6 rounded-2xl bg-[#17121C] border border-white/10 hover:border-[#D4688A]/50 text-left transition-all hover:bg-[#0E0B12]"
                >
                  <span className="font-serif text-lg text-[#F8F2EA] block mb-1">{opt.label}</span>
                  <span className="text-xs text-[#D9D5E4]/80">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: BUDGET / GAMME */}
        {!isFinished && step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2
              className="text-2xl sm:text-3xl font-serif text-center"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              4. Quel est votre horizon de création ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Gamme Atelier Découverte", sub: "Silhouettes emblématiques adaptées à vos mesures" },
                { label: "Haute Couture Sur Mesure", sub: "Patronage personnalisé et broderies artisanales" },
                { label: "Création d'Exception Pièce Unique", sub: "Traîne XXL, cristaux intégraux et accessoires coordonnés" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect("budget", opt.label)}
                  className="p-6 rounded-2xl bg-[#17121C] border border-white/10 hover:border-[#D8BE8F]/50 text-left transition-all hover:bg-[#0E0B12]"
                >
                  <span className="font-serif text-base text-[#F8F2EA] block mb-2">{opt.label}</span>
                  <span className="text-xs text-[#D8BE8F] leading-relaxed block">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESULTS SCREEN */}
        {isFinished && (
          <div className="space-y-8 animate-in zoom-in-95 duration-400">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#17121C] to-[#0E0B12] border border-[#D8BE8F]/40 text-center">
              <IconEtoile className="w-8 h-8 text-[#D4688A] mx-auto mb-3" />
              <h2
                className="text-3xl sm:text-4xl font-serif text-[#F8F2EA] mb-2"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Votre Sélection Personnalisée
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md mx-auto">
                Voici les 3 silhouettes de notre atelier qui sublimeront idéalement votre cérémonie.
              </p>
            </div>

            {/* 3 Recommended Gowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {recommendedGowns.map((gown) => (
                <div
                  key={gown.id}
                  className="flex flex-col bg-[#17121C] rounded-2xl overflow-hidden border border-white/10 p-4"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-[#0E0B12]">
                    <Image src={gown.image} alt={gown.nom} fill className="object-cover" />
                  </div>
                  <h3
                    className="text-xl font-serif text-[#F8F2EA]"
                    style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                  >
                    Robe {gown.nom}
                  </h3>
                  <span className="text-xs text-[#D8BE8F] mb-2">{gown.silhouette}</span>
                  <p className="text-xs text-[#D9D5E4]/80 line-clamp-2 font-light mb-4">
                    {gown.description}
                  </p>
                  <Link
                    href="/rendez-vous"
                    className="mt-auto py-2 rounded-full bg-[#0E0B12] hover:bg-[#D4688A] text-white text-xs uppercase tracking-wider font-semibold text-center border border-white/10 transition-colors"
                  >
                    Essayer ce modèle
                  </Link>
                </div>
              ))}
            </div>

            {/* Send Results via WhatsApp CTA */}
            <div className="p-6 rounded-2xl bg-[#17121C] border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg text-[#F8F2EA]">
                  Partager vos réponses avec l&apos;Atelier
                </h4>
                <p className="text-xs text-[#D9D5E4]/80">
                  Pré-remplissez votre message pour que nos stylistes préparent vos modèles en avance.
                </p>
              </div>

              <a
                href={`https://wa.me/33646858626?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shrink-0 shadow-lg shadow-[#25D366]/20"
              >
                <IconWhatsApp className="w-4 h-4 text-white" />
                Envoyer mes résultats par WhatsApp
              </a>
            </div>

            {/* Restart Quiz */}
            <div className="text-center pt-4">
              <button
                onClick={() => {
                  setStep(1);
                  setIsFinished(false);
                }}
                className="text-xs uppercase tracking-wider text-[#D8BE8F] hover:underline"
              >
                ← Recommencer le quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
