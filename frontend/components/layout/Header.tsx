import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-dark-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dark-bg/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* P1: Branding - Point d'ancrage */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            {/* Placeholder for Logo if image not found, or keeping existing logic */}
            <span className="text-2xl font-bold text-white tracking-tighter">
              YUPI <span className="text-brand-violet">GLOBAL</span>
            </span>
            {/* Uncomment when logo file is ready
            <Image
              src="/logos/logo-light.png"
              alt="Yupi Global"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
            */}
          </Link>

          {/* P2: Navigation interne */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Navigation />
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            {/* P3 & P4: Actions Externes */}
            <div className="hidden xl:flex items-center space-x-6 text-sm font-medium text-light-text-secondary">
              <Link
                href="#" // Placeholder
                className="hover:text-brand-cyan transition-colors"
              >
                Yupi Market
              </Link>
              <Link
                href="#" // Placeholder
                className="hover:text-brand-cyan transition-colors"
              >
                Back-office
              </Link>
            </div>

            {/* Separator */}
            <div className="hidden xl:block h-6 w-px bg-gray-800"></div>

            {/* P5: Sélecteur de Langue */}
            <button className="hidden md:flex items-center space-x-1 text-sm font-medium text-light-text hover:text-brand-violet transition-colors">
              <span>FR</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* P6: CTA Primaire */}
            <Link
              href="/adhesion"
              className="hidden sm:inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-bold bg-brand-violet text-white hover:bg-brand-violet/90 transition-all shadow-[0_0_15px_rgba(127,110,232,0.3)] hover:shadow-[0_0_20px_rgba(127,110,232,0.5)]"
            >
              Adhésion
            </Link>

            {/* Mobile Menu Trigger (Placeholder) */}
            <button className="lg:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
