import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Campione | Réservation de Terrains de Sports',
  description: 'Application mobile de réservation de terrains de sports',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Boostly CSS Dependencies */}
        <link rel="stylesheet" href="/booster-assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/booster-assets/css/all.min.css" />
        <link rel="stylesheet" href="/booster-assets/css/animate.css" />
        <link rel="stylesheet" href="/booster-assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/booster-assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/booster-assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/booster-assets/css/nice-select.css" />
        <link rel="stylesheet" href="/booster-assets/css/flaticon.css" />
        <link rel="stylesheet" href="/booster-assets/css/main.css" />
      </head>
      <body className="body-bg-2">
        <Header />

        {children}

        <Footer />

        {/* Boostly JS Dependencies */}
        <Script src="/booster-assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/booster-assets/js/viewport.jquery.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/jquery.waypoints.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/booster-assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
