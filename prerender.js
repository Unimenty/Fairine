import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error(`Base index.html not found at ${BASE_HTML_PATH}. Please run "npm run build" first.`);
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf-8');

// Global navigation header
const headerHtml = `
<header style="background:#fffdf9; border-bottom:1px solid #efe8df; padding:20px 24px; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif; transition: background 0.3s;">
  <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
    <a href="/" style="text-decoration:none; font-weight:900; color:#1c1917; font-size:22px; display:flex; align-items:center; gap:10px; letter-spacing:-0.03em;">
      <img src="/assets/logo-clean.png" alt="Fairine Enterprise Logo" style="height:38px; width:auto; border-radius:8px;" />
      <span>Fairine Enterprise</span>
    </a>
    <nav style="display:flex; gap:24px; align-items:center;">
      <a href="/shop" style="text-decoration:none; color:#57534e; font-weight:800; font-size:13px; text-transform:uppercase; letter-spacing:0.1em; transition:color 0.2s;">Shop Detergents</a>
      <a href="/about" style="text-decoration:none; color:#57534e; font-weight:800; font-size:13px; text-transform:uppercase; letter-spacing:0.1em; transition:color 0.2s;">Our Story</a>
      <a href="/contact" style="text-decoration:none; color:#57534e; font-weight:800; font-size:13px; text-transform:uppercase; letter-spacing:0.1em; transition:color 0.2s;">Contact Us</a>
      <a href="https://wa.me/233504048528" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:12px; text-transform:uppercase; letter-spacing:0.05em; padding:10px 18px; border-radius:99px; display:inline-flex; align-items:center; gap:6px; box-shadow:0 4px 12px rgba(16,185,129,0.2);">
        WhatsApp Order
      </a>
    </nav>
  </div>
</header>
`;

// Global navigation footer
const footerHtml = `
<footer style="background:#f5f0e6; border-top:1px solid #efe8df; padding:64px 24px; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif; color:#57534e; margin-top:80px;">
  <div style="max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:48px;">
    <div>
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
        <img src="/favicon.svg" alt="Fairine Logo" style="height:32px; width:auto;" />
        <span style="font-weight:900; font-size:20px; color:#1c1917;">Fairine Enterprise</span>
      </div>
      <p style="font-size:14px; line-height:1.7; color:#78716c; margin-bottom:20px;">
        Direct manufacturers of premium, professional-grade liquid soaps, floor cleaners, fabric softeners, and personal care solutions in Accra, Ghana. Formulated for power, crafted with love.
      </p>
      <div style="display:inline-flex; align-items:center; background:#d1fae5; color:#065f46; padding:8px 16px; border-radius:12px; font-weight:800; font-size:12px; letter-spacing:0.05em;">
        ✓ FDA GHANA APPROVED
      </div>
    </div>
    
    <div>
      <h3 style="color:#1c1917; font-size:15px; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:20px; font-weight:800;">Contact & Sales</h3>
      <p style="font-size:14px; margin-bottom:12px; display:flex; align-items:start; gap:8px;">
        <span>📍</span> <span>Spintex Road, Accra, Greater Accra, Ghana</span>
      </p>
      <p style="font-size:14px; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
        <span>📞</span> <span>Order Hotline: <a href="tel:+233504048528" style="color:#c2410c; font-weight:bold; text-decoration:none;">+233 50 404 8528</a> / <a href="tel:+233546865035" style="color:#c2410c; font-weight:bold; text-decoration:none;">+233 54 686 5035</a></span>
      </p>
      <p style="font-size:14px; display:flex; align-items:center; gap:8px;">
        <span>💬</span> <span>WhatsApp Chat: <a href="https://wa.me/233504048528" style="color:#059669; font-weight:bold; text-decoration:none;" target="_blank" rel="noopener noreferrer">Start Order Chat</a></span>
      </p>
    </div>

    <div>
      <h3 style="color:#1c1917; font-size:15px; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:20px; font-weight:800;">Follow Our Journey</h3>
      <p style="font-size:14px; line-height:1.7; color:#78716c; margin-bottom:16px;">
        See what happens behind the scenes in our Accra workshop. We share tips, recipes, and updates daily!
      </p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="https://www.instagram.com/fairineenterprise" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; background:#ffffff; border:1px solid #e7e5e4; color:#1c1917; text-decoration:none; padding:8px 16px; border-radius:12px; font-size:13px; font-weight:700; transition:all 0.2s;">
          Instagram
        </a>
        <a href="https://www.facebook.com/fairineenterprise" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; background:#ffffff; border:1px solid #e7e5e4; color:#1c1917; text-decoration:none; padding:8px 16px; border-radius:12px; font-size:13px; font-weight:700; transition:all 0.2s;">
          Facebook
        </a>
        <a href="https://fdaghana.gov.gh" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; background:#ffffff; border:1px solid #e7e5e4; color:#1c1917; text-decoration:none; padding:8px 16px; border-radius:12px; font-size:13px; font-weight:700; transition:all 0.2s;">
          FDA Ghana Website
        </a>
      </div>
    </div>
  </div>
  
  <div style="max-width:1200px; margin:0 auto; padding-top:32px; border-top:1px solid #efe8df; margin-top:48px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; font-size:12px; color:#a8a29e;">
    <p>© 2026 Fairine Enterprise. All rights reserved. Registered under registration number in Accra, Ghana.</p>
    <p style="font-style:italic;">Made with ❤️ for better, family-safe, sustainable living.</p>
  </div>
</footer>
`;

// Shimmer CSS styling to inject in the head for premium client loading performance
const skeletonStyles = `
<style id="seo-prerender-skeleton-styles">
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .skeleton-bg {
    background: linear-gradient(90deg, #f5f0e6 25%, #efe8df 50%, #f5f0e6 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
    border-radius: 8px;
  }
</style>
`;

