/* ==========================================================================
   ProTech AI — shared mock/demo data
   Swap these arrays for real API calls when wiring up a backend.
   ========================================================================== */

const SITE = {
  name: "ProTech AI",
  tagline: "Everything Your Business Needs.",
  ownerName: "Mohammad Khurshed Alam",
  ownerTitle: "Engineer",
  supportPhone: "+965 6664 8706",
  supportPhoneRaw: "96566648706",
  supportEmail: "itkhurshed@gmail.com",
};

const NAV_LINKS = [
  { label: "Products", href: "marketplace.html" },
  { label: "Solutions", href: "automation.html" },
  { label: "Industries", href: "marketplace.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "Resources", href: "search.html" },
  { label: "Developers", href: "search.html?source=apis" },
  { label: "Support", href: "search.html?source=knowledge" },
];

const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "AI Search", href: "search.html" },
      { label: "AI Builder", href: "builder.html" },
      { label: "Automation", href: "automation.html" },
      { label: "Marketplace", href: "marketplace.html" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "ERP Systems", href: "marketplace.html" },
      { label: "Accounting", href: "marketplace.html" },
      { label: "E-commerce", href: "marketplace.html" },
      { label: "HR & Payroll", href: "automation.html" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "index.html" },
      { label: "Careers", href: "index.html" },
      { label: "Blog", href: "index.html" },
      { label: "Contact", href: "index.html#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "search.html?source=documents" },
      { label: "Developers", href: "search.html?source=apis" },
      { label: "Partners", href: "index.html" },
      { label: "API", href: "search.html?source=apis" },
    ],
  },
];

const AI_EXAMPLE_PROMPTS = [
  "Build grocery store system",
  "Create accounting software",
  "Find IT jobs in Europe",
  "Generate invoice",
  "Create logo",
  "Design website",
  "Build HR system",
];

const SEARCH_SOURCES = [
  { key: "ai", label: "AI", icon: "✨" },
  { key: "documents", label: "Documents", icon: "📄" },
  { key: "images", label: "Images", icon: "🖼️" },
  { key: "videos", label: "Videos", icon: "🎬" },
  { key: "businesses", label: "Businesses", icon: "🏢" },
  { key: "products", label: "Products", icon: "🛒" },
  { key: "jobs", label: "Jobs", icon: "💼" },
  { key: "knowledge", label: "Knowledge Base", icon: "📚" },
  { key: "code", label: "Code", icon: "💻" },
  { key: "apis", label: "APIs", icon: "🔌" },
];

const BUSINESS_CATEGORIES = [
  { icon: "💻", label: "Website Development" },
  { icon: "📱", label: "Mobile Apps" },
  { icon: "🛒", label: "Ecommerce" },
  { icon: "🏢", label: "ERP" },
  { icon: "⚙️", label: "Automation" },
  { icon: "🧾", label: "Accounting" },
  { icon: "👨‍💼", label: "HR" },
  { icon: "🏥", label: "Hospital" },
  { icon: "⚖️", label: "Law Firm" },
  { icon: "🏨", label: "Hotel" },
  { icon: "🏫", label: "School" },
  { icon: "🍽️", label: "Restaurant" },
  { icon: "🏪", label: "Grocery" },
  { icon: "🚚", label: "Logistics" },
  { icon: "🏗️", label: "Construction" },
  { icon: "📦", label: "Warehouse" },
  { icon: "🖥️", label: "IT Support" },
  { icon: "☁️", label: "Cloud" },
  { icon: "🤖", label: "AI" },
  { icon: "📊", label: "Business Intelligence" },
];

const PREMIUM_RESULTS = [
  { name: "ProTech ERP", rating: 4.9, category: "Business Automation", tags: ["Inventory", "Accounting", "CRM", "Mobile App"], badge: "Free Demo" },
  { name: "GrocerySuite POS", rating: 4.7, category: "Retail & Grocery", tags: ["POS", "Inventory", "Barcode", "WhatsApp Orders"], badge: "Popular" },
  { name: "MediCare Hospital OS", rating: 4.8, category: "Healthcare", tags: ["Patient Records", "Billing", "Appointments"], badge: "New" },
  { name: "LexCounsel Suite", rating: 4.6, category: "Law Firm", tags: ["Case Management", "Billing", "Documents"], badge: "Free Demo" },
  { name: "StaySmart Hotel PMS", rating: 4.7, category: "Hospitality", tags: ["Bookings", "Housekeeping", "Payments"], badge: "Popular" },
  { name: "EduTrack School System", rating: 4.9, category: "Education", tags: ["Attendance", "Grading", "Parent Portal"], badge: "Free Demo" },
];

