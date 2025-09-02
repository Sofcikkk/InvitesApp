import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 text-white p-12 sm:p-16 rounded-2xl text-center overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold">Gotów, by Twoje zaproszenia zabłysnęły?</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                            Stworzenie wymarzonego e-zaproszenia zajmuje tylko kilka minut. Zacznij teraz i zrób pierwsze wrażenie, które zostanie na długo.
                        </p>
                        <div className="mt-10">
                            <Link href="/#cennik" className="bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg">
                                Rozpocznij Teraz
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}