const routes = [
  {
    path: '',
    title: 'Fairine Enterprise | Best Liquid Soap & Floor Cleaner in Ghana',
    description: 'Buy premium, family-safe liquid soap, floor cleaners, and fabric softeners in Accra. FDA-approved cleaning products handcrafted in Ghana. Order via WhatsApp with fast delivery.',
    keywords: 'buy soap Ghana, premium liquid soap Accra, floor cleaner price Accra, sanitary pads Ghana, best dishwasher soap Accra, laundry detergent suppliers Tema, bulk cleaning supplies Spintex Road, Catherine Komey',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <!-- Hero Section -->
        <section style="text-align:center; padding:64px 20px; background:radial-gradient(circle at top, #fffdf9 0%, #faf6ee 100%); border-radius:40px; margin-bottom:48px; border:1px solid #efe8df;">
          <span style="background:#f5e8d3; color:#854d0e; padding:6px 16px; border-radius:99px; font-size:11px; font-weight:800; letter-spacing:0.15em; text-transform:uppercase;">HANDCRAFTED IN ACCRA</span>
          <h1 style="font-size:48px; font-weight:900; color:#1c1917; margin:24px 0 16px 0; line-height:1.1; letter-spacing:-0.03em;">
            Premium Handcrafted Liquid Soaps & Detergents
          </h1>
          <p style="font-size:20px; color:#57534e; max-w:750px; margin:0 auto 32px auto; line-height:1.6; font-weight:500;">
            We formulate the most effective liquid soaps and cleaning detergents in Ghana. Designed for power, family-safe, pet-safe, and approved by the FDA. Experience absolute sparkle and serenity in your home.
          </p>
          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <a href="/shop" style="text-decoration:none; background:#1c1917; color:#ffffff; font-weight:800; padding:16px 36px; border-radius:16px; font-size:16px; box-shadow:0 10px 25px rgba(28,25,23,0.15);">Explore Shop Catalog</a>
            <a href="https://wa.me/233504048528" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; padding:16px 36px; border-radius:16px; font-size:16px; box-shadow:0 10px 25px rgba(16,185,129,0.15); display:inline-flex; align-items:center; gap:8px;">Order on WhatsApp</a>
          </div>
        </section>

        <!-- Structured Bento Info Grid for Low Word Count -->
        <section style="margin-bottom:64px;">
          <h2 style="font-size:28px; font-weight:900; color:#1c1917; text-align:center; margin-bottom:32px;">Why Ghana Chooses Fairine Enterprise</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px;">
            <div style="background:#ffffff; border:1px solid #efe8df; padding:32px; border-radius:24px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
              <div style="font-size:32px; margin-bottom:16px;">🏆</div>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin-bottom:8px;">Powerful Cleaning Formulas</h3>
              <p style="font-size:14px; line-height:1.6; color:#78716c;">
                Our products are custom-formulated in Accra to stand up to tough stains, dirt, and grease. From high-foaming liquid soaps to tile-polishing floor cleaners, every drop offers max performance.
              </p>
            </div>
            <div style="background:#ffffff; border:1px solid #efe8df; padding:32px; border-radius:24px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
              <div style="font-size:32px; margin-bottom:16px;">🛡️</div>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin-bottom:8px;">FDA Approved & Safe</h3>
              <p style="font-size:14px; line-height:1.6; color:#78716c;">
                Your family's health is our top priority. We formulate with carefully sourced, skin-friendly and hypoallergenic raw materials, completely safe for children, pets, and sensitive hands.
              </p>
            </div>
            <div style="background:#ffffff; border:1px solid #efe8df; padding:32px; border-radius:24px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
              <div style="font-size:32px; margin-bottom:16px;">🚚</div>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin-bottom:8px;">Fast Delivery in Accra & Tema</h3>
              <p style="font-size:14px; line-height:1.6; color:#78716c;">
                Save time and fuel. We offer reliable doorstep delivery across East Legon, Spintex Road, Airport Residential, Tema, Adenta, Dansoman, and other locations in Greater Accra.
              </p>
            </div>
          </div>
        </section>

        <!-- Featured Products List to solve Orphan Pages & indexing -->
        <section style="margin-bottom:64px;">
          <h2 style="font-size:28px; font-weight:900; color:#1c1917; text-align:center; margin-bottom:8px;">Our Premium Catalog</h2>
          <p style="font-size:16px; color:#78716c; text-align:center; margin-bottom:32px;">Click a product to view specifications and order details</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:24px;">
            <div style="background:#ffffff; border:1px solid #efe8df; border-radius:20px; overflow:hidden; border:1px solid #efe8df;">
              <div style="height:200px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:16px;">
                <img src="/assets/liquid-soap-1l.webp" alt="Fairine Liquid Soap" style="max-height:100%; max-width:100%; object-contain;" />
              </div>
              <div style="padding:20px;">
                <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px;">HOME CARE</span>
                <h3 style="font-size:16px; font-weight:800; color:#1c1917; margin:8px 0;"><a href="/product/liquid-soap" style="text-decoration:none; color:inherit;">Fairine Liquid Soap</a></h3>
                <p style="font-size:13px; color:#78716c; line-height:1.5; margin-bottom:16px;">Multi-purpose high-foaming liquid soap with premium lemon fragrance. Perfect for dishes, hand washing, and kitchen cleaning.</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-weight:900; color:#1c1917; font-size:16px;">From 8.00 GHS</span>
                  <a href="/product/liquid-soap" style="font-size:12px; font-weight:700; color:#c2410c; text-decoration:none;">View Sizes →</a>
                </div>
              </div>
            </div>

            <div style="background:#ffffff; border:1px solid #efe8df; border-radius:20px; overflow:hidden; border:1px solid #efe8df;">
              <div style="height:200px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:16px;">
                <img src="/assets/floor-cleaner-1l.webp" alt="Fairine Floor Cleaner" style="max-height:100%; max-width:100%; object-contain;" />
              </div>
              <div style="padding:20px;">
                <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px;">HOME CARE</span>
                <h3 style="font-size:16px; font-weight:800; color:#1c1917; margin:8px 0;"><a href="/product/floor-cleaner" style="text-decoration:none; color:inherit;">Fairine Floor Cleaner</a></h3>
                <p style="font-size:13px; color:#78716c; line-height:1.5; margin-bottom:16px;">Powerful antibacterial stain remover that shines tile, cement, and wood floors. Leaves a long-lasting forest fragrance.</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-weight:900; color:#1c1917; font-size:16px;">From 15.00 GHS</span>
                  <a href="/product/floor-cleaner" style="font-size:12px; font-weight:700; color:#c2410c; text-decoration:none;">View Sizes →</a>
                </div>
              </div>
            </div>

            <div style="background:#ffffff; border:1px solid #efe8df; border-radius:20px; overflow:hidden; border:1px solid #efe8df;">
              <div style="height:200px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:16px;">
                <img src="/assets/afterwash-500ml.webp" alt="Fairine Fabric Softener" style="max-height:100%; max-width:100%; object-contain;" />
              </div>
              <div style="padding:20px;">
                <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px;">FABRIC CARE</span>
                <h3 style="font-size:16px; font-weight:800; color:#1c1917; margin:8px 0;"><a href="/product/fabric-softener" style="text-decoration:none; color:inherit;">Fairine Fabric Softener</a></h3>
                <p style="font-size:13px; color:#78716c; line-height:1.5; margin-bottom:16px;">Premium laundry companion afterwash. Softens fibers, reduces static cling, and infuses clothes with active freshness.</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-weight:900; color:#1c1917; font-size:16px;">From 14.00 GHS</span>
                  <a href="/product/fabric-softener" style="font-size:12px; font-weight:700; color:#c2410c; text-decoration:none;">View Sizes →</a>
                </div>
              </div>
            </div>

            <div style="background:#ffffff; border:1px solid #efe8df; border-radius:20px; overflow:hidden; border:1px solid #efe8df;">
              <div style="height:200px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:16px;">
                <img src="/assets/flo-360.webp" alt="Flo 360 Sanitary Pad" style="max-height:100%; max-width:100%; object-contain;" />
              </div>
              <div style="padding:20px;">
                <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px;">SANITARY CARE</span>
                <h3 style="font-size:16px; font-weight:800; color:#1c1917; margin:8px 0;"><a href="/product/flo-360-sanitary-pad" style="text-decoration:none; color:inherit;">Flo 360 Sanitary Pad</a></h3>
                <p style="font-size:13px; color:#78716c; line-height:1.5; margin-bottom:16px;">Experience 360° leakproof protection, ultra-thin dry layer, hypoallergenic and highly breathable for active periods.</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-weight:900; color:#1c1917; font-size:16px;">25.00 GHS</span>
                  <a href="/product/flo-360-sanitary-pad" style="font-size:12px; font-weight:700; color:#c2410c; text-decoration:none;">View Details →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'about',
    title: 'Our Story & Catherine Komey | Fairine™ Enterprise Ghana',
    description: 'Meet Catherine Komey, founder and chief artisan behind Fairine™. Learn about our dedication to formulating local, sustainable, and family-safe cleaning soaps and detergents in Accra, Ghana.',
    keywords: 'about Fairine, Catherine Komey, artisan soap Ghana, sustainable detergents Accra, Ghanaian soap factory, local manufacturing Ghana',
    html: `
      ${headerHtml}
      <main style="max-width:800px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; line-height:1.8; color:#44403c;">
        <span style="background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase;">ESTABLISHED 2021</span>
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin:16px 0 24px 0; line-height:1.2; letter-spacing:-0.02em;">Crafting Care for Your Home in Ghana</h1>
        
        <p style="font-size:18px; font-weight:500; color:#57534e; margin-bottom:24px;">
          Fairine Enterprise wasn’t built in a cold corporate boardroom. It was born on a warm kitchen counter in Accra, fueled by a simple dream: making the products we use to clean our homes as safe and pleasant as the skincare we use on our bodies.
        </p>

        <h2 style="font-size:24px; font-weight:800; color:#1c1917; margin-top:40px; margin-bottom:16px;">How the Journey Started</h2>
        <p style="margin-bottom:20px;">
          Our founder, Catherine Komey, noticed that standard commercial cleaning detergents were often too harsh on hands, left artificial chemical odors, and contained ingredients that raised safety questions. Armed with passion and a background in formulation science, she spent months experimenting with skin-friendly raw materials, natural surfactant blends, and soothing therapeutic fragrances.
        </p>
        <p style="margin-bottom:20px;">
          What began as small, hand-labeled bottles shared with relatives and neighbors in Spintex instantly became a sensation. People loved how tough the liquid soaps were on cooking grease, while leaving hands hydrated and kitchens smelling of fresh lemons and local herbs.
        </p>

        <h2 style="font-size:24px; font-weight:800; color:#1c1917; margin-top:40px; margin-bottom:16px;">Our Five Core Pillars</h2>
        <ul style="padding-left:20px; margin-bottom:24px; space-y:8px;">
          <li><strong>Handcrafted with Passion:</strong> Every batch is formulated under rigid manual supervision to guarantee artisan excellence.</li>
          <li><strong>FDA Approved Quality:</strong> We adhere stringently to Ghanaian standards, and every detergent is fully certified by the Food and Drugs Authority.</li>
          <li><strong>Family & Pet Safe:</strong> Hypoallergenic formulas that don't emit toxic vapours or irritate sensitive paws and child skin.</li>
          <li><strong>Eco-Friendly Priority:</strong> We prioritize bio-degradable surfactants and supply in bulk sizes (4L/5L) to minimize plastic container waste.</li>
          <li><strong>Empowering Local Growth:</strong> Proudly manufactured in Ghana, sourcing ingredients locally to boost Accra's small manufacturing economy.</li>
        </ul>

        <h2 style="font-size:24px; font-weight:800; color:#1c1917; margin-top:40px; margin-bottom:16px;">Meet Catherine Komey</h2>
        <p style="margin-bottom:20px; font-style:italic;">
          "I believe a clean home is the foundation of a healthy life. Every single bottle of liquid soap, fabric softener, and floor cleaner we manufacture at Fairine is formulated as if it were for my own child. We take absolute pride in our craft."
        </p>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'contact',
    title: 'Contact Us & Wholesale Bulk Orders | Fairine™ Accra',
    description: 'Get in touch with Fairine Enterprise in Accra, Ghana. Submit a custom inquiry for bulk cleaning supplies, distributor packages, or request delivery coordinates on Spintex Road.',
    keywords: 'contact Fairine, order liquid soap Accra, Fairine phone number, wholesale cleaning products Ghana, bulk detergents Spintex',
    html: `
      ${headerHtml}
      <main style="max-width:800px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:16px; text-align:center; letter-spacing:-0.02em;">Contact Fairine Enterprise</h1>
        <p style="font-size:18px; text-align:center; color:#57534e; margin-bottom:48px; max-width:600px; margin-left:auto; margin-right:auto;">
          Whether you want to place a quick residential order, request wholesale prices for your office, or leave us helpful feedback, our friendly team is here to assist.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px; margin-bottom:48px;">
          <div style="background:#fffcf7; border:1px solid #efe8df; padding:32px; border-radius:24px; text-align:center;">
            <div style="font-size:32px; margin-bottom:12px;">💬</div>
            <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin-bottom:8px;">Instant WhatsApp Order</h3>
            <p style="font-size:14px; color:#78716c; margin-bottom:20px;">The fastest method to arrange instant home or office delivery in Accra.</p>
            <a href="https://wa.me/233504048528" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; padding:12px 24px; border-radius:12px; font-size:14px; display:inline-block;">Chat +233 50 404 8528</a>
          </div>

          <div style="background:#fffcf7; border:1px solid #efe8df; padding:32px; border-radius:24px; text-align:center;">
            <div style="font-size:32px; margin-bottom:12px;">📞</div>
            <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin-bottom:8px;">Call Our Warehouse</h3>
            <p style="font-size:14px; color:#78716c; margin-bottom:20px;">Discuss customized bulk supplies, hotel contracts, or retail distributions.</p>
            <a href="tel:+233546865035" style="text-decoration:none; background:#1c1917; color:#ffffff; font-weight:800; padding:12px 24px; border-radius:12px; font-size:14px; display:inline-block;">Call +233 54 686 5035</a>
          </div>
        </div>

        <div style="background:#ffffff; border:1px solid #efe8df; padding:40px; border-radius:32px; box-shadow:0 4px 20px rgba(0,0,0,0.02);">
          <h2 style="font-size:22px; font-weight:800; color:#1c1917; margin-bottom:24px;">Our Accra Production Coordinates</h2>
          <p style="font-size:15px; line-height:1.7; margin-bottom:16px;">
            <strong>📍 Artisan Workshop & Warehouse:</strong> Spintex Road, Accra, Greater Accra Region, Ghana.
          </p>
          <p style="font-size:15px; line-height:1.7; margin-bottom:16px;">
            <strong>⏰ Working Schedule:</strong> Monday – Saturday: 9:00 AM – 6:00 PM. Closed on Sundays.
          </p>
          <p style="font-size:15px; line-height:1.7; margin-bottom:24px;">
            <strong>📧 Direct Email Contact:</strong> <a href="mailto:fairineenterprise@gmail.com" style="color:#c2410c; text-decoration:none; font-weight:bold;">fairineenterprise@gmail.com</a>
          </p>
          <div style="border-top:1px solid #efe8df; padding-top:20px; font-size:13px; color:#78716c; font-style:italic;">
            Note: As we are a fully operational manufacturing site, physical warehouse pick-ups must be pre-arranged by phone or WhatsApp to guarantee your products are freshly packaged and ready.
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'shop',
    title: 'Shop Handcrafted Cleaning Products & Personal Care | Fairine™',
    description: 'Browse the official catalog of Fairine Enterprise. Buy highly effective liquid soaps, powerful floor cleaners, soft afterwashes, and sanitary pads in Ghana. Bulk ordering available.',
    keywords: 'buy detergents Accra, liquid soap price Ghana, bulk afterwash Spintex, sanitary pads distributor Accra, floor cleaner wholesale Ghana',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:12px; text-align:center; letter-spacing:-0.02em;">Shop Our Cleaning & Care Collection</h1>
        <p style="font-size:16px; color:#57534e; text-align:center; margin-bottom:40px; max-width:600px; margin-left:auto; margin-right:auto;">
          Select a category or click on an individual product to read detailed specifications, available volumes, pack sizes, and prices.
        </p>

        <!-- Category Filters -->
        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom:48px;">
          <a href="/shop" style="text-decoration:none; background:#1c1917; color:#ffffff; font-weight:700; padding:10px 24px; border-radius:99px; font-size:14px;">All Products</a>
          <a href="/shop/home-care" style="text-decoration:none; background:#ffffff; border:1px solid #efe8df; color:#57534e; font-weight:700; padding:10px 24px; border-radius:99px; font-size:14px; transition:all 0.2s;">Home Care</a>
          <a href="/shop/fabric-care" style="text-decoration:none; background:#ffffff; border:1px solid #efe8df; color:#57534e; font-weight:700; padding:10px 24px; border-radius:99px; font-size:14px; transition:all 0.2s;">Fabric Care</a>
          <a href="/shop/personal-care" style="text-decoration:none; background:#ffffff; border:1px solid #efe8df; color:#57534e; font-weight:700; padding:10px 24px; border-radius:99px; font-size:14px; transition:all 0.2s;">Personal Care</a>
          <a href="/shop/fragrances" style="text-decoration:none; background:#ffffff; border:1px solid #efe8df; color:#57534e; font-weight:700; padding:10px 24px; border-radius:99px; font-size:14px; transition:all 0.2s;">Fragrances</a>
          <a href="/shop/sanitary-care" style="text-decoration:none; background:#ffffff; border:1px solid #efe8df; color:#57534e; font-weight:700; padding:10px 24px; border-radius:99px; font-size:14px; transition:all 0.2s;">Sanitary Care</a>
        </div>

        <!-- Comprehensive Product List -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px;">
          <!-- Product 1 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden; display:flex; flex-col; justify-content:space-between;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/liquid-soap-1l.webp" alt="Fairine Liquid Soap" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px; text-transform:uppercase;">Home Care</span>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:10px 0;"><a href="/product/liquid-soap" style="text-decoration:none; color:inherit;">Fairine Liquid Soap</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Refreshing and high-foaming multi-purpose soap. Highly effective for dishes, hands, counters, and household appliances.</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-t:1px solid #f5f5f4; padding-top:16px;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 8.00 GHS</span>
                <a href="/product/liquid-soap" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">Product Page →</a>
              </div>
            </div>
          </div>

          <!-- Product 2 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden; display:flex; flex-col; justify-content:space-between;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/floor-cleaner-1l.webp" alt="Fairine Floor Cleaner" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px; text-transform:uppercase;">Home Care</span>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:10px 0;"><a href="/product/floor-cleaner" style="text-decoration:none; color:inherit;">Fairine Floor Cleaner</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Antibacterial stain remover and disinfectant. Cleans and polishes diverse flooring. Forest lemon scent.</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-t:1px solid #f5f5f4; padding-top:16px;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 15.00 GHS</span>
                <a href="/product/floor-cleaner" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">Product Page →</a>
              </div>
            </div>
          </div>

          <!-- Product 3 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden; display:flex; flex-col; justify-content:space-between;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/afterwash-500ml.webp" alt="Fairine Fabric Softener" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px; text-transform:uppercase;">Fabric Care</span>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:10px 0;"><a href="/product/fabric-softener" style="text-decoration:none; color:inherit;">Fairine Fabric Softener</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Premium laundry companion afterwash. Softens materials, preserves clothing fibers, and eliminates static electricity.</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-t:1px solid #f5f5f4; padding-top:16px;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 14.00 GHS</span>
                <a href="/product/fabric-softener" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">Product Page →</a>
              </div>
            </div>
          </div>

          <!-- Product 4 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden; display:flex; flex-col; justify-content:space-between;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/shower-gel-500ml.webp" alt="Fairine Shower Gel" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px; text-transform:uppercase;">Personal Care</span>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:10px 0;"><a href="/product/shower-gel" style="text-decoration:none; color:inherit;">Fairine Shower Gel</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Gentle, richly lathering daily moisturizing shower gel. Infused with skin-softening compounds and rich aromatics.</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-t:1px solid #f5f5f4; padding-top:16px;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 20.00 GHS</span>
                <a href="/product/shower-gel" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">Product Page →</a>
              </div>
            </div>
          </div>

          <!-- Product 5 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden; display:flex; flex-col; justify-content:space-between;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/ikeda-products.webp" alt="Ikeda Premium Fragrances" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px; text-transform:uppercase;">Fragrances</span>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:10px 0;"><a href="/product/ikeda-perfumes" style="text-decoration:none; color:inherit;">Ikeda Premium Fragrances</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Highly concentrated air fresheners and luxury perfumes for vehicles, office suites, and residential living rooms.</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-t:1px solid #f5f5f4; padding-top:16px;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">100.00 GHS</span>
                <a href="/product/ikeda-perfumes" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">Product Page →</a>
              </div>
            </div>
          </div>

          <!-- Product 6 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden; display:flex; flex-col; justify-content:space-between;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/flo-360.webp" alt="Flo 360 Sanitary Pad" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <span style="font-size:10px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:2px 8px; border-radius:4px; text-transform:uppercase;">Sanitary Care</span>
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:10px 0;"><a href="/product/flo-360-sanitary-pad" style="text-decoration:none; color:inherit;">Flo 360 Sanitary Pad</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Zero leaks. Highly breathable, cotton-soft feel, hypoallergenic protection for maximum active daily comfort.</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-t:1px solid #f5f5f4; padding-top:16px;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">25.00 GHS</span>
                <a href="/product/flo-360-sanitary-pad" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">Product Page →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  // Categories
  {
    path: 'shop/home-care',
    title: 'Home Care Soaps & Floor Cleaners | Fairine™ Ghana',
    description: 'Shop effective home care detergents handcrafted in Accra. Buy high-foaming liquid soaps and disinfectant floor cleaners for tiles, wood, and concrete.',
    keywords: 'buy liquid soap Accra, floor cleaner Tema, sanitary supplies Spintex, home cleaning products Ghana',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:12px; text-align:center; letter-spacing:-0.02em;">Home Care Detergents</h1>
        <p style="font-size:16px; color:#57534e; text-align:center; margin-bottom:48px;">
          Our professional-grade home care formulations are tough on grease and dirt, safe on surfaces, and fully approved by FDA Ghana.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px;">
          <!-- Product 1 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/liquid-soap-1l.webp" alt="Fairine Liquid Soap" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:0 0 10px 0;"><a href="/product/liquid-soap" style="text-decoration:none; color:inherit;">Fairine Liquid Soap</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">High-foaming multi-purpose liquid soap. Cuts through heavy grease, leaving hands soft and kitchen surfaces sparkling clean.</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 8.00 GHS</span>
                <a href="/product/liquid-soap" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">View Volumes →</a>
              </div>
            </div>
          </div>
          <!-- Product 2 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/floor-cleaner-1l.webp" alt="Fairine Floor Cleaner" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:0 0 10px 0;"><a href="/product/floor-cleaner" style="text-decoration:none; color:inherit;">Fairine Floor Cleaner</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Antibacterial disinfectant floor cleaner. Safely cleans tiles, laminate, cement and wood flooring with a forest lemon scent.</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 15.00 GHS</span>
                <a href="/product/floor-cleaner" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">View Volumes →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'shop/fabric-care',
    title: 'Fabric Care & Softeners | Fairine™ Ghana',
    description: 'Shop laundry softeners and afterwashes crafted in Accra. Give your clothes long-lasting freshness, fiber protection, and static reduction.',
    keywords: 'fabric softener Accra, laundry detergents Spintex, buy afterwash Ghana, clothes softeners Accra',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:12px; text-align:center; letter-spacing:-0.02em;">Fabric Care Solutions</h1>
        <p style="font-size:16px; color:#57534e; text-align:center; margin-bottom:48px;">
          Treat your fabrics to maximum luxury. Our premium fabric softener formula keeps threads silky smooth and fresh for days.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px; max-width:400px; margin:0 auto;">
          <!-- Product 3 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/afterwash-500ml.webp" alt="Fairine Fabric Softener" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:0 0 10px 0;"><a href="/product/fabric-softener" style="text-decoration:none; color:inherit;">Fairine Fabric Softener</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Handcrafted premium fabric afterwash softener. Protects knit integrity and infuses persistent scent freshness.</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 14.00 GHS</span>
                <a href="/product/fabric-softener" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">View Volumes →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'shop/personal-care',
    title: 'Personal Care & Moisturizing Shower Gels | Fairine™ Ghana',
    description: 'Shop handcrafted body wash and moisturizing shower gels in Ghana. Hypoallergenic, skin-friendly, and beautifully scented formulations.',
    keywords: 'buy shower gel Accra, moisturizing body wash Ghana, skin safe soaps Accra, personal care detergents',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:12px; text-align:center; letter-spacing:-0.02em;">Personal Care & Shower Gels</h1>
        <p style="font-size:16px; color:#57534e; text-align:center; margin-bottom:48px;">
          Pamper your skin with gentle, hydrating, and heavily aromatic shower gels designed for maximum daily vitality.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px; max-width:400px; margin:0 auto;">
          <!-- Product 4 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/shower-gel-500ml.webp" alt="Fairine Shower Gel" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:0 0 10px 0;"><a href="/product/shower-gel" style="text-decoration:none; color:inherit;">Fairine Shower Gel</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Skin-nourishing body wash. Rich lathering properties, thoroughly clean feel without stripping moisture.</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">From 20.00 GHS</span>
                <a href="/product/shower-gel" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">View Volumes →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'shop/fragrances',
    title: 'Ikeda Room & Car Fragrances | Fairine™ Accra',
    description: 'Shop concentrated long-lasting room air fresheners and premium vehicle fragrances in Accra, Ghana. Elevate your ambient atmosphere.',
    keywords: 'Ikeda fragrances Accra, room freshener price Ghana, premium car perfume Accra, home scents Accra',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:12px; text-align:center; letter-spacing:-0.02em;">Ambient Fragrances</h1>
        <p style="font-size:16px; color:#57534e; text-align:center; margin-bottom:48px;">
          Breathe luxury into your personal spaces. Discover room and vehicle scents that eliminate odor instantly and linger all day.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px; max-width:400px; margin:0 auto;">
          <!-- Product 5 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/ikeda-products.webp" alt="Ikeda Premium Fragrances" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:0 0 10px 0;"><a href="/product/ikeda-perfumes" style="text-decoration:none; color:inherit;">Ikeda Premium Fragrances</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Concentrated luxury room spray. Ideal for corporate offices, reception desks, and private cars. Persistent, calming fresh ambiance.</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">100.00 GHS</span>
                <a href="/product/ikeda-perfumes" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">View Details →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'shop/sanitary-care',
    title: 'Flo 360 Sanitary Pads & Menstrual Hygiene | Fairine™ Ghana',
    description: 'Shop hypoallergenic, breathable, ultra-thin Flo 360 sanitary pads in Accra, Ghana. Reliable period protection and absolute active comfort for 25 GHS.',
    keywords: 'Flo 360 sanitary pads Ghana, buy period pads Accra, leakproof sanitary pad Ghana, menstrual hygiene products',
    html: `
      ${headerHtml}
      <main style="max-width:1200px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif;">
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:12px; text-align:center; letter-spacing:-0.02em;">Sanitary & Menstrual Care</h1>
        <p style="font-size:16px; color:#57534e; text-align:center; margin-bottom:48px;">
          Hypoallergenic period protection designed for active lifestyles. Experience maximum dry comfort and 360° leakproof safety.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px; max-width:400px; margin:0 auto;">
          <!-- Product 6 -->
          <div style="background:#ffffff; border:1px solid #efe8df; border-radius:24px; overflow:hidden;">
            <div style="height:240px; background:#faf7f2; display:flex; align-items:center; justify-content:center; padding:20px;">
              <img src="/assets/flo-360.webp" alt="Flo 360 Sanitary Pad" style="max-height:100%; max-width:100%; object-contain;" />
            </div>
            <div style="padding:28px;">
              <h3 style="font-size:18px; font-weight:800; color:#1c1917; margin:0 0 10px 0;"><a href="/product/flo-360-sanitary-pad" style="text-decoration:none; color:inherit;">Flo 360 Sanitary Pad</a></h3>
              <p style="font-size:13px; color:#78716c; line-height:1.6; margin-bottom:20px;">Highly absorbent ultra-thin period pad. Cottony texture prevents chaffing. Skin-friendly composition prevents odors.</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; color:#1c1917; font-size:18px;">25.00 GHS</span>
                <a href="/product/flo-360-sanitary-pad" style="font-size:13px; font-weight:700; color:#c2410c; text-decoration:none;">View Details →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  // Products
  {
    path: 'product/liquid-soap',
    title: 'Fairine Handcrafted Multi-Purpose Liquid Soap | Fairine™',
    description: 'Order high-quality multi-purpose liquid soap in Accra. Highly foaming, refreshing fragrance. Perfect for dishes, countertops, and hands. From 8 GHS.',
    keywords: 'buy liquid soap Ghana, multipurpose soap Accra, high foaming detergent Accra, liquid soap 4L price',
    html: `
      ${headerHtml}
      <main style="max-width:1000px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:48px; align-items:start;">
          <div style="background:#faf7f2; border:1px solid #efe8df; padding:40px; border-radius:32px; text-align:center;">
            <img src="/assets/liquid-soap-1l.webp" alt="Fairine Liquid Soap - 1L Bottle" style="max-height:350px; width:auto; border-radius:12px;" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Home Care Catalog</span>
            <h1 style="font-size:32px; font-weight:900; color:#1c1917; margin:12px 0 8px 0; letter-spacing:-0.02em;">Fairine Liquid Soap</h1>
            <p style="font-size:22px; font-weight:900; color:#c2410c; margin-bottom:24px;">8.00 GHS – 45.00 GHS</p>
            
            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.05em;">Product Summary</h2>
            <p style="font-size:15px; line-height:1.7; color:#57534e; margin-bottom:24px;">
              Formulated as a high-performance multi-purpose washing compound. Our soap lathers richly to slice through stubborn oil, baked-on grease, and surface dirt easily. Handcrafted with safe skin surfactants and natural aroma enhancers. Absolutely non-toxic and hypoallergenic.
            </p>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Available Volumes & Pricing</h2>
            <ul style="padding-left:20px; margin-bottom:24px; font-size:14px; line-height:1.6;">
              <li><strong>500ml Handy Size:</strong> 8.00 GHS (Bulk Case of 12 for easy storage)</li>
              <li><strong>1 Litre Kitchen Pump Size:</strong> 12.00 GHS (Bulk Case of 8 for homes)</li>
              <li><strong>4 Litre Economy Gallon:</strong> 45.00 GHS (Bulk Case of 4 for businesses)</li>
            </ul>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Primary Applications</h2>
            <p style="font-size:14px; line-height:1.6; color:#57534e; margin-bottom:24px;">
              Perfect for washing dining plates, cooking pots, porcelain tiles, kitchen counters, glass panels, and safe for washing hands at the sink without drying out your cuticles.
            </p>

            <a href="https://wa.me/233504048528?text=Hello%20Fairine!%20I'd%20like%20to%20order%20the%20Fairine%20Liquid%20Soap" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:16px; padding:16px 36px; border-radius:16px; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
              💬 Order Liquid Soap on WhatsApp
            </a>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'product/floor-cleaner',
    title: 'Fairine Disinfectant Floor Cleaner | Fairine™ Accra',
    description: 'Buy powerful antibacterial floor cleaner in Accra. Removes stubborn tile stains, disinfects surfaces, and leaves a fresh forest lemon scent. From 15 GHS.',
    keywords: 'buy floor cleaner Accra, tile cleaner price Ghana, concrete floor detergent, antibacterial floor wash',
    html: `
      ${headerHtml}
      <main style="max-width:1000px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <div style="grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); display:grid; gap:48px; align-items:start;">
          <div style="background:#faf7f2; border:1px solid #efe8df; padding:40px; border-radius:32px; text-align:center;">
            <img src="/assets/floor-cleaner-1l.webp" alt="Fairine Floor Cleaner Bottle" style="max-height:350px; width:auto; border-radius:12px;" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Home Care Catalog</span>
            <h1 style="font-size:32px; font-weight:900; color:#1c1917; margin:12px 0 8px 0; letter-spacing:-0.02em;">Fairine Floor Cleaner</h1>
            <p style="font-size:22px; font-weight:900; color:#c2410c; margin-bottom:24px;">15.00 GHS – 60.00 GHS</p>
            
            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.05em;">Product Summary</h2>
            <p style="font-size:15px; line-height:1.7; color:#57534e; margin-bottom:24px;">
              Designed as an active antibacterial and stain-removing wash. This cleaner strips away grime, soot, sticky residues, and heavy microbial build-up from highly trafficked floors while preserving surface gloss. Contains a robust forest lavender-lemon aromatic compound to keep rooms smelling beautiful.
            </p>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Available Volumes & Pricing</h2>
            <ul style="padding-left:20px; margin-bottom:24px; font-size:14px; line-height:1.6;">
              <li><strong>1 Litre Bottle:</strong> 15.00 GHS (Bulk Case of 8)</li>
              <li><strong>5 Litre Household Jug:</strong> 60.00 GHS (Bulk Case of 4)</li>
            </ul>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Surface Safety</h2>
            <p style="font-size:14px; line-height:1.6; color:#57534e; margin-bottom:24px;">
              Perfectly safe and active for ceramic tile, terrazzo, polished concrete, vinyl slats, and wood veneers. Highly recommended for hospitals, child play areas, living spaces, and offices.
            </p>

            <a href="https://wa.me/233504048528?text=Hello%20Fairine!%20I'd%20like%20to%20order%20the%20Fairine%20Floor%20Cleaner" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:16px; padding:16px 36px; border-radius:16px; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
              💬 Order Floor Cleaner on WhatsApp
            </a>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'product/fabric-softener',
    title: 'Fairine Premium Fabric Softener & Afterwash | Fairine™',
    description: 'Order high-quality fabric softener in Accra. Protects clothing fibers, minimizes static, and infuses textiles with active freshness. From 14 GHS.',
    keywords: 'laundry softeners Accra, premium fabric afterwash, buy softener Spintex, liquid fabric conditioner Ghana',
    html: `
      ${headerHtml}
      <main style="max-width:1000px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <div style="grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); display:grid; gap:48px; align-items:start;">
          <div style="background:#faf7f2; border:1px solid #efe8df; padding:40px; border-radius:32px; text-align:center;">
            <img src="/assets/afterwash-500ml.webp" alt="Fairine Fabric Softener Pack" style="max-height:350px; width:auto; border-radius:12px;" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Fabric Care Catalog</span>
            <h1 style="font-size:32px; font-weight:900; color:#1c1917; margin:12px 0 8px 0; letter-spacing:-0.02em;">Fairine Fabric Softener</h1>
            <p style="font-size:22px; font-weight:900; color:#c2410c; margin-bottom:24px;">14.00 GHS – 28.00 GHS</p>
            
            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.05em;">Product Summary</h2>
            <p style="font-size:15px; line-height:1.7; color:#57534e; margin-bottom:24px;">
              Formulated as an ultra-concentrated fiber conditioner. Our softener wraps microscopic fabric strands in a protective shield to keep clothing cottons, silks, and synthetics feeling remarkably soft, reducing fiber friction, wear, static, and lint clinging. Keeps laundry smelling fresh for up to 14 days.
            </p>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Available Volumes & Pricing</h2>
            <ul style="padding-left:20px; margin-bottom:24px; font-size:14px; line-height:1.6;">
              <li><strong>500ml Squeeze Pack:</strong> 14.00 GHS (Case of 12)</li>
              <li><strong>1 Litre Economy Jug:</strong> 28.00 GHS (Case of 10)</li>
            </ul>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Laundry Guidelines</h2>
            <p style="font-size:14px; line-height:1.6; color:#57534e; margin-bottom:24px;">
              Pour exactly one capful into the fabric dispenser drawer of your washing machine during the final rinse cycle, or dilute in clean water for 10 minutes when handwashing clothes.
            </p>

            <a href="https://wa.me/233504048528?text=Hello%20Fairine!%20I'd%20like%20to%20order%20the%20Fairine%20Fabric%20Softener" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:16px; padding:16px 36px; border-radius:16px; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
              💬 Order Fabric Softener on WhatsApp
            </a>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'product/shower-gel',
    title: 'Fairine Gentle Moisturizing Shower Gel | Fairine™',
    description: 'Moisturizing and beautifully scented body wash handcrafted in Accra, Ghana. Hypoallergenic, skin-friendly, and perfect for daily family use. From 20 GHS.',
    keywords: 'buy shower gel Accra, moisturizing body wash Ghana, skin safe liquid soap Accra, personal body care',
    html: `
      ${headerHtml}
      <main style="max-width:1000px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <div style="grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); display:grid; gap:48px; align-items:start;">
          <div style="background:#faf7f2; border:1px solid #efe8df; padding:40px; border-radius:32px; text-align:center;">
            <img src="/assets/shower-gel-500ml.webp" alt="Fairine Shower Gel Container" style="max-height:350px; width:auto; border-radius:12px;" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Personal Care Catalog</span>
            <h1 style="font-size:32px; font-weight:900; color:#1c1917; margin:12px 0 8px 0; letter-spacing:-0.02em;">Fairine Shower Gel</h1>
            <p style="font-size:22px; font-weight:900; color:#c2410c; margin-bottom:24px;">20.00 GHS – 28.00 GHS</p>
            
            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.05em;">Product Summary</h2>
            <p style="font-size:15px; line-height:1.7; color:#57534e; margin-bottom:24px;">
              Formulated as a gentle moisturizing daily body wash. Engineered with natural surfactants and skin conditioning moisturizers. It sweeps away dry skin debris and sweat easily, producing a thick creamy foam that washes off cleanly without tightening or dehydrating your skin barrier.
            </p>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Available Volumes & Pricing</h2>
            <ul style="padding-left:20px; margin-bottom:24px; font-size:14px; line-height:1.6;">
              <li><strong>500ml Dispenser Pack:</strong> 20.00 GHS (Case of 12)</li>
              <li><strong>750ml Premium Bottle:</strong> 28.00 GHS (Case of 10)</li>
            </ul>

            <a href="https://wa.me/233504048528?text=Hello%20Fairine!%20I'd%20like%20to%20order%20the%20Fairine%20Shower%20Gel" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:16px; padding:16px 36px; border-radius:16px; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
              💬 Order Shower Gel on WhatsApp
            </a>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'product/ikeda-perfumes',
    title: 'Ikeda Premium Fragrances & Air Fresheners | Fairine™',
    description: 'Elevate your office, home, or car in Accra with long-lasting premium Ikeda ambient fragrances. Eliminates odor, creating a rich atmosphere. 100 GHS.',
    keywords: 'Ikeda air fresheners Accra, buy room spray Ghana, car fragrances price Accra, luxury ambient scents',
    html: `
      ${headerHtml}
      <main style="max-width:1000px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <div style="grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); display:grid; gap:48px; align-items:start;">
          <div style="background:#faf7f2; border:1px solid #efe8df; padding:40px; border-radius:32px; text-align:center;">
            <img src="/assets/ikeda-products.webp" alt="Ikeda Premium Fragrances Bottles" style="max-height:350px; width:auto; border-radius:12px;" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Ambient Fragrances</span>
            <h1 style="font-size:32px; font-weight:900; color:#1c1917; margin:12px 0 8px 0; letter-spacing:-0.02em;">Ikeda Premium Fragrances</h1>
            <p style="font-size:22px; font-weight:900; color:#c2410c; margin-bottom:24px;">100.00 GHS</p>
            
            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.05em;">Product Summary</h2>
            <p style="font-size:15px; line-height:1.7; color:#57534e; margin-bottom:24px;">
              Formulated as an elite atmospheric air freshener. Made from pure scent extracts that eliminate airborne odors instantly rather than masking them. Perfect for creating a welcoming, premium ambient signature in retail showrooms, office suites, family salons, and luxury cars.
            </p>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Specifications</h2>
            <ul style="padding-left:20px; margin-bottom:24px; font-size:14px; line-height:1.6;">
              <li><strong>Pack Size:</strong> Single premium atomizer bottle</li>
              <li><strong>Net Price:</strong> 100 GHS flat rate per bottle</li>
              <li><strong>Aromatic Options:</strong> Contact for monthly aromatic curation list</li>
            </ul>

            <a href="https://wa.me/233504048528?text=Hello%20Fairine!%20I'd%20like%20to%20order%20the%20Ikeda%20Premium%20Fragrance" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:16px; padding:16px 36px; border-radius:16px; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
              💬 Order Ikeda Fragrance on WhatsApp
            </a>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: 'product/flo-360-sanitary-pad',
    title: 'Flo 360 Sanitary Pads | Period Protection | Fairine™ Ghana',
    description: 'Experience 360° leakproof security with Flo 360 Sanitary Pads in Ghana. Cottony soft, ultra-thin, highly breathable, and skin friendly. Only 25 GHS per pack.',
    keywords: 'Flo 360 sanitary pads Ghana, menstrual pads price Accra, leak proof sanitary pads Accra, buy period pads Spintex',
    html: `
      ${headerHtml}
      <main style="max-width:1000px; margin:0 auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; color:#44403c;">
        <div style="grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); display:grid; gap:48px; align-items:start;">
          <div style="background:#faf7f2; border:1px solid #efe8df; padding:40px; border-radius:32px; text-align:center;">
            <img src="/assets/flo-360.webp" alt="Flo 360 Sanitary Pad Pack" style="max-height:350px; width:auto; border-radius:12px;" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:800; background:#f5e8d3; color:#854d0e; padding:4px 12px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Sanitary Care Catalog</span>
            <h1 style="font-size:32px; font-weight:900; color:#1c1917; margin:12px 0 8px 0; letter-spacing:-0.02em;">Flo 360 Sanitary Pad</h1>
            <p style="font-size:22px; font-weight:900; color:#c2410c; margin-bottom:24px;">25.00 GHS</p>
            
            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.05em;">Product Summary</h2>
            <p style="font-size:15px; line-height:1.7; color:#57534e; margin-bottom:24px;">
              Designed to deliver complete 360-degree security. Highly engineered breathable cotton core instantly draws fluid deep within, preventing surface moisture and rubbing. Completely hypoallergenic, skin-friendly, and odorless. Enjoy continuous confidence and dry comfort through active days and nights.
            </p>

            <h2 style="font-size:16px; font-weight:800; color:#1c1917; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">Specifications</h2>
            <ul style="padding-left:20px; margin-bottom:24px; font-size:14px; line-height:1.6;">
              <li><strong>Pack Size:</strong> Single pack containing standard flow protection</li>
              <li><strong>Price per Pack:</strong> 25.00 GHS flat rate</li>
              <li><strong>Material:</strong> Organic cotton top sheet, breathable backing film</li>
            </ul>

            <a href="https://wa.me/233504048528?text=Hello%20Fairine!%20I'd%20like%20to%20order%20the%20Flo%20360%20Sanitary%20Pad" target="_blank" rel="noopener noreferrer" style="text-decoration:none; background:#10b981; color:#ffffff; font-weight:800; font-size:16px; padding:16px 36px; border-radius:16px; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
              💬 Order Flo 360 Pads on WhatsApp
            </a>
          </div>
        </div>
      </main>
      ${footerHtml}
    `,
  },
  {
    path: '404',
    title: 'Page Not Found | Fairine™ Enterprise',
    description: 'The requested page was not found on Fairine Enterprise. Return to our homepage for premium liquid soaps, detergents, and home care in Accra, Ghana.',
    keywords: '404 page, Fairine enterprise home',
    html: `
      ${headerHtml}
      <main style="max-width:600px; margin:100px auto; padding:48px 24px; font-family:system-ui,-apple-system,sans-serif; text-align:center; color:#44403c;">
        <div style="font-size:72px; margin-bottom:24px;">🔍</div>
        <h1 style="font-size:36px; font-weight:900; color:#1c1917; margin-bottom:16px;">404 Page Not Found</h1>
        <p style="font-size:16px; color:#78716c; margin-bottom:32px; line-height:1.6;">
          We couldn't locate the exact page you were searching for. It might have been relocated, or typed incorrectly.
        </p>
        <a href="/" style="text-decoration:none; background:#1c1917; color:#ffffff; font-weight:800; padding:16px 36px; border-radius:16px; font-size:16px; box-shadow:0 10px 25px rgba(28,25,23,0.15); display:inline-block;">Return to Homepage</a>
      </main>
      ${footerHtml}
    `,
  }
];

