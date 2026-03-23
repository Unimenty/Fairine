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
}: SEOProps) => {
    const siteName = 'Fairine Enterprise';
    const siteUrl = 'https://fairine.com'; // Replace with actual production URL if different
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Buy Quality Soap & Cleaning Detergents in Ghana`;
    const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl,
        "logo": `${siteUrl}/assets/logo-clean.png`,
        "description": "Manufacturer and supplier of high-quality liquid soaps and cleaning detergents in Ghana.",
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
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />

            {/* Structured Data (JSON-LD) */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
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
