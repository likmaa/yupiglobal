import Link from 'next/link';

export default function Portfolio() {
    return (
        <section className="py-20 bg-dark-bg text-light-text">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Notre Portfolio
                        </h2>
                        <p className="text-lg text-light-text-secondary">
                            Découvrez nos réalisations et projets phares qui impactent la santé en Afrique.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="hidden md:inline-flex items-center text-brand-cyan font-bold hover:text-brand-violet transition-colors mt-4 md:mt-0"
                    >
                        Voir tout le Portfolio
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="group relative aspect-video bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-gray-700 hover:border-brand-violet/50 transition-all duration-300 hover:shadow-2xl"
                        >
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-brand-cyan text-sm font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Catégorie Projet
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    Projet Innovant {item}
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                                    Une brève description du projet qui apparaît au survol.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-brand-cyan font-bold hover:text-brand-violet transition-colors"
                    >
                        Voir tout le Portfolio
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
