import './globals.css';

export const metadata = {
  title: 'Campione | Réservation de Terrains de Sports',
  description: 'Application mobile de réservation de terrains de sports',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="/adelux-assets/css/main.css" />
        <link rel="stylesheet" href="/adelux-assets/css/responsive.css" />
      </head>
      <body>
        <header>
          <div className="container header-inner">
            <div className="logo">
              <a href="/">
                <img src="/logos/logo%20campione%20plat%20light.png" alt="Campione Logo" style={{ height: '40px', width: 'auto' }} />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À propos</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer style={{ marginTop: '4rem', padding: '3rem 0', textAlign: 'center', backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <img src="/logos/logo%20campione%20dark%20carre.png" alt="Campione Logo Carre" style={{ height: '80px', width: 'auto' }} />
            <p>&copy; {new Date().getFullYear()} Campione. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
