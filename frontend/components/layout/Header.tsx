import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/yupi-global-logo.jpg"
              alt="Yupi Global"
              width={120}
              height={120}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Navigation />
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://ecommerce.yupiglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              E-commerce
            </Link>
            <Link
              href="https://auth.yupiglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
