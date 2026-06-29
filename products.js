const productGrid = document.querySelector("[data-products-grid]");

const createSupabaseClient = () => {
  if (!window.supabase || !window.LOTUS_SUPABASE) return null;

  return window.supabase.createClient(
    window.LOTUS_SUPABASE.url,
    window.LOTUS_SUPABASE.publishableKey
  );
};

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

const productCardTemplate = (product) => {
  const image = escapeHtml(product.image_url || "assets/hero-lotus-dor.svg");
  const price = formatPrice(product.price);

  return `
    <article class="live-product-card">
      <img src="${image}" alt="${escapeHtml(product.name)}" loading="lazy" />
      <div class="live-product-card-body">
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description || "Produit disponible chez Lotus D'or.")}</p>
        <div class="live-product-meta">
          <span>${escapeHtml(product.brand || "Lotus D'or")}</span>
          <span>${escapeHtml(product.category || "Jouets")}</span>
          ${price ? `<span>${price}</span>` : ""}
        </div>
      </div>
    </article>
  `;
};

const loadProducts = async () => {
  if (!productGrid) return;

  const client = createSupabaseClient();
  if (!client) return;

  const { data, error } = await client
    .from("products")
    .select("id,name,brand,category,description,price,image_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error || !data?.length) return;

  productGrid.innerHTML = data.map(productCardTemplate).join("");
};

loadProducts();
