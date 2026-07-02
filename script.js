const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const productCards = document.querySelectorAll("[data-category]");
const languageToggle = document.querySelector("[data-language-toggle]");

const translations = {
  fr: {
    titleText: "Lotus D'or | Distribution de jouets et playgrounds à Maurice",
    metaDescription: "Lotus D'or distribue à l'île Maurice des produits bébé, jouets éducatifs, jeux de société, jouets, playgrounds et infrastructures sportives.",
    brandAria: "Lotus D'or accueil",
    brandLine: "Jouets & playgrounds",
    openMenu: "Ouvrir le menu",
    navHome: "Accueil",
    navProducts: "Produits",
    navCollector: "Collector",
    navBabyProducts: "Produits bébé",
    navAbout: "À propos",
    navStores: "Magasins",
    navContact: "Contact",
    heroEyebrow: "Lotus D'or Maurice",
    heroTitle: "Le magasin de jouets de confiance à Maurice depuis plus de 50 ans",
    heroCopy: "Depuis plus de 50 ans, Lotus d'Or fait partie des magasins de jouets de confiance à Maurice, avec une large sélection de jouets, produits bébé, jeux éducatifs, jeux de société et marques internationales pour les familles de toute l'île.",
    heroPrimary: "Shop / Découvrir les produits",
    heroSecondary: "Contact WhatsApp",
    categoriesEyebrow: "Catégories",
    categoriesTitle: "Trouvez rapidement ce qu'il vous faut",
    categoriesText: "Des jouets du quotidien aux produits bébé, jeux éducatifs, jeux de société, équipements outdoor et articles collector.",
    categoriesAria: "Catégories principales",
    categoryToys: "Jouets",
    categoryBaby: "Produits bébé",
    categoryEducational: "Jouets éducatifs",
    categoryBoard: "Jeux de société",
    categoryOutdoor: "Extérieur & sport",
    categoryCollector: "Collector",
    whyAria: "Pourquoi choisir Lotus D'or",
    whyEyebrow: "Pourquoi Lotus d'Or",
    whyTitle: "Pourquoi les familles choisissent Lotus D'or",
    whyText: "Une enseigne installée à Maurice, avec une large sélection, des marques fiables et des magasins accessibles.",
    introOneTitle: "50+ ans à Maurice",
    introOneText: "Une présence locale construite sur la confiance des familles mauriciennes.",
    introTwoTitle: "Des milliers de produits",
    introTwoText: "Des gammes pour bébés, enfants, familles, écoles, loisirs et projets outdoor.",
    introThreeTitle: "Marques internationales fiables",
    introThreeText: "LEGO, Playmobil, Ravensburger, Mattel, Hasbro, VTech et d'autres références.",
    introFourTitle: "Magasins à Port-Louis & Rivière Noire",
    introFourText: "Des points de vente accessibles pour découvrir les produits et demander conseil.",
    aboutEyebrow: "À propos",
    aboutTitle: "Lotus D'or, une histoire construite autour du jeu et de la famille",
    aboutText: "Lotus D'or est une entreprise mauricienne spécialisée dans la distribution de jouets, produits pour bébé, jeux éducatifs, loisirs pour enfants, playgrounds et infrastructures sportives. Son rôle est de rapprocher les familles, les revendeurs et les porteurs de projets d'une offre fiable, variée et adaptée au marché local.",
    historyOneLabel: "Départ",
    historyOneTitle: "Une sélection pensée pour les enfants",
    historyOneText: "L'entreprise s'est développée autour d'une idée simple : proposer des produits qui accompagnent l'éveil, le jeu, la créativité et les moments partagés en famille.",
    historyTwoLabel: "Évolution",
    historyTwoTitle: "Une offre qui s'élargit",
    historyTwoText: "Au fil du temps, Lotus D'or a élargi ses gammes : produits bébé, jouets éducatifs, jeux de société, figurines, construction, véhicules télécommandés et nouveautés saisonnières.",
    historyThreeLabel: "Aujourd'hui",
    historyThreeTitle: "3 outlets et des projets plus grands",
    historyThreeText: "Avec ses outlets et son expertise dans les playgrounds et infrastructures sportives, Lotus D'or accompagne aussi les écoles, hôtels, collectivités et espaces de loisirs à l'île Maurice.",
    rangesEyebrow: "Catalogue",
    rangesTitle: "Des gammes pour chaque âge et chaque espace",
    rangesText: "Lotus D'or accompagne les revendeurs et porteurs de projets avec une offre pensée pour les familles, les écoles et les lieux recevant du public.",
    filterAria: "Filtrer les gammes",
    filterAll: "Tout",
    filterIndoor: "Intérieur",
    filterOutdoor: "Extérieur",
    filterPro: "Professionnel",
    rangeBabyTitle: "Produits bébé",
    rangeBabyText: "Articles pour le premier âge, éveil, confort et accessoires adaptés aux jeunes enfants.",
    rangeEduTitle: "Jouets éducatifs",
    rangeEduText: "Jeux d'apprentissage, motricité, logique, créativité et découverte par le jeu.",
    rangeBoardTitle: "Jeux de société",
    rangeBoardText: "Jeux familiaux, stratégie, cartes, puzzles et activités pour moments partagés.",
    rangeToyTitle: "Jouets variés",
    rangeToyText: "Figurines, construction, véhicules télécommandés, jeux d'imitation et nouveautés saisonnières.",
    rangePlayTitle: "Playgrounds",
    rangePlayText: "Structures de jeu pour écoles, hôtels, résidences, collectivités et espaces récréatifs.",
    rangeSportTitle: "Infrastructures sportives",
    rangeSportText: "Solutions pour terrains, parcours, équipements sportifs et zones d'activité extérieure.",
    collectorEyebrow: "Collector",
    collectorTitle: "Jeux collector et éditions spéciales",
    collectorText: "Une sélection dédiée aux passionnés : figurines, coffrets, constructions, véhicules, puzzles et jeux en édition spéciale ou à collectionner.",
    collectorGridAria: "Jeux collector disponibles chez Lotus D'or",
    collectorFiguresTitle: "Figurines collector",
    collectorFiguresText: "Personnages, univers thématiques et séries à compléter pour les enfants, parents et collectionneurs.",
    collectorBuildTitle: "Constructions & coffrets",
    collectorBuildText: "Sets de construction, coffrets spéciaux et modèles à exposer ou à offrir.",
    collectorVehiclesTitle: "Véhicules & miniatures",
    collectorVehiclesText: "Voitures, circuits, modèles réduits et collections pour les passionnés de véhicules.",
    brandsEyebrow: "Marques à découvrir",
    brandsTitle: "Des marques reconnues que les familles connaissent déjà",
    brandsText: "Retrouvez chez Lotus D'or une sélection de marques internationales pour les jouets, les jeux, l'éveil, les collections et les loisirs.",
    brandTypesAria: "Types de marques",
    brandsGridAria: "Marques disponibles chez Lotus D'or",
    brandToolbarOne: "Marques représentées",
    brandToolbarTwo: "Disponibles dans nos magasins",
    brandToolbarThree: "Produits par marque à venir",
    brandPlaymobilText: "Univers de figurines, jeux d'imagination et coffrets thématiques pour enfants.",
    brandLegoText: "Jeux de construction, créativité, collections enfants et activités familiales.",
    brandRavensburgerText: "Puzzles, jeux éducatifs et jeux de société pour apprendre et jouer ensemble.",
    brandMajoretteText: "Voitures miniatures, circuits, véhicules et collections pour enfants passionnés.",
    brandHasbroText: "Jeux de société, figurines, jeux d'action et classiques pour toute la famille.",
    brandMattelText: "Jouets emblématiques, véhicules, poupées, jeux et nouveautés pour enfants.",
    brandVtechText: "Jouets électroniques, éveil, apprentissage et produits éducatifs interactifs.",
    tagFigures: "Figurines",
    tagProductsSoon: "Produits bientôt",
    tagConstruction: "Construction",
    tagPuzzles: "Puzzles & jeux",
    tagVehicles: "Véhicules",
    tagGamesFigures: "Jeux & figurines",
    tagVariousToys: "Jouets variés",
    tagEducational: "Éducatif",
    productsEyebrow: "Produits",
    productsTitle: "Les produits ajoutés par l'équipe Lotus D'or",
    productsText: "Cette zone se mettra à jour automatiquement avec les produits publiés depuis l'espace administrateur.",
    productsEmptyTitle: "Produits bientôt disponibles",
    productsEmptyText: "Les produits publiés dans l'espace admin apparaîtront ici.",
    solutionsEyebrow: "Méthode",
    solutionsTitle: "Un partenaire pour choisir, fournir et équiper",
    solutionsText: "Que le besoin soit un rayon jouets, une salle d'activités ou un grand espace extérieur, Lotus D'or peut aider à composer une sélection cohérente selon l'âge, l'espace, le budget et l'usage prévu.",
    stepsAria: "Étapes de travail",
    stepOneTitle: "Comprendre le besoin",
    stepOneText: "Public visé, espace disponible, fréquence d'utilisation et contraintes de sécurité.",
    stepTwoTitle: "Proposer la sélection",
    stepTwoText: "Produits adaptés, volumes, catégories et options pour les projets standards ou sur mesure.",
    stepThreeTitle: "Coordonner la livraison",
    stepThreeText: "Accompagnement local pour faciliter l'approvisionnement et la mise en place.",
    projectsEyebrow: "Applications",
    projectsTitle: "Pour boutiques, écoles, hôtels et espaces publics",
    projectShop: "Boutiques de jouets",
    projectSchool: "Crèches et écoles",
    projectHotel: "Hôtels et resorts",
    projectCommunity: "Espaces communautaires",
    projectSports: "Clubs sportifs",
    projectLeisure: "Centres de loisirs",
    locationsEyebrow: "Nos magasins",
    locationsTitle: "Tribeca Mall, Port-Louis et Rivière Noire",
    locationsText: "Passez en magasin pour découvrir les produits, demander conseil, ouvrir Google Maps ou nous contacter sur WhatsApp.",
    mapAria: "Carte de l'île Maurice avec les magasins Lotus D'or",
    pinOneAria: "Tribeca Mall - Google Maps",
    pinTwoAria: "Port-Louis - Google Maps",
    pinThreeAria: "Rivière Noire / Baby Lotus D'or - Google Maps",
    locationOneTitle: "Tribeca Mall",
    locationOneText: "Notre magasin phare, offrant la plus vaste sélection de jouets, produits bébé et marques internationales dans un environnement moderne pensé pour toute la famille.",
    locationTwoTitle: "Port-Louis",
    locationTwoText: "Notre magasin historique au cœur de la capitale, où Lotus D’Or accompagne les familles mauriciennes depuis plus de 50 ans.",
    locationThreeTitle: "Rivière Noire / Baby Lotus D'or",
    locationThreeText: "Notre destination sur la côte Ouest, proposant une sélection premium de jouets, produits bébé et grandes marques internationales pour toute la famille.",
    openMaps: "Google Maps",
    contactEyebrow: "Contact",
    contactTitle: "Parlons de votre demande",
    contactText: "Indiquez le type de produits recherchés, le volume souhaité ou le projet à équiper. Lotus D'or vous répondra avec une proposition adaptée.",
    formName: "Nom",
    formContact: "Téléphone ou email",
    formNeed: "Type de besoin",
    formMessage: "Message",
    formSubmit: "Envoyer la demande",
    socialAria: "Réseaux sociaux Lotus D'or",
    facebookAria: "Facebook Lotus D'or",
    instagramAria: "Instagram Lotus D'or",
    socialFacebook: "Facebook",
    socialInstagram: "Instagram",
    needBaby: "Produits bébé",
    needToys: "Jouets et jeux",
    needPlayground: "Playground",
    needSport: "Infrastructure sportive",
    needOther: "Autre demande",
    footerText: "Distribution de jouets, playgrounds et infrastructures sportives à l'île Maurice",
  },
  en: {
    titleText: "Lotus D'or | Toy and playground distribution in Mauritius",
    metaDescription: "Lotus D'or distributes baby products, educational toys, board games, toys, playgrounds and sports infrastructure in Mauritius.",
    brandAria: "Lotus D'or home",
    brandLine: "Toys & playgrounds",
    openMenu: "Open menu",
    navHome: "Home",
    navProducts: "Products",
    navCollector: "Collector",
    navBabyProducts: "Baby Products",
    navAbout: "About Us",
    navStores: "Stores",
    navContact: "Contact",
    heroEyebrow: "Lotus D'or Mauritius",
    heroTitle: "Mauritius' trusted toy store for over 50 years",
    heroCopy: "Lotus d'Or has been one of Mauritius' trusted toy stores for over 50 years, offering a wide selection of toys, baby products, educational games, board games and international brands for families across the island.",
    heroPrimary: "Shop / Discover products",
    heroSecondary: "Contact us on WhatsApp",
    categoriesEyebrow: "Main categories",
    categoriesTitle: "Find what you need faster",
    categoriesText: "Everyday toys, baby products, educational toys, board games, outdoor equipment and collector items.",
    categoriesAria: "Main categories",
    categoryToys: "Toys",
    categoryBaby: "Baby Products",
    categoryEducational: "Educational Toys",
    categoryBoard: "Board Games",
    categoryOutdoor: "Outdoor & Sports",
    categoryCollector: "Collector",
    whyAria: "Why Lotus d'Or",
    whyEyebrow: "Why Lotus d'Or",
    whyTitle: "Why families choose Lotus d'Or",
    whyText: "A Mauritius-based store with a wide selection, trusted brands and accessible locations.",
    introOneTitle: "50+ years in Mauritius",
    introOneText: "A local presence built on the trust of Mauritian families.",
    introTwoTitle: "Thousands of products",
    introTwoText: "Ranges for babies, children, families, schools, leisure and outdoor projects.",
    introThreeTitle: "Trusted international brands",
    introThreeText: "LEGO, Playmobil, Ravensburger, Mattel, Hasbro, VTech and other trusted names.",
    introFourTitle: "Stores in Port-Louis & Rivière Noire",
    introFourText: "Accessible stores to discover products and get advice.",
    aboutEyebrow: "About",
    aboutTitle: "Lotus D'or, a story built around play and family",
    aboutText: "Lotus D'or is a Mauritian company specialising in the distribution of toys, baby products, educational games, children's leisure products, playgrounds and sports infrastructure. Its role is to connect families, retailers and project owners with a reliable, varied offer adapted to the local market.",
    historyOneLabel: "Beginning",
    historyOneTitle: "A selection designed for children",
    historyOneText: "The company grew around a simple idea: offering products that support discovery, play, creativity and shared family moments.",
    historyTwoLabel: "Growth",
    historyTwoTitle: "An offer that keeps expanding",
    historyTwoText: "Over time, Lotus D'or expanded its ranges: baby products, educational toys, board games, figures, construction toys, remote-control vehicles and seasonal novelties.",
    historyThreeLabel: "Today",
    historyThreeTitle: "3 outlets and larger projects",
    historyThreeText: "With its outlets and expertise in playgrounds and sports infrastructure, Lotus D'or also supports schools, hotels, public bodies and leisure spaces across Mauritius.",
    rangesEyebrow: "Catalogue",
    rangesTitle: "Ranges for every age and every space",
    rangesText: "Lotus D'or supports retailers and project owners with an offer designed for families, schools and public-facing venues.",
    filterAria: "Filter ranges",
    filterAll: "All",
    filterIndoor: "Indoor",
    filterOutdoor: "Outdoor",
    filterPro: "Professional",
    rangeBabyTitle: "Baby products",
    rangeBabyText: "Early-age items, discovery toys, comfort products and accessories for young children.",
    rangeEduTitle: "Educational toys",
    rangeEduText: "Learning games, motor skills, logic, creativity and discovery through play.",
    rangeBoardTitle: "Board games",
    rangeBoardText: "Family games, strategy, cards, puzzles and activities for shared moments.",
    rangeToyTitle: "Assorted toys",
    rangeToyText: "Figures, construction toys, remote-control vehicles, pretend play and seasonal novelties.",
    rangePlayTitle: "Playgrounds",
    rangePlayText: "Play structures for schools, hotels, residences, public bodies and recreational spaces.",
    rangeSportTitle: "Sports infrastructure",
    rangeSportText: "Solutions for courts, tracks, sports equipment and outdoor activity zones.",
    collectorEyebrow: "Collector",
    collectorTitle: "Collector games and special editions",
    collectorText: "A dedicated selection for enthusiasts: figures, boxed sets, construction toys, vehicles, puzzles and special-edition collectible games.",
    collectorGridAria: "Collector games available at Lotus D'or",
    collectorFiguresTitle: "Collector figures",
    collectorFiguresText: "Characters, themed worlds and series to complete for children, parents and collectors.",
    collectorBuildTitle: "Construction sets & boxes",
    collectorBuildText: "Construction sets, special boxes and models to display or gift.",
    collectorVehiclesTitle: "Vehicles & miniatures",
    collectorVehiclesText: "Cars, circuits, scale models and collections for vehicle enthusiasts.",
    brandsEyebrow: "Featured brands",
    brandsTitle: "Recognised brands families already know",
    brandsText: "Find a selection of international brands for toys, games, early learning, collections and leisure at Lotus D'or.",
    brandTypesAria: "Brand types",
    brandsGridAria: "Brands available at Lotus D'or",
    brandToolbarOne: "Represented brands",
    brandToolbarTwo: "Available in our shops",
    brandToolbarThree: "Brand products coming soon",
    brandPlaymobilText: "Figure worlds, imagination play and themed sets for children.",
    brandLegoText: "Construction toys, creativity, children's collections and family activities.",
    brandRavensburgerText: "Puzzles, educational games and board games for learning and playing together.",
    brandMajoretteText: "Die-cast cars, tracks, vehicles and collections for young enthusiasts.",
    brandHasbroText: "Board games, figures, action toys and family classics.",
    brandMattelText: "Iconic toys, vehicles, dolls, games and novelties for children.",
    brandVtechText: "Electronic toys, early learning, discovery and interactive educational products.",
    tagFigures: "Figures",
    tagProductsSoon: "Products soon",
    tagConstruction: "Construction",
    tagPuzzles: "Puzzles & games",
    tagVehicles: "Vehicles",
    tagGamesFigures: "Games & figures",
    tagVariousToys: "Assorted toys",
    tagEducational: "Educational",
    productsEyebrow: "Products",
    productsTitle: "Products added by the Lotus D'or team",
    productsText: "This area will update automatically with products published from the admin space.",
    productsEmptyTitle: "Products coming soon",
    productsEmptyText: "Products published in the admin space will appear here.",
    solutionsEyebrow: "Method",
    solutionsTitle: "A partner to choose, supply and equip",
    solutionsText: "Whether the need is a toy shelf, an activity room or a large outdoor space, Lotus D'or can help build a coherent selection by age, space, budget and intended use.",
    stepsAria: "Work steps",
    stepOneTitle: "Understand the need",
    stepOneText: "Target audience, available space, frequency of use and safety constraints.",
    stepTwoTitle: "Propose the selection",
    stepTwoText: "Adapted products, volumes, categories and options for standard or custom projects.",
    stepThreeTitle: "Coordinate delivery",
    stepThreeText: "Local support to simplify supply and setup.",
    projectsEyebrow: "Applications",
    projectsTitle: "For shops, schools, hotels and public spaces",
    projectShop: "Toy shops",
    projectSchool: "Nurseries and schools",
    projectHotel: "Hotels and resorts",
    projectCommunity: "Community spaces",
    projectSports: "Sports clubs",
    projectLeisure: "Leisure centres",
    locationsEyebrow: "Visit our stores",
    locationsTitle: "Tribeca Mall, Port-Louis and Rivière Noire",
    locationsText: "Visit a store to discover products, ask for advice, open Google Maps or contact us on WhatsApp.",
    mapAria: "Map of Mauritius with Lotus D'or stores",
    pinOneAria: "Tribeca Mall - Google Maps",
    pinTwoAria: "Port-Louis - Google Maps",
    pinThreeAria: "Rivière Noire / Baby Lotus D'or - Google Maps",
    locationOneTitle: "Tribeca Mall",
    locationOneText: "Our flagship store, offering the widest selection of toys, baby products and international brands in a modern environment designed for the whole family.",
    locationTwoTitle: "Port-Louis",
    locationTwoText: "Our historic store in the heart of the capital, where Lotus D’Or has supported Mauritian families for over 50 years.",
    locationThreeTitle: "Rivière Noire / Baby Lotus D'or",
    locationThreeText: "Our West Coast destination, offering a premium selection of toys, baby products and major international brands for the whole family.",
    openMaps: "Google Maps",
    contactEyebrow: "Contact",
    contactTitle: "Tell us about your request",
    contactText: "Share the type of products you need, the desired volume or the project to equip. Lotus D'or will reply with a suitable proposal.",
    formName: "Name",
    formContact: "Phone or email",
    formNeed: "Type of need",
    formMessage: "Message",
    formSubmit: "Send request",
    socialAria: "Lotus D'or social media",
    facebookAria: "Lotus D'or Facebook",
    instagramAria: "Lotus D'or Instagram",
    socialFacebook: "Facebook",
    socialInstagram: "Instagram",
    needBaby: "Baby products",
    needToys: "Toys and games",
    needPlayground: "Playground",
    needSport: "Sports infrastructure",
    needOther: "Other request",
    footerText: "Distribution of toys, playgrounds and sports infrastructure in Mauritius",
  },
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.fr;

  document.documentElement.lang = language;
  document.title = dictionary.titleText;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  if (languageToggle) {
    const nextLanguage = language === "fr" ? "en" : "fr";
    languageToggle.textContent = nextLanguage.toUpperCase();
    languageToggle.setAttribute(
      "aria-label",
      language === "fr" ? "Switch to English" : "Passer en français"
    );
  }

  refreshStoreMapLanguage(language);
  localStorage.setItem("lotusdor-language", language);
};

