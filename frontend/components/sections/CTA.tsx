import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-brand-violet to-indigo-600 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                    Rejoignez la Communauté Yupi Global
                </h2>
                <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Devenez membre dès aujourd'hui et bénéficiez d'avantages exclusifs, d'un accès prioritaire à nos services et d'un réseau de professionnels de santé.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-violet rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                    Adhérer Maintenant
                </Link>
            </div>
        </section>
    );
}
