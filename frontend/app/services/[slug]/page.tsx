import { notFound } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Service - Yupi Global',
  description: 'Détails du service',
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Pour l'instant, on retourne une page basique
  // Plus tard, on récupérera les données depuis l'API
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/services"
          className="text-blue-600 hover:text-blue-700 mb-8 inline-block"
        >
          ← Retour aux services
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Service {params.slug}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Détails du service seront affichés ici. Cette page sera connectée à l'API backend
              pour récupérer les informations dynamiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

