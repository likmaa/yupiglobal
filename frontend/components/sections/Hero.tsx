import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-dark-bg py-20 md:py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-violet/20 blur-[100px]" />
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-cyan/20 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-light-text mb-6 tracking-tight">
                        Bienvenue chez <span className="text-brand-violet">Yupi Global</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-light-text-secondary mb-8 leading-relaxed">
                        Votre partenaire de confiance pour des produits de santé et bien-être de qualité en Afrique
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-3 bg-brand-violet text-white rounded-lg font-bold text-lg hover:bg-brand-violet/90 transition-all shadow-[0_0_20px_rgba(127,110,232,0.3)] hover:shadow-[0_0_30px_rgba(127,110,232,0.5)]"
                        >
                            Découvrir nos Services
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-cyan text-brand-cyan rounded-lg font-bold text-lg hover:bg-brand-cyan/10 transition-colors"
                        >
                            Nous Contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
