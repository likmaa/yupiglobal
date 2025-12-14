export const metadata = {
  title: 'Blog - Yupi Global',
  description: 'Découvrez nos articles sur la santé et le bien-être',
};

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Articles et actualités sur la santé et le bien-être
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((article) => (
            <article
              key={article}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date().toLocaleDateString('fr-FR')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Titre de l'article {article}
                </h3>
                <p className="text-gray-600 mb-4">
                  Extrait de l'article {article}. Les données seront chargées depuis l'API backend.
                </p>
                <a
                  href={`/blog/article-${article}`}
                  className="text-primary font-semibold hover:underline"
                >
                  Lire la suite →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Précédent
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
            1
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            2
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