let storeMap;
let storeMapMarkers = [];

const storeLocations = [
  {
    number: "01",
    titleKey: "locationOneTitle",
    textKey: "locationOneText",
    mapsUrl: "https://maps.app.goo.gl/rcr5eY8CigBYeZD9A",
    coordinates: [-20.2439129, 57.4981216],
  },
  {
    number: "02",
    titleKey: "locationTwoTitle",
    textKey: "locationTwoText",
    mapsUrl: "https://maps.app.goo.gl/q9X2GbiPa9SifYKn7",
    coordinates: [-20.1641762, 57.5046195],
  },
  {
    number: "03",
    titleKey: "locationThreeTitle",
    textKey: "locationThreeText",
    mapsUrl: "https://maps.app.goo.gl/c8KUn4sMrM7jsVJq7",
    coordinates: [-20.3617822, 57.3736467],
  },
];

const createStorePopup = (location, language) => {
  const dictionary = translations[language] || translations.fr;
  return `
    <div class="lotus-map-popup">
      <strong>${location.number} — ${dictionary[location.titleKey]}</strong>
      <span>${dictionary[location.textKey]}</span>
      <a href="${location.mapsUrl}" target="_blank" rel="noreferrer">${dictionary.openMaps}</a>
    </div>
  `;
};

