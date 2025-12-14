export const metadata = {
  title: 'Services - Yupi Global',
  description: 'Découvrez notre gamme complète de services de santé et bien-être',
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour votre santé et bien-être
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((service) => (
            <div
              key={service}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service {service}
              </h3>
              <p className="text-gray-600 mb-4">
                Description détaillée du service {service}. Les données seront chargées depuis l'API backend.
              </p>
              <a
                href={`/services/service-${service}`}
                className="text-primary font-semibold hover:underline"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
