/* ==========================================================================
   ProTech AI — shared runtime (header, footer, assistant, toast, sessions)
   Depends on data.js being loaded first.
   ========================================================================== */

/* ---------- Toast ---------- */
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ---------- Customer session (demo auth, localStorage only) ---------- */
function getSession() {
  try { return JSON.parse(localStorage.getItem("ps_session") || "null"); }
  catch (e) { return null; }
}
function setSession(data) { localStorage.setItem("ps_session", JSON.stringify(data)); }
function clearSession() { localStorage.removeItem("ps_session"); }

/* ---------- Cart (demo) ---------- */
function getCart() {
  try { return JSON.parse(localStorage.getItem("ps_cart") || "[]"); }
  catch (e) { return []; }
}
function addToCart(name) {
  const cart = getCart();
  cart.push({ name, addedAt: Date.now() });
  localStorage.setItem("ps_cart", JSON.stringify(cart));
  renderHeader(document.body.getAttribute("data-page"));
  showToast(`${name} added to cart`);
}

/* ---------- Admin session (demo auth, localStorage only — NOT real security) ---------- */
function getAdminSession() {
  try { return JSON.parse(localStorage.getItem("ps_admin_session") || "null"); }
  catch (e) { return null; }
}
function setAdminSession(data) { localStorage.setItem("ps_admin_session", JSON.stringify(data)); }
function clearAdminSession() { localStorage.removeItem("ps_admin_session"); }
function requireAdminAuth() {
  if (!getAdminSession()) {
    window.location.href = "admin-login.html";
  }
}

/* ---------- Header ---------- */
function renderHeader(activePage) {
  const el = document.getElementById("appHeader");
  if (!el) return;
  const session = getSession();
  const cartCount = getCart().length;

  const navHtml = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="${activePage && l.href.split("?")[0] === activePage ? "active" : ""}">${l.label}</a>`
  ).join("");

  const mobileNavHtml = NAV_LINKS.map((l) => `<a href="${l.href}">${l.label}</a>`).join("");

  const actionsHtml = session
    ? `
      <a href="dashboard.html" class="btn">🧑 ${session.name || "Account"}</a>
      <a href="marketplace.html" class="btn cart-badge">🛒 Cart${cartCount ? `<span class="count">${cartCount}</span>` : ""}</a>
      <button class="btn" id="headerLogoutBtn">Logout</button>
    `
    : `
      <a href="login.html" class="btn">Login</a>
      <a href="register.html" class="btn">Register</a>
      <a href="pricing.html" class="btn btn-primary btn-shine">Free Trial</a>
    `;

  el.innerHTML = `
    <div class="header-inner glass">
      <a href="index.html" class="brand">
        <span class="brand-mark gradient-brand">PT</span>
        <span class="brand-name">ProTech <span class="gradient-text">AI</span></span>
      </a>
      <nav class="main-nav">${navHtml}</nav>
      <div class="header-actions">${actionsHtml}</div>
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">☰</button>
    </div>
    <div class="mobile-nav hidden" id="mobileNav">
      ${mobileNavHtml}
      <div style="display:flex;gap:8px;margin-top:10px;">
        ${
          session
            ? `<a href="dashboard.html" class="btn" style="flex:1;text-align:center;">Dashboard</a><button class="btn" style="flex:1;" id="mobileLogoutBtn">Logout</button>`
            : `<a href="login.html" class="btn" style="flex:1;text-align:center;">Login</a><a href="register.html" class="btn btn-primary" style="flex:1;text-align:center;">Register</a>`
        }
      </div>
    </div>
  `;

  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => mobileNav.classList.toggle("hidden"));
  }
  const logoutBtn = document.getElementById("headerLogoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", () => { clearSession(); showToast("Logged out"); setTimeout(() => location.href = "index.html", 500); });
  const mobileLogoutBtn = document.getElementById("mobileLogoutBtn");
  if (mobileLogoutBtn) mobileLogoutBtn.addEventListener("click", () => { clearSession(); showToast("Logged out"); setTimeout(() => location.href = "index.html", 500); });
}

/* ---------- Footer ---------- */
function renderFooter() {
  const el = document.getElementById("appFooter");
  if (!el) return;
  const colsHtml = FOOTER_COLUMNS.map(
    (col) => `
    <div>
      <h4>${col.title}</h4>
      <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
    </div>`
  ).join("");

  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="brand">
            <span class="brand-mark gradient-brand">PT</span>
            <span class="brand-name">ProTech <span class="gradient-text">AI</span></span>
          </a>
          <p style="color:var(--muted);font-size:13.5px;margin-top:10px;">
            Everything your business needs. Search, build, automate, grow.
          </p>
        </div>
        ${colsHtml}
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-row">
          <span class="footer-credit">
            Website designed &amp; developed by Engineer ${SITE.ownerName}
            <span class="contact">— 📞 <a href="tel:+${SITE.supportPhoneRaw}">${SITE.supportPhone}</a> · ✉️ <a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a></span>
          </span>
        </div>
        <div class="footer-bottom-row">
          <span>© ${new Date().getFullYear()} ${SITE.name}. Prototype — all data shown is sample data.</span>
          <div class="footer-legal">
            <a href="index.html">Privacy</a>
            <a href="index.html">Terms</a>
            <a href="admin-login.html">Admin</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Floating AI assistant ---------- */
function renderAssistant() {
  if (document.getElementById("assistantToggle")) return;

  const toggle = document.createElement("button");
  toggle.id = "assistantToggle";
  toggle.className = "gradient-brand";
  toggle.textContent = "🤖";
  toggle.setAttribute("aria-label", "Toggle AI assistant");
  document.body.appendChild(toggle);

  const panel = document.createElement("div");
  panel.id = "assistantPanel";
  panel.className = "glass-panel hidden";
  panel.innerHTML = `
    <div class="assistant-head gradient-brand">
      <p>ProTech AI Assistant</p>
      <p>👋 Hello! How can I help you today?</p>
    </div>
    <div class="assistant-messages" id="assistantMessages"></div>
    <div class="assistant-actions">
      <a href="builder.html">🌐 Build Website</a>
      <a href="marketplace.html">🧾 Accounting</a>
      <a href="marketplace.html">🏢 ERP</a>
      <a href="search.html?source=jobs">💼 Find Job</a>
      <a href="tools-image.html">🏷️ Generate Logo</a>
      <button class="full gradient-brand" id="assistantFocusInput">💬 Talk with AI</button>
    </div>
    <div class="assistant-input-row">
      <input type="text" id="assistantInput" placeholder="Ask ProTech AI…" />
      <button class="gradient-brand" id="assistantSendBtn">Send</button>
    </div>
  `;
  document.body.appendChild(panel);

  toggle.addEventListener("click", () => {
    panel.classList.toggle("hidden");
    toggle.textContent = panel.classList.contains("hidden") ? "🤖" : "✕";
  });

  const messages = document.getElementById("assistantMessages");
  const input = document.getElementById("assistantInput");

  function send() {
    const text = input.value.trim();
    if (!text) return;
    const userMsg = document.createElement("div");
    userMsg.className = "assistant-msg user";
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    const aiMsg = document.createElement("div");
    aiMsg.className = "assistant-msg ai";
    aiMsg.textContent = `Got it — here's a demo response for "${text}". Connect a real AI model to make this live.`;
    messages.appendChild(aiMsg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }

  document.getElementById("assistantSendBtn").addEventListener("click", send);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") send(); });
  document.getElementById("assistantFocusInput").addEventListener("click", () => input.focus());
}

