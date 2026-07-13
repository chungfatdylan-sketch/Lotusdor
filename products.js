const productGrid = document.querySelector("[data-products-grid]");
let loadedProducts = [];

const createSupabaseClient = () => {
  if (!window.supabase || !window.LOTUS_SUPABASE) return null;

  return window.supabase.createClient(
    window.LOTUS_SUPABASE.url,
    window.LOTUS_SUPABASE.publishableKey
  );
};

const getProductLanguage = () => localStorage.getItem("lotusdor-language") || document.documentElement.lang || "fr";

const formatPrice = (price) => {
  if (price === null || price === undefined || price === "") return "";
  return `Rs ${Number(price).toLocaleString("fr-FR")}`;
};

const escapeHtml = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const productDescription = (product, language) => {
  if (language === "en") {
    return product.description_en || "Product available at Lotus D'or.";
  }

  return product.description || "Produit disponible chez Lotus D'or.";
};

const productCardTemplate = (product, language = getProductLanguage()) => {
  const image = escapeHtml(product.image_url || "assets/hero-lotus-dor.svg");
  const price = formatPrice(product.price);

  return `
    <article class="live-product-card">
      <img src="${image}" alt="${escapeHtml(product.name)}" loading="lazy" />
      <div class="live-product-card-body">
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(productDescription(product, language))}</p>
        <div class="live-product-meta">
          <span>${escapeHtml(product.brand || "Lotus D'or")}</span>
          <span>${escapeHtml(product.category || (language === "en" ? "Toys" : "Jouets"))}</span>
          ${price ? `<span>${price}</span>` : ""}
        </div>
      </div>
    </article>
  `;
};

const renderProducts = (language = getProductLanguage()) => {
  if (!productGrid || !loadedProducts.length) return;
  productGrid.innerHTML = loadedProducts.map((product) => productCardTemplate(product, language)).join("");
};

window.renderLotusProductsForLanguage = renderProducts;

const loadProducts = async () => {
  if (!productGrid) return;

  const client = createSupabaseClient();
  if (!client) return;

  const { data, error } = await client
    .from("products")
    .select("id,name,brand,category,description,description_en,price,image_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error || !data?.length) return;

  loadedProducts = data;
  renderProducts();
};

loadProducts();
