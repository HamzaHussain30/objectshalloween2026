// Content for /objects — copied from https://store.objects.ws/ (images live in /public/objects).
export const OBJ = {
  site: "https://store.objects.ws",
  email: "contact@objects.ws",
  phone: "+92 324 2122924",
  whatsapp: "https://wa.me/923242122924?text=Hi%20Objects%2C%20I%20have%20a%20question%20about%20your%20Shopify%20apps.",
  calendly: "https://calendly.com/wpexperts",
};

export type App = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  price: { free?: boolean; label: string; amount: number; unit: string }; // list price before the sale
  heroExt: string;
};

export const APPS: App[] = [
  { slug: "smart-variant-table", name: "Smart Variant Table", category: "Product variants", price: { free: true, label: "Pro from", amount: 19, unit: "" }, heroExt: "jpg",
    blurb: "Meet the best MultiVariant selector app in the Shopify ecosystem. It's the fastest app yet for variant tables, product bundles, catalogs, and volume discounts, all designed to drive B2B and bulk orders." },
  { slug: "offer-your-price", name: "Offer Your Price", category: "Pricing optimization · Pricing quotes", price: { label: "From", amount: 3.99, unit: "/mo" }, heroExt: "jpg",
    blurb: "The best Shopify app for pay what you want pricing: let customers name their price while your limits protect the margin." },
  { slug: "popup-disclaimer", name: "Popup & Disclaimer", category: "Pop-ups", price: { label: "From", amount: 2.99, unit: "/mo" }, heroExt: "jpg",
    blurb: "The best Shopify app for sales popups, age verification, newsletter signups and maintenance banners that convert visitors." },
  { slug: "donate-now", name: "Donate Now", category: "Donations · Pop-ups", price: { label: "From", amount: 3.99, unit: "/mo" }, heroExt: "png",
    blurb: "The best Shopify donation app for charity campaigns, checkout round-ups, and a donor wall. Donate Now works online and at Shopify POS." },
  { slug: "spin-wheel", name: "Spin Wheel", category: "Pop-ups · Discounts", price: { label: "From", amount: 3.99, unit: "/mo" }, heroExt: "png",
    blurb: "The best Shopify app for spin the wheel gamification: spin-to-win popups that collect emails, cut bounce rates and boost sales." },
  { slug: "fontly", name: "Fontly", category: "Design elements · Content", price: { label: "From", amount: 2.49, unit: "/mo" }, heroExt: "webp",
    blurb: "The best Shopify app for changing fonts: apply 1800+ Google Fonts or upload your own custom fonts anywhere, no code needed." },
  { slug: "mycred-loyalty-points", name: "myCred Loyalty Points", category: "Loyalty and rewards", price: { free: true, label: "Pro from", amount: 14.99, unit: "" }, heroExt: "png",
    blurb: "The best Shopify app for loyalty points and rewards: reward purchases, referrals, sign-ups and reviews to drive repeat sales." },
  { slug: "smart-product-wishlist", name: "Smart Product Wishlist", category: "Wishlists", price: { free: true, label: "Pro from", amount: 1.99, unit: "" }, heroExt: "webp",
    blurb: "The best Shopify app for wishlists: let customers save the products they love and track demand with real-time analytics." },
  { slug: "b2b-request-quote", name: "B2B Request Quote", category: "Pricing quotes · Cart customization", price: { label: "From", amount: 7.99, unit: "/mo" }, heroExt: "webp",
    blurb: "The best Shopify app for B2B quotes: hide prices from retail shoppers and let wholesale buyers request quotes with smart auto-responses." },
  { slug: "zyga-bundles", name: "Zyga Bundles", category: "Product bundles · Discounts", price: { free: true, label: "Pro from", amount: 12.99, unit: "" }, heroExt: "webp",
    blurb: "Zyga Bundles: the #1 bundle app for Shopify, built to boost your store's sales and orders. Create fixed bundles, volume discounts, and frequently bought together offers that turn single-item carts into multi-item orders." },
];

