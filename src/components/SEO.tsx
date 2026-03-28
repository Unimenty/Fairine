import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    structuredData?: object;
    noindex?: boolean;
    keywords?: string;
    breadcrumb?: { name: string; url: string }[];
    productData?: {
        name: string;
        description: string;
        image: string;
        price: number;
        currency?: string;
        availability?: string;
        sku?: string;
        rating?: number;
        reviewCount?: number;
    };
}

const SEO = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = '/assets/logo-clean.png',
    structuredData,
    noindex = false,
    keywords,
    breadcrumb,
    productData,
}: SEOProps) => {
    const siteName = 'Fairine Enterprise';
    const siteUrl = 'https://fairine.com';
    const fullTitle = title ? `${title} | Fairine™` : `Fairine™ | Premium Cleaning Soaps & Detergents in Ghana`;
    const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullOgImage = ogImage?.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl,
        "logo": `${siteUrl}/assets/logo-clean.png`,
        "description": "Manufacturer of high-quality liquid soaps and cleaning detergents in Ghana. Shop family-safe, handcrafted solutions for home and office.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "addressCountry": "GH"
        },
        "sameAs": [
            "https://www.facebook.com/fairineenterprise",
            "https://www.instagram.com/fairineenterprise"
        ]
    };

    const breadcrumbSchema = breadcrumb ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${siteUrl}${item.url}`
        }))
    } : null;

    const productSchema = productData ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productData.name,
        "description": productData.description,
        "image": productData.image.startsWith('http') ? productData.image : `${siteUrl}${productData.image}`,
        "sku": productData.sku || `FRN-${productData.name.replace(/\s+/g, '-').toLowerCase()}`,
        "brand": {
            "@type": "Brand",
            "name": siteName
        },
        "offers": {
            "@type": "Offer",
            "url": currentUrl,
            "priceCurrency": productData.currency || "GHS",
            "price": productData.price,
            "availability": productData.availability || "https://schema.org/InStock"
        },
        ...(productData.rating && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": productData.rating,
                "reviewCount": productData.reviewCount || 1
            }
        })
    } : null;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />
            {noindex && <meta name="robots" content="noindex, follow" />}

            {/* Open Graph / WhatsApp / Instagram */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={fullOgImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={fullOgImage} />

            {/* Structured Data (JSON-LD) */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {productSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(productSchema)}
                </script>
            )}

            {structuredData ? (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            ) : (
                /* Default Organization Schema for all pages */
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