const refreshStoreMapLanguage = (language) => {
  if (!storeMapMarkers.length) return;

  storeMapMarkers.forEach(({ marker, location }) => {
    marker.bindPopup(createStorePopup(location, language));
  });
};

const initStoreMap = () => {
  const mapElement = document.getElementById("lotus-stores-map");
  if (!mapElement || typeof L === "undefined") return;

  storeMap = L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([-20.245, 57.49], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap",
  }).addTo(storeMap);

  const markerIcon = (number) => L.divIcon({
    className: "",
    html: `<div class="lotus-map-marker"><span>${number}</span></div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -38],
  });

  storeMapMarkers = storeLocations.map((location) => {
    const marker = L.marker(location.coordinates, { icon: markerIcon(location.number) })
      .addTo(storeMap)
      .bindPopup(createStorePopup(location, currentLanguage));
    return { marker, location };
  });

  const bounds = L.latLngBounds(storeLocations.map((location) => location.coordinates));
  storeMap.fitBounds(bounds, { padding: [42, 42] });
};

let currentLanguage = localStorage.getItem("lotusdor-language") || "fr";
applyLanguage(currentLanguage);
initStoreMap();

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  header.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  nav.classList.remove("open");
  header.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    productCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

languageToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "fr" ? "en" : "fr";
  applyLanguage(currentLanguage);
});