export const FEATURED = ["zyga-bundles", "mycred-loyalty-points", "spin-wheel"];
export const appUrl = (slug: string) => `${OBJ.site}/apps/${slug}`;
export const logoSrc = (slug: string) => `/objects/apps/${slug}-logo.webp`;
export const heroSrc = (a: App) => `/objects/apps/${a.slug}-hero.${a.heroExt}`;

// [file, name, needsDarkChip]
export const BRANDS: [string, string, boolean?][] = [
  ["pink-lily.jpg", "Pink Lily"], ["rmit-store.avif", "RMIT Store"], ["silverts.avif", "Silverts"], ["carraig-donn.webp", "Carraig Donn"],
  ["sp.svg", "SP", true], ["alex-jones-store.avif", "The Alex Jones Store"], ["vanity.svg", "Vanity"], ["eesg.avif", "EESG"],
  ["gold-us-store.png", "Gold US Store"], ["baf.svg", "BAF", true],
];

export const USE_CASES = [
  { icon: "TrendingUp", title: "Sell More per Order", body: "Raise average order value in Shopify with bulk variant tables, bundles, volume discounts and name-your-price offers.", apps: ["smart-variant-table", "offer-your-price"] },
  { icon: "Magnet", title: "Capture More Visitors", body: "Turn Shopify traffic you already paid for into emails, wishlists and orders before it bounces.", apps: ["spin-wheel", "popup-disclaimer", "smart-product-wishlist"] },
  { icon: "Heart", title: "Bring Customers Back", body: "Retention beats acquisition. Reward repeat purchases, referrals and reviews on your Shopify store.", apps: ["mycred-loyalty-points", "donate-now"] },
  { icon: "Handshake", title: "Win B2B & Wholesale", body: "Serve trade buyers properly with Shopify quotes, hidden pricing, bulk ordering and on-brand typography.", apps: ["b2b-request-quote", "fontly"] },
] as const;

export const WHY = [
  ["Built for Shopify", "Theme app extensions, Online Store 2.0 and the Theme Editor, our apps install like a native part of your store, not a script tag bolted on top."],
  ["Live in Minutes", "No developer, no code, no migration. Install, configure in the editor you already know, and watch the first conversions land the same day."],
  ["Priced for Real Stores", "Free plans that do real work and paid plans starting at $1.99. Prove an app earns its keep before it costs you anything."],
  ["Support That Answers", "Priority email, chat and WhatsApp support from the team that wrote the code, not a queue, and not a bot reading from a script."],
] as const;

export const STEPS = [
  ["Pick Your Shopify App", "Start where your store leaks revenue: small carts, bouncing traffic, one-time buyers or wholesale enquiries stuck in email. Three of our apps are free forever and the rest have free trials, so picking wrong costs you nothing."],
  ["Install From the Shopify App Store", "The same one-click install flow as every app you already run. We use Shopify's theme app extensions, so nothing touches your theme code and uninstalling leaves no leftovers behind."],
  ["Configure in Your Theme Editor", "Style everything inside the Shopify Theme Editor with a live preview of your own storefront, not a mockup. Publish when it looks right and watch the first conversions land the same day."],
] as const;

export const FRICTION = [
  ["A visitor reaches for the close button", "An exit-intent spin wheel trades a discount for their email"],
  ["A bulk buyer faces twenty product pages", "One variant table takes the whole order on a single page"],
  ["A wholesale buyer emails asking for prices", "A quote form takes the order while you sleep"],
  ["A shopper loves the product but not the price", "A make-an-offer button starts the conversation instead of ending it"],
  ["A happy customer buys once and forgets you", "Loyalty points build a balance worth coming back for"],
] as const;

