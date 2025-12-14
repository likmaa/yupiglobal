import Link from 'next/link';

export default function Services() {
    return (
        <section className="py-20 bg-dark-bg border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-light-text mb-6">
                        Nos Services
                    </h2>
                    <p className="text-lg text-light-text-secondary max-w-2xl mx-auto">
                        Découvrez notre gamme complète de services dédiés à votre santé et bien-être
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="group p-8 border border-gray-800 rounded-2xl bg-gray-900/30 hover:bg-gray-900/80 hover:border-brand-violet/50 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-brand-violet/10 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🏥</span>
                            </div>
                            <h3 className="text-2xl font-bold text-light-text mb-4 group-hover:text-brand-violet transition-colors">
                                Service {item}
                            </h3>
                            <p className="text-light-text-secondary mb-6 leading-relaxed">
                                Description du service {item}. Une expertise pointue pour répondre à vos besoins spécifiques en matière de santé.
                            </p>
                            <Link
                                href={`/services/${item}`}
                                className="inline-flex items-center text-brand-cyan font-semibold hover:text-brand-violet transition-colors"
                                aria-label={`En savoir plus sur le service ${item}`}
                            >
                                En savoir plus
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-light-text rounded-lg font-semibold hover:border-brand-violet hover:bg-brand-violet/10 transition-all"
                    >
                        Voir tous les Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
