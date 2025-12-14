export const metadata = {
  title: 'Portfolio - Yupi Global',
  description: 'Découvrez nos réalisations et projets phares',
};

export default function PortfolioPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations et projets phares
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
            Tous
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Catégorie 1
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Catégorie 2
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Catégorie 3
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project) => (
            <div
              key={project}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Projet {project}
                </h3>
                <p className="text-white/80 text-sm">
                  Description du projet {project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
