"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconPin,
  IconTelephone,
  IconWhatsApp,
  IconInstagram,
  IconFacebook,
  IconCouronne,
  IconEtoile,
} from "@/components/icons/CoutureIcons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.telephone && !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 sm:py-12 border-b border-white/10 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#D8BE8F] mb-3">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#D4688A]">Contact</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2 font-medium">
                Atelier Perpignanais
              </span>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Prendre <span className="italic text-[#D4688A]">Contact</span>.
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md font-light leading-relaxed">
              Une question sur nos créations sur mesure, les délais ou
              l&apos;accès à notre salon ? Nous sommes à votre écoute par
              téléphone, WhatsApp ou formulaire.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Map access */}
          <div className="lg:col-span-5 space-y-6">
            {/* Atelier Address Card */}
            <div className="p-6 rounded-3xl bg-[#17121C] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0E0B12] border border-[#D8BE8F]/30 flex items-center justify-center">
                  <IconCouronne className="w-5 h-5 text-[#D4688A]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#F8F2EA]">
                    Rue des Princesses – Atelier
                  </h3>
                  <p className="text-xs text-[#D8BE8F]">
                    Haute Couture & Créations Mariée
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-3 text-xs text-[#D9D5E4]">
                <div className="flex items-start gap-2.5">
                  <IconPin className="w-4 h-4 text-[#D8BE8F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F8F2EA] block">Adresse de l&apos;Atelier :</strong>
                    21 Rue Rem Villeneuve, 66000 Perpignan, France
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-base text-[#D8BE8F] shrink-0">🕒</span>
                  <div>
                    <strong className="text-[#F8F2EA] block">Horaires d&apos;accueil (sur RDV) :</strong>
                    Du mardi au samedi · 10h00 – 18h30
                    <br />
                    <span className="text-[10px] text-white/50 italic">
                      Fermé le dimanche et le lundi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-base text-[#D8BE8F] shrink-0">🚗</span>
                  <div>
                    <strong className="text-[#F8F2EA] block">Accès & Stationnement (à confirmer) :</strong>
                    Parkings Arago et Catalogne à proximité immédiate à pied dans le centre historique de Perpignan.
                  </div>
                </div>
              </div>

              {/* Fast Direct Channels */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5">
                <a
                  href="tel:+33646858626"
                  className="p-3 rounded-2xl bg-[#0E0B12] hover:bg-white/5 border border-white/10 flex items-center justify-between text-xs transition-colors"
                >
                  <span className="flex items-center gap-2 text-[#F8F2EA]">
                    <IconTelephone className="w-4 h-4 text-[#D8BE8F]" />
                    06 46 85 86 26
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F]">
                    Appel direct
                  </span>
                </a>

                <a
                  href="https://wa.me/33646858626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#0E0B12] hover:bg-white/5 border border-[#25D366]/40 flex items-center justify-between text-xs transition-colors"
                >
                  <span className="flex items-center gap-2 text-[#25D366]">
                    <IconWhatsApp className="w-4 h-4" />
                    WhatsApp Atelier
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#25D366]">
                    Réponse rapide
                  </span>
                </a>

                <a
                  href="https://maps.google.com/?q=21+Rue+Rem+Villeneuve+66000+Perpignan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#0E0B12] hover:bg-white/5 border border-white/10 flex items-center justify-between text-xs transition-colors"
                >
                  <span className="flex items-center gap-2 text-[#F8F2EA]">
                    <IconPin className="w-4 h-4 text-[#D8BE8F]" />
                    Ouvrir dans Google Maps
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F]">
                    Itinéraire GPS ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Vitrine photo */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-[#D8BE8F]/30 bg-[#17121C]">
              <Image
                src="/images/boutique-facade-dusk.jpg"
                alt="Façade de la boutique Rue des Princesses à Perpignan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#17121C] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#D4688A] font-semibold block mb-2">
                Écrire à l&apos;Atelier
              </span>
              <h2
                className="text-2xl sm:text-3xl font-serif text-[#F8F2EA] mb-6"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Laissez-nous votre message
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                      Votre nom et prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      placeholder="Ex: Sophie Martin"
                      className="w-full p-3.5 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="w-full p-3.5 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sophie@exemple.fr"
                        className="w-full p-3.5 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#D8BE8F] mb-1 font-medium">
                      Votre message ou questions *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous de la date de votre mariage, du style de robe recherché..."
                      className="w-full p-3.5 rounded-xl bg-[#0E0B12] border border-white/10 text-white focus:outline-none focus:border-[#D4688A] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-widest font-semibold btn-shine-sweep shadow-lg shadow-[#D4688A]/30 transition-all hover:scale-102"
                  >
                    Envoyer ma demande à l&apos;atelier
                  </button>

                  <p className="text-[10px] text-[#D9D5E4]/60 text-center pt-2">
                    Vos données restent strictement confidentielles et ne sont jamais partagées.
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full border border-[#D8BE8F] flex items-center justify-center mx-auto text-[#D4688A]">
                    <IconCouronne className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-2xl font-serif text-[#F8F2EA]"
                    style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                  >
                    Merci pour votre message !
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md mx-auto">
                    Nos artisanes couturières vous recontacteront dans un délai de 24 heures ouvrées.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#0E0B12] border border-white/10 text-xs uppercase tracking-wider text-[#D8BE8F]"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
