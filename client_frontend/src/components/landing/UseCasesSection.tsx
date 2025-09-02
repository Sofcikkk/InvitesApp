import Image from 'next/image';

const useCases = [
    {
        imageSrc: '/img/slub.png',
        altText: 'Eleganckie zaproszenie na ślub',
        title: 'Śluby i wesela',
    },
    {
        imageSrc: '/img/impreza.png',
        altText: 'Nowoczesne zaproszenie na imprezę urodzinową',
        title: 'Imprezy urodzinowe',
    },
    {
        imageSrc: '/img/firma.png',
        altText: 'Profesjonalne zaproszenie na event firmowy',
        title: 'Imprezy firmowe',
    },
];

export default function UseCasesSection() {
    return (
        <section id="szablony" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Przykładowe zastosowania</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Niezależnie od tego, czy planujesz rustykalne wesele, czy nowoczesne przyjęcie, mamy szablon idealny dla Ciebie.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase) => (
                        <div key={useCase.title} className="group relative rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={useCase.imageSrc}
                                alt={useCase.altText}
                                width={600}
                                height={800}
                                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                                {useCase.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}