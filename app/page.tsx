import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load heavy components below the fold
const RecentPosters = dynamic(() => import('@/components/home/RecentPosters'), {
  ssr: true, // Keep SSR for SEO content, but code-split the JS
});
const Footer = dynamic(() => import('@/components/home/Footer'));

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Agency",
    "name": "Brandso",
    "url": "https://brandso.vercel.app",
    "logo": "/images/logo/logo.png",
    "sameAs": [
      "https://facebook.com/brandso",
      "https://instagram.com/brandso",
      "https://twitter.com/brandso"
    ],
    "description": "Brandso is a full-service digital agency specializing in web development, app development, graphics, video production, and digital marketing.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-0000000000",
      "contactType": "customer service"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="json-ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow">
        {/* Hero Section - LCP Candidate, load eager */}
        <section className="relative w-full max-w-7xl mx-auto">
          <Hero />
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full">
          <Services />
        </section>

        {/* Recent Posters Section - Lazy loaded */}
        <section id="portfolio" className="relative w-full">
          <RecentPosters />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}