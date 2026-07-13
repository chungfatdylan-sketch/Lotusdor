const adminClient = window.supabase.createClient(
  window.LOTUS_SUPABASE.url,
  window.LOTUS_SUPABASE.publishableKey
);

const authPanel = document.querySelector("[data-auth-panel]");
const dashboard = document.querySelector("[data-dashboard]");
const loginForm = document.querySelector("[data-login-form]");
const loginMessage = document.querySelector("[data-login-message]");
const productForm = document.querySelector("[data-product-form]");
const productMessage = document.querySelector("[data-product-message]");
const productList = document.querySelector("[data-product-list]");
const logoutButton = document.querySelector("[data-logout]");
const resetButton = document.querySelector("[data-reset-form]");
const imagePreview = document.querySelector("[data-image-preview]");
const imagePreviewImg = imagePreview?.querySelector("img");
const PRODUCT_IMAGE_BUCKET = "product-images";
const MAX_PRODUCT_IMAGE_SIZE = 5 * 1024 * 1024;

const setMessage = (element, message) => {
  element.textContent = message || "";
};


const friendlyDatabaseError = (message) => {
  if (!message) return "";
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("could not find the table") || lowerMessage.includes("schema cache")) {
    return "La table produits n'existe pas encore dans Supabase. Ouvre Supabase > SQL Editor, exécute le fichier supabase-schema.sql, puis recharge cette page.";
  }

  if (lowerMessage.includes("bucket not found") || lowerMessage.includes("product-images")) {
    return "Le stockage des images n'est pas encore configuré. Exécute aussi la partie Storage du fichier supabase-schema.sql dans Supabase SQL Editor.";
  }

  return message;
};

const friendlyAuthError = (message) => {
  if (!message) return "";
  if (message.toLowerCase().includes("invalid login credentials")) {
    return "Identifiant ou mot de passe incorrect.";
  }
  if (message.toLowerCase().includes("email not confirmed")) {
    return "L'email du compte admin doit être confirmé dans Supabase.";
  }
  return message;
};

const slugifyFileName = (value) =>
  String(value || "product")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "") || "product";

const buildImagePath = (file) => {
  const safeName = slugifyFileName(file.name);
  return `${Date.now()}-${safeName}`;
};

