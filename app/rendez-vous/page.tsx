"use client";

import { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  IconCouronne,
  IconTelephone,
  IconWhatsApp,
  IconEtoile,
  IconAiguille,
} from "@/components/icons/CoutureIcons";

export default function RendezVousPage() {
  const [step, setStep] = useState(1);
  const [motif, setMotif] = useState("Robe de mariée haute couture");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("14h30");
  const [personnes, setPersonnes] = useState("2 personnes");
  const [weddingDate, setWeddingDate] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const motifs = [
    { label: "Robe de mariée haute couture", desc: "Premier essayage des modèles de collection et salon privé" },
    { label: "Création intégrale sur mesure", desc: "Patron unique, choix des dentelles et soies avec nos stylistes" },
    { label: "Robe de cérémonie ou fiançailles", desc: "Robes de bal teintées, bleu glacé ou tenues d'apparat" },
    { label: "Retouches & Ajustements d'atelier", desc: "Mise à mesure, ourlets sur souliers et ajustement du bustier" },
  ];

  const creneaux = [
    "10h30",
    "11h45",
    "14h00",
    "15h30",
    "17h00",
  ];

  const handleNext = () => {
    setErrorMsg("");
    if (step === 2 && !date) {
      setErrorMsg("Veuillez sélectionner une date d'essayage souhaitée.");
      return;
    }
    if (step === 4) {
      if (!prenom.trim() || !telephone.trim()) {
        setErrorMsg("Oups, il manque votre prénom et votre numéro de téléphone pour vous rappeler.");
        return;
      }
      // Trigger gold star celebration burst
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#D8BE8F", "#D4688A", "#B8935A", "#F8F2EA"],
          shapes: ["star"],
          scalar: 0.9,
        });
      } catch {
        // fallback
      }
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 text-center border-b border-white/10 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
            <IconCouronne className="w-3.5 h-3.5 text-[#D4688A]" />
            <span>Salon Privatisé à Perpignan</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-serif text-[#F8F2EA]"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Prendre <span className="italic text-[#D4688A]">Rendez-vous</span>.
          </h1>

          <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-lg mx-auto mt-2 font-light">
            Chaque essayage est un moment suspendu d&apos;environ 1h30, avec un
            accueil chaleureux et personnalisé dans notre atelier.
          </p>

          {/* Stepper Progress */}
          {!isSuccess && (
            <div className="flex items-center justify-center gap-3 mt-6">
              {[
                { s: 1, label: "Motif" },
                { s: 2, label: "Créneau" },
                { s: 3, label: "Projet" },
                { s: 4, label: "Coordonnées" },
              ].map((item) => (
                <div key={item.s} className="flex items-center gap-1.5">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step === item.s
                        ? "bg-[#D4688A] text-white shadow-md shadow-[#D4688A]/30"
                        : step > item.s
                        ? "bg-[#D8BE8F] text-[#0E0B12]"
                        : "bg-[#17121C] text-white/40 border border-white/10"
                    }`}
                  >
                    {item.s}
                  </span>
                  <span className="hidden sm:inline text-xs text-[#D9D5E4]">
                    {item.label}
                  </span>
                  {item.s < 4 && <span className="text-white/20 ml-1">―</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* STEP 1: POUR QUOI ? */}
        {!isSuccess && step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl sm:text-2xl font-serif text-center">
              1. Quel est l&apos;objet de votre visite ?
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {motifs.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setMotif(m.label)}
                  className={`p-5 rounded-2xl text-left transition-all border ${
                    motif === m.label
                      ? "bg-[#17121C] border-[#D4688A] shadow-md shadow-[#D4688A]/10"
                      : "bg-[#17121C]/60 border-white/10 hover:border-[#D8BE8F]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base text-[#F8F2EA]">{m.label}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        motif === m.label
                          ? "border-[#D4688A] bg-[#D4688A]"
                          : "border-white/30"
                      }`}
                    >
                      {motif === m.label && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                  </div>
                  <p className="text-xs text-[#D9D5E4]/70">{m.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: DATE & CRÉNEAU */}
        {!isSuccess && step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl sm:text-2xl font-serif text-center">
              2. Choisissez une date et une heure
            </h2>

            <div className="p-6 rounded-2xl bg-[#17121C] border border-white/10 space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D8BE8F] mb-2 font-medium">
                  Date de visite souhaitée (Du mardi au samedi) :
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                />
                <span className="text-[10px] text-[#D8BE8F]/70 mt-1 block">
                  * Atelier fermé le dimanche et le lundi
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D8BE8F] mb-2 font-medium">
                  Créneau horaire privilégié :
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {creneaux.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setTime(c)}
                      className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        time === c
                          ? "bg-[#D4688A] text-white shadow-md shadow-[#D4688A]/30"
                          : "bg-[#0E0B12] text-[#D9D5E4] border border-white/10 hover:border-[#D8BE8F]/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: NOMBRE DE PERSONNES & DATE DU MARIAGE */}
        {!isSuccess && step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl sm:text-2xl font-serif text-center">
              3. Détails de votre célébration
            </h2>

            <div className="p-6 rounded-2xl bg-[#17121C] border border-white/10 space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D8BE8F] mb-2 font-medium">
                  Nombre d&apos;accompagnateurs pour l&apos;essayage :
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Seule", "2 personnes", "3 personnes", "4 personnes"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPersonnes(p)}
                      className={`py-3 rounded-xl text-xs font-semibold transition-all ${
                        personnes === p
                          ? "bg-[#D4688A] text-white shadow-md shadow-[#D4688A]/30"
                          : "bg-[#0E0B12] text-[#D9D5E4] border border-white/10 hover:border-[#D8BE8F]/40"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-[#D9D5E4]/60 mt-1.5 block">
                  Pour votre confort et l&apos;intimité de l&apos;instant, nous conseillons d&apos;être accompagnée de 1 à 3 proches.
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D8BE8F] mb-2 font-medium">
                  Date estimée de la cérémonie :
                </label>
                <input
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: COORDONNÉES */}
        {!isSuccess && step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl sm:text-2xl font-serif text-center">
              4. Vos Coordonnées
            </h2>

            <div className="p-6 rounded-2xl bg-[#17121C] border border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Ex: Camille"
                    className="w-full p-3 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Ex: Dupont"
                    className="w-full p-3 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                    Téléphone (pour vous rappeler) *
                  </label>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="06 00 00 00 00"
                    className="w-full p-3 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="camille@exemple.fr"
                    className="w-full p-3 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                  Une remarque ou robe en vue ? (facultatif)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex : J'aime particulièrement la traîne de la robe Aurore..."
                  className="w-full p-3 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {errorMsg && (
          <p className="mt-4 text-xs text-[#D4688A] bg-[#D4688A]/10 p-3 rounded-xl border border-[#D4688A]/30 text-center animate-shake">
            {errorMsg}
          </p>
        )}

        {/* Stepper Navigation Buttons */}
        {!isSuccess && (
          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-full bg-[#17121C] text-xs uppercase tracking-wider text-[#D8BE8F] hover:text-white"
              >
                ← Étape précédente
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3.5 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-widest font-semibold btn-shine-sweep shadow-lg shadow-[#D4688A]/30 transition-all hover:scale-105"
            >
              {step === 4 ? "Confirmer ma demande de rendez-vous" : "Continuer →"}
            </button>
          </div>
        )}

        {/* SUCCESS STATE WITH GOLD STAR CELEBRATION */}
        {isSuccess && (
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#17121C] to-[#0E0B12] border border-[#D8BE8F]/50 text-center space-y-6 animate-in zoom-in-95 duration-400">
            <div className="w-16 h-16 rounded-full border border-[#D8BE8F] bg-[#0E0B12] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(216,190,143,0.4)]">
              <IconCouronne className="w-8 h-8 text-[#D4688A]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4688A] block mb-2 font-medium">
                Demande transmise avec succès
              </span>
              <h2
                className="text-3xl sm:text-4xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Merci {prenom || "chère future mariée"} !
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/90 max-w-lg mx-auto font-light leading-relaxed">
              Nous avons bien enregistré votre demande pour un essayage (
              <strong className="text-[#F8F2EA]">{motif}</strong>) le{" "}
              <strong className="text-[#F8F2EA]">{date || "très prochainement"}</strong> à{" "}
              <strong className="text-[#F8F2EA]">{time}</strong>.
              <br />
              Notre équipe d&apos;atelier vous rappelle sous 24h au{" "}
              <strong className="text-[#D8BE8F]">{telephone}</strong> pour confirmer votre salon privé.
            </p>

            <div className="p-4 rounded-2xl bg-[#0E0B12] border border-white/5 max-w-sm mx-auto text-xs text-[#D9D5E4]">
              <span className="text-[#D8BE8F] block mb-1">Rappel pratique :</span>
              21 Rue Rem Villeneuve, 66000 Perpignan
              <br />
              Accès en centre-ville, parking à proximité
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/33646858626"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
              >
                <IconWhatsApp className="w-4 h-4 text-white" />
                Échanger tout de suite sur WhatsApp
              </a>

              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-[#17121C] text-white text-xs uppercase tracking-wider font-medium hover:bg-white/10"
              >
                Retourner à l&apos;accueil
              </Link>
            </div>
          </div>
        )}

        {/* Direct Contact Fallback Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9D5E4] gap-4">
          <p>
            Vous préférez réserver directement par téléphone ou messagerie ?
          </p>

          <div className="flex items-center gap-3">
            <a
              href="tel:+33646858626"
              className="flex items-center gap-1.5 text-[#F8F2EA] hover:text-[#D4688A]"
            >
              <IconTelephone className="w-4 h-4 text-[#D8BE8F]" />
              06 46 85 86 26
            </a>
            <span>·</span>
            <a
              href="https://wa.me/33646858626"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366]"
            >
              <IconWhatsApp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