const MARKETPLACE_ITEMS = [
  { icon: "🌐", name: "Website Templates", desc: "50+ industry-ready templates", price: "from $49", rating: 4.8 },
  { icon: "🏢", name: "ERP Systems", desc: "Full business resource planning", price: "from $299/mo", rating: 4.9 },
  { icon: "🧾", name: "Accounting", desc: "Invoicing, ledgers, tax reports", price: "from $79/mo", rating: 4.7 },
  { icon: "🍽️", name: "Restaurant", desc: "Menu, orders, delivery, POS", price: "from $99/mo", rating: 4.8 },
  { icon: "🏥", name: "Hospital", desc: "Patient & appointment management", price: "from $349/mo", rating: 4.6 },
  { icon: "⚖️", name: "Law Firm", desc: "Case & document management", price: "from $199/mo", rating: 4.7 },
  { icon: "👨‍💼", name: "HR", desc: "Payroll, attendance, onboarding", price: "from $129/mo", rating: 4.8 },
  { icon: "🖥️", name: "POS", desc: "Point-of-sale for any storefront", price: "from $59/mo", rating: 4.9 },
  { icon: "🏨", name: "Hotel", desc: "Bookings & property management", price: "from $199/mo", rating: 4.7 },
  { icon: "🏫", name: "School", desc: "Attendance, grading, parent app", price: "from $149/mo", rating: 4.8 },
  { icon: "📇", name: "CRM", desc: "Leads, pipelines, follow-ups", price: "from $89/mo", rating: 4.7 },
  { icon: "📦", name: "Inventory", desc: "Stock tracking across locations", price: "from $69/mo", rating: 4.6 },
];

const DASHBOARD_ACTIONS = [
  { icon: "🌐", label: "Build Website", href: "builder.html" },
  { icon: "🏢", label: "Build ERP", href: "marketplace.html" },
  { icon: "🧾", label: "Create Invoice", href: "tools-image.html" },
  { icon: "👥", label: "Manage Customers", href: "dashboard.html" },
  { icon: "📦", label: "Inventory", href: "dashboard.html" },
  { icon: "👨‍💼", label: "Employees", href: "dashboard.html" },
  { icon: "📁", label: "Projects", href: "dashboard.html" },
  { icon: "🤖", label: "AI Automation", href: "automation.html" },
  { icon: "📇", label: "CRM", href: "marketplace.html" },
  { icon: "💰", label: "Accounting", href: "marketplace.html" },
  { icon: "📊", label: "Reports", href: "dashboard.html" },
  { icon: "🎫", label: "Support Tickets", href: "dashboard.html" },
];

const DASHBOARD_STATS = [
  { icon: "💵", label: "Today's Sales", value: "$4,285", trend: "+12.4%" },
  { icon: "👀", label: "Today's Visitors", value: "1,942", trend: "+6.1%" },
  { icon: "🧾", label: "Orders", value: "128", trend: "+3.9%" },
  { icon: "📈", label: "Revenue", value: "$58,940", trend: "+8.2%" },
  { icon: "👥", label: "Customers", value: "3,204", trend: "+2.4%" },
  { icon: "📦", label: "Inventory", value: "982 SKUs", trend: "-1.1%" },
  { icon: "👨‍💼", label: "Employees", value: "37", trend: "+0%" },
  { icon: "📁", label: "Projects", value: "14 active", trend: "+2" },
  { icon: "🎫", label: "Support Tickets", value: "9 open", trend: "-4" },
  { icon: "🧾", label: "Invoices", value: "56 pending", trend: "-6" },
  { icon: "📊", label: "Analytics", value: "View report", trend: "" },
  { icon: "✨", label: "AI Suggestions", value: "5 new", trend: "" },
];