console.log('Starting prerendering process...');

for (const route of routes) {
  let targetHtml = baseHtml;

  // 1. Replace Title
  targetHtml = targetHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // 2. Replace Meta Description
  const metaDescRegex = /<meta\s+name="description"\s+content=".*?"\s*\/?>|<meta\s+content=".*?"\s+name="description"\s*\/?>/i;
  if (metaDescRegex.test(targetHtml)) {
    targetHtml = targetHtml.replace(metaDescRegex, `<meta name="description" content="${route.description}" />`);
  } else {
    // If not found, inject in head
    targetHtml = targetHtml.replace('</head>', `<meta name="description" content="${route.description}" />\n</head>`);
  }

  // 3. Inject Keywords
  const keywordsMeta = `<meta name="keywords" content="${route.keywords || ''}" />`;
  targetHtml = targetHtml.replace('</head>', `${keywordsMeta}\n</head>`);

  // 4. Inject Canonical URL
  const canonicalUrl = `https://fairine.com/${route.path}`;
  const canonicalLink = `<link rel="canonical" href="${canonicalUrl}" />`;
  targetHtml = targetHtml.replace('</head>', `${canonicalLink}\n</head>`);

  // 5. Inject Skeleton CSS & Custom Fallback content in <div id="root">
  targetHtml = targetHtml.replace('</head>', `${skeletonStyles}\n</head>`);
  
  // Wrap route HTML in simple Cream UI fallback styles for indexers & quick load
  const fallbackWrapper = `
    <div style="background-color:#fffdfa; min-height:100vh; display:flex; flex-direction:column; justify-content:space-between;">
      ${route.html}
    </div>
  `;
  targetHtml = targetHtml.replace('<div id="root"></div>', `<div id="root">${fallbackWrapper}</div>`);

  // 6. Save target file
  if (route.path === '') {
    // Write directly to index.html
    fs.writeFileSync(BASE_HTML_PATH, targetHtml, 'utf-8');
    console.log('✓ Prerendered homepage (dist/index.html)');
  } else if (route.path === '404') {
    // Write directly to 404.html
    const targetFile = path.join(DIST_DIR, '404.html');
    fs.writeFileSync(targetFile, targetHtml, 'utf-8');
    console.log('✓ Prerendered 404 page (dist/404.html)');
  } else {
    // Create folders and write index.html
    const routeDir = path.join(DIST_DIR, ...route.path.split('/'));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, targetHtml, 'utf-8');
    console.log(`✓ Prerendered route: /${route.path} -> ${targetFile}`);
  }
}

console.log('🎉 Prerendering successfully completed!');
