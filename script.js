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
    navBrands: "Marques",
    navBabyProducts: "Produits bébé",
    navAbout: "À propos",
    navStores: "Magasins",
    navContact: "Contact",
    heroEyebrow: "Distribution à l'île Maurice",
    heroCopy: "Une large sélection de produits pour enfants, du premier âge aux grands espaces de jeu.",
    heroPrimary: "Voir les gammes",
    heroSecondary: "Demander un devis",
    introOneTitle: "Produits variés",
    introOneText: "Bébé, éducatif, jeux, figurines, construction, télécommandé et loisirs actifs.",
    introTwoTitle: "Solutions complètes",
    introTwoText: "Des jouets en magasin jusqu'aux playgrounds et infrastructures sportives.",
    introThreeTitle: "Service local",
    introThreeText: "Accompagnement pour les commerces, écoles, hôtels, collectivités et espaces loisirs.",
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
    brandsEyebrow: "Marques",
    brandsTitle: "Les marques que nous représentons et que vous trouvez en shop",
    brandsText: "Lotus D'or met en avant une sélection de marques pour les bébés, les jouets éducatifs, les jeux, les loisirs et les projets playground. Cette section peut accueillir les logos officiels dès qu'ils sont prêts.",
    brandTypesAria: "Types de marques",
    brandsGridAria: "Marques disponibles chez Lotus D'or",
    brandToolbarOne: "Marques représentées",
    brandToolbarTwo: "Disponibles dans nos shops",
    brandToolbarThree: "Produits par marque à venir",
    brandPlaymobilText: "Univers de figurines, jeux d'imagination et coffrets thématiques pour enfants.",
    brandLegoText: "Jeux de construction, créativité, collections enfants et activités familiales.",
    brandRavensburgerText: "Puzzles, jeux éducatifs et jeux de société pour apprendre et jouer ensemble.",
    brandHasbroText: "Jeux de société, figurines, jeux d'action et classiques pour toute la famille.",
    brandMattelText: "Jouets emblématiques, véhicules, poupées, jeux et nouveautés pour enfants.",
    brandVtechText: "Jouets électroniques, éveil, apprentissage et produits éducatifs interactifs.",
    tagFigures: "Figurines",
    tagProductsSoon: "Produits bientôt",
    tagConstruction: "Construction",
    tagPuzzles: "Puzzles & jeux",
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
    locationsEyebrow: "Localisation",
    locationsTitle: "Retrouvez Lotus D'or dans 3 outlets",
    locationsText: "Visitez l'outlet le plus pratique pour découvrir les produits disponibles et préparer vos achats ou vos projets d'équipement.",
    mapAria: "Carte de Maurice avec les outlets Lotus D'or",
    pinOneAria: "Outlet Lotus D'or 1 - Google Maps",
    pinTwoAria: "Outlet Lotus D'or 2 - Google Maps",
    pinThreeAria: "Outlet Lotus D'or 3 - Google Maps",
    locationOneTitle: "Outlet Lotus D'or",
    locationOneText: "Accédez rapidement à l'itinéraire et aux informations du point de vente sur Google Maps.",
    locationTwoTitle: "Outlet Lotus D'or",
    locationTwoText: "Un second point de vente pour retrouver les gammes jouets, bébé et loisirs enfants.",
    locationThreeTitle: "Outlet Lotus D'or",
    locationThreeText: "Un troisième outlet pour vos demandes produits et projets playground ou infrastructures sportives.",
    openMaps: "Ouvrir dans Google Maps",
    contactEyebrow: "Contact",
    contactTitle: "Parlons de votre demande",
    contactText: "Indiquez le type de produits recherchés, le volume souhaité ou le projet à équiper. Lotus D'or vous répondra avec une proposition adaptée.",
    formName: "Nom",
    formContact: "Téléphone ou email",
    formNeed: "Type de besoin",
    formMessage: "Message",
    formSubmit: "Envoyer la demande",
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
    navBrands: "Brands",
    navBabyProducts: "Baby Products",
    navAbout: "About Us",
    navStores: "Stores",
    navContact: "Contact",
    heroEyebrow: "Distribution in Mauritius",
    heroCopy: "A wide selection of children's products, from baby essentials to large play spaces.",
    heroPrimary: "View ranges",
    heroSecondary: "Request a quote",
    introOneTitle: "Wide product range",
    introOneText: "Baby, educational, games, figures, construction, remote-control toys and active leisure.",
    introTwoTitle: "Complete solutions",
    introTwoText: "From in-store toys to playgrounds and sports infrastructure.",
    introThreeTitle: "Local service",
    introThreeText: "Support for retailers, schools, hotels, public bodies and leisure spaces.",
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
    brandsEyebrow: "Brands",
    brandsTitle: "Brands we represent and brands available in our shops",
    brandsText: "Lotus D'or highlights a selection of brands for babies, educational toys, games, leisure and playground projects. This section can host official logos as soon as they are ready.",
    brandTypesAria: "Brand types",
    brandsGridAria: "Brands available at Lotus D'or",
    brandToolbarOne: "Represented brands",
    brandToolbarTwo: "Available in our shops",
    brandToolbarThree: "Brand products coming soon",
    brandPlaymobilText: "Figure worlds, imagination play and themed sets for children.",
    brandLegoText: "Construction toys, creativity, children's collections and family activities.",
    brandRavensburgerText: "Puzzles, educational games and board games for learning and playing together.",
    brandHasbroText: "Board games, figures, action toys and family classics.",
    brandMattelText: "Iconic toys, vehicles, dolls, games and novelties for children.",
    brandVtechText: "Electronic toys, early learning, discovery and interactive educational products.",
    tagFigures: "Figures",
    tagProductsSoon: "Products soon",
    tagConstruction: "Construction",
    tagPuzzles: "Puzzles & games",
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
    locationsEyebrow: "Location",
    locationsTitle: "Find Lotus D'or in 3 outlets",
    locationsText: "Visit the most convenient outlet to discover available products and prepare your purchases or equipment projects.",
    mapAria: "Map of Mauritius with Lotus D'or outlets",
    pinOneAria: "Lotus D'or outlet 1 - Google Maps",
    pinTwoAria: "Lotus D'or outlet 2 - Google Maps",
    pinThreeAria: "Lotus D'or outlet 3 - Google Maps",
    locationOneTitle: "Lotus D'or outlet",
    locationOneText: "Quickly access directions and store information on Google Maps.",
    locationTwoTitle: "Lotus D'or outlet",
    locationTwoText: "A second outlet to find toys, baby products and children's leisure ranges.",
    locationThreeTitle: "Lotus D'or outlet",
    locationThreeText: "A third outlet for product requests, playground projects and sports infrastructure.",
    openMaps: "Open in Google Maps",
    contactEyebrow: "Contact",
    contactTitle: "Tell us about your request",
    contactText: "Share the type of products you need, the desired volume or the project to equip. Lotus D'or will reply with a suitable proposal.",
    formName: "Name",
    formContact: "Phone or email",
    formNeed: "Type of need",
    formMessage: "Message",
    formSubmit: "Send request",
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

  localStorage.setItem("lotusdor-language", language);
};

let currentLanguage = localStorage.getItem("lotusdor-language") || "fr";
applyLanguage(currentLanguage);

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
