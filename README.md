# 🌍🔥🌬️💧 4 Éléments – Site de réservation hôtelière de luxe

## 🎯 Présentation du projet

**4 Éléments** est un groupe franco-chinois proposant des hôtels de luxe dans des lieux insolites, conçus pour offrir une expérience sensorielle immersive au contact des éléments : **Terre, Eau, Air et Feu**. Ce site a été conçu pour présenter ces lieux uniques, avec une interface soignée et un système de réservation personnalisé.

---

## 🧭 Pages du site

| Page         | Description |
|--------------|-------------|
| `index.html` | Accueil avec présentation du concept |
| `feu.html`   | Page dédiée à l’hôtel Feu |
| `reservation.html` | Formulaire de réservation interactif |
| `confirmation` *(modale)* | Récapitulatif des données et tarif |

---

## 🛠️ Technologies utilisées

- **HTML5**, **CSS3**, **JavaScript Vanilla**
- SCSS avec architecture modulaire (voir ci-dessous)
- Google Font : `Medula One`
- [Phosphor Icons](https://phosphoricons.com/)
- [Figma – Maquette](https://www.figma.com/design/AEZhaJnoPNjfJchgyYD549/4-elementsmaquette)

---

## 📦 Architecture SCSS

Le projet utilise une architecture **modulaire SCSS** avec la structure suivante :

4-elements/
├── index.html
├── feu.html
├── reservation.html
├── css/
│   └── main.css
├── scss/
│   └── main.scss
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── logo/
├── docs/
│   └── schema-technique.png
├── favicon.ico
└── README.md


✅ Fonctionnalités principales
🧭 Navigation universelle
Logo + pictos (accueil, Terre, Eau, Air, Feu, Contact)

Réseaux sociaux (Facebook / Instagram)

Connexion et lien vers la réservation

Footer avec adresses et horaires

Favicon + bouton retour en haut de page

🔥 Page hôtel Feu
Présentation immersive

Tarifs :

Igloos : 500€/nuit

Suites Lapones : 850€/nuit

📋 Réservation
Saisie des infos personnelles et de facturation

Choix de l’hôtel et du type de chambre

Sélection de dates d’arrivée/départ (validation incluse)

Services additionnels (chauffeur, repas, visites guidées)

Gestion des régimes et restrictions alimentaires

Validation dynamique JavaScript : formats, cohérence, logique de dates

💬 Modale récapitulative
Affiche toutes les infos saisies

Affiche le montant total calculé

Boutons : Annuler ou Procéder au paiement

⚙️ Accessibilité & SEO
Texte alternatif pour toutes les images (alt)

Titres hiérarchisés (h1, h2, etc.)

Balises sémantiques (main, section, footer, etc.)

Champs de formulaire avec label

Meta description, balises title, aria, etc.

📱 Responsive Design
Optimisé pour desktop, tablette et mobile

Grille responsive via Flexbox et Media Queries

🚀 Déploiement GitHub Pages
Le site est disponible en ligne ici :
👉 https://github.com/Christophe-Camp/hotel-4-elements
👉 https://christophe-camp.github.io/hotel-4-elements/index.html