/* ---------- Stars helper ---------- */
function starsHtml(rating) {
  const full = Math.round(rating);
  let out = "";
  for (let i = 0; i < 5; i++) out += i < full ? "★" : `<span class="empty">★</span>`;
  return `<span class="stars">${out}<span class="val">${rating.toFixed(1)}</span></span>`;
}

/* ---------- Voice search (Web Speech API) ---------- */
function setupVoiceSearch(inputEl, btnEl) {
  if (!inputEl || !btnEl) return;
  btnEl.addEventListener("click", () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      showToast("Voice search isn't supported in this browser.");
      return;
    }
    const recognition = new Recognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    btnEl.classList.add("listening");
    showToast("Listening… speak now");
    recognition.onresult = (event) => { inputEl.value = event.results[0][0].transcript; inputEl.focus(); };
    recognition.onerror = () => btnEl.classList.remove("listening");
    recognition.onend = () => btnEl.classList.remove("listening");
    try { recognition.start(); } catch (e) { btnEl.classList.remove("listening"); }
  });
}

/* ---------- Image search (demo) ---------- */
function setupImageSearch(btnEl) {
  if (!btnEl) return;
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);
  btnEl.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files[0]) {
      showToast("Image search selected (demo) — would run visual search against the catalog.");
    }
  });
}

/* ---------- Bootstrap every page calls this ---------- */
function initCommon(activePage) {
  document.body.setAttribute("data-page", activePage || "");
  renderHeader(activePage);
  renderFooter();
  renderAssistant();
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.hasAttribute("data-no-auto-init")) {
    initCommon(document.body.getAttribute("data-page"));
  }
});
