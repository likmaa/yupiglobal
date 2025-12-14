import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logos/yupi-global-logo.jpg"
                alt="Yupi Global"
                width={120}
                height={120}
                className="h-auto w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Yupi Global - Votre partenaire de confiance pour des produits de santé et bien-être de qualité en Afrique.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@yupiglobal.com" className="hover:text-white transition-colors">
                  info@yupiglobal.com
                </a>
              </li>
              <li>
                <a href="tel:+237" className="hover:text-white transition-colors">
                  +237 XXX XXX XXX
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="https://ecommerce.yupiglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                Accéder à l'E-commerce
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Yupi Global. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