const uploadProductImage = async (file) => {
  if (!file) return "";

  if (!file.type.startsWith("image/")) {
    throw new Error("Le fichier choisi doit être une image.");
  }

  if (file.size > MAX_PRODUCT_IMAGE_SIZE) {
    throw new Error("L'image ne doit pas dépasser 5 MB.");
  }

  const filePath = buildImagePath(file);
  const { error } = await adminClient.storage
    .from(PRODUCT_IMAGE_BUCKET)
    .upload(filePath, file, { cacheControl: "3600", upsert: false });

  if (error) throw new Error(`Image non envoyée : ${error.message}`);

  const { data } = adminClient.storage.from(PRODUCT_IMAGE_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
};

const updateImagePreview = (src) => {
  if (!imagePreview || !imagePreviewImg) return;

  if (!src) {
    imagePreview.hidden = true;
    imagePreviewImg.removeAttribute("src");
    return;
  }

  imagePreviewImg.src = src;
  imagePreview.hidden = false;
};

const escapeHtml = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const showDashboard = async (isLoggedIn) => {
  authPanel.hidden = isLoggedIn;
  dashboard.hidden = !isLoggedIn;

  if (isLoggedIn) {
    await loadAdminProducts();
  }
};

const resetProductForm = () => {
  productForm.reset();
  productForm.elements.id.value = "";
  productForm.elements.is_published.checked = true;
  productForm.elements.image_file.value = "";
  updateImagePreview("");
  setMessage(productMessage, "");
};

const productPayloadFromForm = (imageUrl = "") => ({
  name: productForm.elements.name.value.trim(),
  brand: productForm.elements.brand.value,
  category: productForm.elements.category.value.trim(),
  price: productForm.elements.price.value ? Number(productForm.elements.price.value) : null,
  image_url: imageUrl || productForm.elements.image_url.value.trim(),
  description: productForm.elements.description.value.trim(),
  description_en: productForm.elements.description_en.value.trim(),
  is_published: productForm.elements.is_published.checked,
});

const loadAdminProducts = async () => {
  const { data, error } = await adminClient
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    productList.innerHTML = `<p class="admin-message">${friendlyDatabaseError(error.message)}</p>`;
    return;
  }

  if (!data.length) {
    productList.innerHTML = `<p class="admin-message">Aucun produit pour le moment.</p>`;
    return;
  }

  productList.innerHTML = data
    .map(
      (product) => `
        <article class="admin-product-row">
          <img src="${escapeHtml(product.image_url || "assets/hero-lotus-dor.svg")}" alt="${escapeHtml(product.name)}" />
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${escapeHtml(product.brand)} · ${escapeHtml(product.category || "Sans catégorie")} · ${
              product.is_published ? "Publié" : "Brouillon"
            }</p>
          </div>
          <div class="row-actions">
            <button type="button" data-edit="${product.id}">Modifier</button>
            <button type="button" data-delete="${product.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join("");

  productList.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = data.find((item) => item.id === button.dataset.edit);
      if (!product) return;

      productForm.elements.id.value = product.id;
      productForm.elements.name.value = product.name || "";
      productForm.elements.brand.value = product.brand || "Autre";
      productForm.elements.category.value = product.category || "";
      productForm.elements.price.value = product.price || "";
      productForm.elements.image_url.value = product.image_url || "";
      productForm.elements.image_file.value = "";
      productForm.elements.description.value = product.description || "";
      productForm.elements.description_en.value = product.description_en || "";
      productForm.elements.is_published.checked = Boolean(product.is_published);
      updateImagePreview(product.image_url || "");
      setMessage(productMessage, "Produit prêt à modifier.");
    });
  });

  productList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", async () => {
      const { error: deleteError } = await adminClient.from("products").delete().eq("id", button.dataset.delete);
      if (deleteError) {
        setMessage(productMessage, friendlyDatabaseError(deleteError.message));
        return;
      }
      resetProductForm();
      await loadAdminProducts();
    });
  });
};

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage(loginMessage, "Connexion...");

  const { error } = await adminClient.auth.signInWithPassword({
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value,
  });

  if (error) {
    setMessage(loginMessage, friendlyAuthError(error.message));
    return;
  }

  setMessage(loginMessage, "");
  await showDashboard(true);
});

logoutButton.addEventListener("click", async () => {
  await adminClient.auth.signOut();
  await showDashboard(false);
});

resetButton.addEventListener("click", resetProductForm);


productForm.elements.image_file.addEventListener("change", () => {
  const file = productForm.elements.image_file.files[0];
  if (!file) {
    updateImagePreview(productForm.elements.image_url.value.trim());
    return;
  }

  updateImagePreview(URL.createObjectURL(file));
});

productForm.elements.image_url.addEventListener("input", () => {
  if (productForm.elements.image_file.files[0]) return;
  updateImagePreview(productForm.elements.image_url.value.trim());
});

productForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage(productMessage, "Enregistrement...");

  const id = productForm.elements.id.value;
  const imageFile = productForm.elements.image_file.files[0];

  let uploadedImageUrl = "";
  try {
    uploadedImageUrl = await uploadProductImage(imageFile);
  } catch (uploadError) {
    setMessage(productMessage, uploadError.message);
    return;
  }

  const payload = productPayloadFromForm(uploadedImageUrl);
  const request = id
    ? adminClient.from("products").update(payload).eq("id", id)
    : adminClient.from("products").insert(payload);

  const { error } = await request;

  if (error) {
    setMessage(productMessage, friendlyDatabaseError(error.message));
    return;
  }

  resetProductForm();
  setMessage(productMessage, "Produit enregistré.");
  await loadAdminProducts();
});

adminClient.auth.getSession().then(({ data }) => {
  showDashboard(Boolean(data.session));
});
