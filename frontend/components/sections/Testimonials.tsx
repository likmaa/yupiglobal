export default function Testimonials() {
    return (
        <section className="py-20 bg-dark-bg border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-light-text mb-6">
                        Témoignages
                    </h2>
                    <p className="text-lg text-light-text-secondary max-w-2xl mx-auto">
                        Ce que nos partenaires et clients disent de l'impact de Yupi Global
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-brand-violet/30 transition-colors"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-violet to-brand-cyan rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <span className="text-xl text-white font-bold">Client</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-light-text text-lg">Dr. Koné</h4>
                                    <p className="text-sm text-brand-cyan">Clinique Espoir, Abidjan</p>
                                </div>
                            </div>
                            <p className="text-light-text-secondary italic leading-relaxed">
                                "Grâce à Yupi Global, nous avons pu moderniser nos équipements et offrir de meilleurs soins à nos patients. Un partenaire indispensable pour la santé en Afrique."
                            </p>
                            <div className="flex mt-4 space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500">★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