// [name, country flag, country, usage, text]
export const REVIEWS: [string, string, string, string][] = [
  ["SKracingPARTS", "Germany", "About 23 hours using the app", "Absolutely Outstanding! The team behind Smart Variant Table - B2B Order delivers an exceptional product paired with truly first-class support. We were looking for a way to present multiple product variants in a clean, structured and user-friendly table - and this app does exactly that, and more."],
  ["Floristería Flores502", "Guatemala", "3 months using the app", "It's an excellent app, and their customer service is truly outstanding. They were always attentive and supported me throughout the entire process. I needed a customization, and they not only stayed in constant communication but also coordinated with the developers of another one of my apps to ensure compatibility. I 100% recommend this app and the amazing team behind it."],
  ["Dirty Army Foundation", "United States", "2 days using the app", "Excellent app and custmer service. ive tried many other donation apps and this ones the best by far. Csutomer sercvies was responsive and solved some customization quickly! A+"],
  ["Ground Up Cookery School", "United Kingdom", "16 days using the app", "Incredibly helpful support team. I couldn't work out quite how to do what I wanted to do, as it was a little bit different. However, the support team were quick, helpful and managed to sort it for me no problem. Thank you."],
  ["Holler County", "United States", "3 days using the app", "The app did exactly what I was looking for. Had a few bugs, so I messaged the devs and they fixed it in no time. Highly recommend working with these guys."],
  ["About Sleep", "Australia", "3 days using the app", "Great app & great support. Went above and beyond helping me setup a custom piece to ensure it works perfectly!"],
  ["Ma boutique", "France", "About 11 hours using the app", "Zyga is a top-tier app with excellent performance. It runs fast, integrates smoothly, and has powerful bundle features that are easy to set up and customize. The support team is outstanding, quick responses, clear communication, and real solutions. Highly recommended for any Shopify store."],
  ["Implant Grade", "Poland", "Almost 2 years using the app", "Using this APP more than 1.5 year. All what promissed works perfectly."],
  ["Jewels by Eterna", "Bulgaria", "29 days using the app", "Very helpful customer support. Very quick response, kind attitude and constant updates on the matter!"],
];

export const FAQ = [
  ["Which Objects app should I install first?", "Start with the one that matches your biggest leak. If traffic bounces without buying, use Spin Wheel or Popup & Disclaimer. If orders are too small, use Smart Variant Table. If customers buy once and vanish, use myCred Loyalty Points. If wholesale buyers email you for pricing, use B2B Request Quote. If you're unsure, message us and we'll tell you which one fits, even if the answer is none of them."],
  ["Are these apps really free, or is it a limited trial?", "Three are genuinely free forever: Smart Product Wishlist, Smart Variant Table and myCred Loyalty Points. Those free plans run a real program, not a preview. The other six start with a free trial between 3 and 14 days."],
  ["Will these apps slow my storefront down?", "Our apps use Shopify's theme app extensions and load only what a given page needs, rather than injecting a global script on every route. Core Web Vitals affect both your conversion rate and your search ranking, so app weight is something we treat as a feature, not an afterthought."],
  ["Do I need a developer to install them?", "No. Every app installs in one click from the Shopify App Store and is configured in the Shopify Theme Editor with a live preview. You never edit theme code, and nothing we add is destructive."],
  ["Will they work with my theme?", "Yes. Our apps are built against Shopify's Online Store 2.0 standards and are used on Dawn, Studio, Sense, Refresh and a long tail of paid and custom themes."],
  ["How am I billed, and can I cancel?", "Billing runs through Shopify and appears on your regular Shopify invoice. Most apps offer annual plans saving 3 to 17%. You can downgrade or uninstall any time and Shopify prorates it automatically."],
  ["What happens to my data if I uninstall?", "Your Shopify data stays yours and stays in Shopify. Uninstalling removes the app's storefront presence; ask us if you need your app-specific data exported first."],
  ["Can you build something custom for my store?", "Often, yes. Objects is a custom software company, the Shopify apps are one part of what we do. If you need a customization or something built from scratch, book a call and we'll tell you honestly whether it's worth doing."],
] as const;
