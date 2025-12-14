export const metadata = {
  title: 'À Propos - Yupi Global',
  description: 'Découvrez l\'histoire, la mission et les valeurs de Yupi Global',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À Propos de Yupi Global
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour des produits de santé et bien-être de qualité en Afrique
          </p>
        </div>

        {/* Histoire */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Yupi Global a été fondée avec une vision claire : rendre accessible des produits de santé et bien-être de qualité supérieure à travers l'Afrique.
            </p>
            <p className="text-gray-700 mb-4">
              Depuis nos débuts, nous nous engageons à offrir des solutions naturelles et efficaces pour améliorer la qualité de vie de nos clients.
            </p>
            <p className="text-gray-700">
              Notre croissance continue témoigne de notre engagement envers l'excellence et la satisfaction client.
            </p>
          </div>
        </section>

        {/* Mission et Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-700">
              Fournir des produits de santé et bien-être de la plus haute qualité, accessibles à tous en Afrique, tout en respectant les normes internationales.
            </p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-700">
              Devenir le leader africain dans le domaine de la santé et du bien-être, en créant un impact positif sur la vie de millions de personnes.
            </p>
          </div>
        </section>

        {/* Valeurs */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Qualité', description: 'Nous nous engageons à offrir uniquement des produits de la plus haute qualité.' },
              { title: 'Intégrité', description: 'Transparence et honnêteté dans toutes nos relations commerciales.' },
              { title: 'Innovation', description: 'Recherche constante de nouvelles solutions pour améliorer la santé et le bien-être.' },
            ].map((value, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
