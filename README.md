# Rue des Princesses – Atelier (Perpignan)
### Maquette Démo VVIP · Haute Couture Mariée

Site vitrine de haute couture pour l'atelier **Rue des Princesses – Atelier** situé à **Perpignan (Pyrénées-Orientales, 66)**.
Conçu sur-mesure pour être présenté comme démonstration UI/UX de niveau agence de luxe internationale.

---

## 💎 Direction Artistique : "Gala Couture"

- **Ambiance :** Nocturne & feutrée (velours noir profond) alternant avec des respirations ivoire poudré, révélant la luminescence des cristaux Swarovski et la noblesse des soies sous un spot zénithal.
- **Palette :**
  - `--nuit`: `#0E0B12` (Noir profond aux sous-tons violet chaud)
  - `--nuit-2`: `#17121C` (Cartes & modules)
  - `--ivoire`: `#F8F2EA` (Clarté & lisibilité)
  - `--champagne` / `--or`: `#D8BE8F` / `#B8935A` (Détails & hairlines 1px)
  - `--rose`: `#D4688A` (Signature visuelle issue de l'enseigne physique)
  - `--bleu-glace`: `#A9C8E8` (Nuance emblématique pour cérémonies)
- **Typographie :**
  - *Bodoni Moda* (Sérif à fort contraste pour les titres éditoriaux et accents italiques)
  - *Pinyon Script* (Lettrines et signatures d'artisanat)
  - *Hanken Grotesk* (Typographie UI fluide et contemporaine)
- **Texture :** Voile de grain argentique subtil (2.8%) + masques en arche de porte (*"la rue / la porte"*).

---

## 📱 Conception Mobile-First (390px)

- Conçu et validé pour un affichage sur smartphone (iPhone 390px/430px, Android 360px), puis enrichi pour tablettes et desktop grand écran.
- **Barre d'action sticky mobile :** Boutons d'accès immédiat `[Appeler]`, `[WhatsApp]`, `[Rendez-vous]` sensibles au safe-area et masqués à l'ouverture du clavier virtuel.
- **Menu pleine page immersif :** Liens géants en Bodoni Moda avec accès direct aux coordonnées et réseaux sociaux.
- **Fiches Robes en Bottom-Sheet :** Glissière basse ergonomique avec points d'intérêt couture (*craft hotspots*), spécifications matières et bouton pré-rempli WhatsApp.

---

## ⚡ Interactions & Animations Signatures

1. **Loader de session :** Tracé doré de la couronne, scintillation de cristaux et lever de voile de tulle (1,6s, skippable, mémorisé par session).
2. **Hero théâtral :** Faisceau de projecteur radial, robe Aurore en arche avec zoom délicat, nuée de cristaux scintillants (Canvas optimisé) et plumes en apesanteur.
3. **La Traîne :** Fil rouge métaphorique rose-or qui s'allonge selon la progression du défilement, associé à une section panoramique ancrée illustrant une traîne de 5 mètres déployée.
4. **Studio de nuances "Imaginez-la en…" :** Sélecteur interactif permettant d'apprécier la robe en ivoire, bleu glacé, blush poudré, champagne ou rouge rubis avec explosion d'étincelles.
5. **Hotspots artisanaux :** Puces interactives pulsantes révélant les secrets de confection (fleurs 3D, corset joaillerie, manches illusion).
6. **Rail de Reels 9:16 :** Carrousel magnétique fluide simulant les vidéos Instagram les plus vues de l'atelier.
7. **Favoris & Coups de Cœur :** Enregistrement local sans compte (localStorage), pulsation du compteur d'en-tête et envoi de la liste personnalisée en un clic sur WhatsApp.
8. **Prise de Rendez-vous 4 étapes :** Simulateur d'essayage privé avec choix de la date (fermé dimanche & lundi), nombre d'invités et célébration aux étoiles dorées.

---

## 🗂️ Structure des Pages & Données

- `/` : Accueil complet en 13 tableaux haute couture
- `/les-mariees` : Catalogue de collection avec filtres dynamiques (silhouette, traîne, détails)
- `/haute-couture-atelier` : Récit d'artisanat, gestes d'atelier et étoffes
- `/ceremonies-couleurs` : Robes teintées d'exception (bleu glacé, fiançailles, henné)
- `/accessoires` : Voiles cathédrale, tiares impériales, coiffes et gants
- `/reels-galerie` : Portfolio d'images authentiques et vidéos
- `/trouver-ma-silhouette` : Quiz interactif bienveillant en 4 étapes
- `/mes-coups-de-coeur` : Sélection personnelle avec exportation WhatsApp
- `/rendez-vous` : Réservation d'essayage en salon privé
- `/contact` : Coordonnées, itinéraire Perpignan et formulaire
- `/PLACEHOLDERS.md` : Registre complet des points à valider avec le client

---

## 🛠️ Lancement & Développement

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Compiler pour la production
npm run build
```
Le projet s'exécute sur `http://localhost:3000`.