const AUTOMATION_LIST = [
  { icon: "💬", name: "WhatsApp Automation", desc: "Auto-reply and order updates via WhatsApp Business.", defaultOn: true },
  { icon: "📧", name: "Email Automation", desc: "Automated receipts, follow-ups, and campaigns.", defaultOn: true },
  { icon: "🧾", name: "Invoice Automation", desc: "Auto-generate and send invoices on order completion.", defaultOn: true },
  { icon: "💰", name: "Payroll", desc: "Scheduled salary runs and payslip generation.", defaultOn: false },
  { icon: "📦", name: "Stock Alerts", desc: "Low-stock and reorder notifications.", defaultOn: true },
  { icon: "📊", name: "AI Reports", desc: "Weekly AI-generated business performance summaries.", defaultOn: false },
  { icon: "📱", name: "SMS Notifications", desc: "Order and appointment reminders via SMS.", defaultOn: false },
];

const IMAGE_TOOLS = [
  { icon: "🏷️", label: "Create Logo" },
  { icon: "🖼️", label: "Create Banner" },
  { icon: "📰", label: "Create Brochure" },
  { icon: "📄", label: "Create Flyer" },
  { icon: "🪪", label: "Business Card" },
  { icon: "📱", label: "Social Media Post" },
];

const VIDEO_TOOLS = [
  { icon: "📢", label: "Create Advertisement" },
  { icon: "🛍️", label: "Product Video" },
  { icon: "🍽️", label: "Restaurant Video" },
  { icon: "🏢", label: "Company Intro" },
  { icon: "▶️", label: "YouTube Video" },
  { icon: "📘", label: "Facebook Ads" },
];

const BUILDER_QUESTIONS = [
  { key: "name", label: "Restaurant Name?", placeholder: "e.g. Al Salam Grill" },
  { key: "logo", label: "Logo?", placeholder: "Describe a style (upload later)" },
  { key: "colors", label: "Colors?", placeholder: "e.g. red, gold, black" },
  { key: "menu", label: "Menu?", placeholder: "e.g. Grills, appetizers, drinks" },
  { key: "payment", label: "Online Payment?", placeholder: "e.g. Visa, KNET, Cash on delivery" },
  { key: "delivery", label: "Delivery?", placeholder: "e.g. In-house drivers, Talabat" },
  { key: "whatsapp", label: "WhatsApp?", placeholder: "Business WhatsApp number" },
  { key: "location", label: "Location?", placeholder: "e.g. Salmiya, Kuwait" },
  { key: "language", label: "Language?", placeholder: "e.g. English & Arabic" },
];

const PRICING_TIERS = [
  { name: "Starter", price: "$0", period: "/mo", tagline: "Try the platform, no card required.", features: ["1 AI-built website", "Basic search & automation", "Community support"], cta: "Start Free", highlighted: false },
  { name: "Growth", price: "$79", period: "/mo", tagline: "For growing businesses ready to automate.", features: ["Unlimited AI builds", "Full marketplace access", "WhatsApp & email automation", "Priority support"], cta: "Start Free Trial", highlighted: true },
  { name: "Enterprise", price: "Custom", period: "", tagline: "Custom ERP, integrations, and SLAs.", features: ["Dedicated account manager", "Custom integrations & API access", "Advanced analytics", "SLA & onboarding"], cta: "Contact Sales", highlighted: false },
];

const COLOR_WORD_MAP = {
  red: "#dc2626", gold: "#d97706", black: "#111827", blue: "#2563eb",
  green: "#16a34a", purple: "#7c3aed", white: "#f3f4f6", orange: "#ea580c", pink: "#db2777",
};

/* ---------- Admin demo credentials (client-side demo only — not real security) ---------- */
const ADMIN_CREDENTIALS = { username: "admin", password: "ProTech@2026" };

/* ---------- Seed admin data ---------- */
const ADMIN_USERS = [
  { name: "Mohammad Khurshed Alam", email: "itkhurshed@gmail.com", role: "Owner", status: "active" },
  { name: "Sarah Ahmed", email: "sarah@example.com", role: "Customer", status: "active" },
  { name: "GrocerySuite Kuwait", email: "grocery@example.com", role: "Business", status: "pending" },
  { name: "Test Account", email: "test@example.com", role: "Customer", status: "blocked" },
];
