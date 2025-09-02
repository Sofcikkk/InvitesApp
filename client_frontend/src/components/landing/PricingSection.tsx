import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Basic',
        description: 'Na małe przyjęcia i urodziny',
        price: 99,
        features: [
            'Do 50 gości',
            'Podstawowe szablony',
            'Zarządzanie RSVP',
            'Własna subdomena',
        ],
        isHighlighted: false,
    },
    {
        name: 'Premium',
        description: 'Na wesela i duże eventy',
        price: 249,
        features: [
            'Wszystko z pakietu Plus',
            'Bez limitu gości',
            'Własna domena (np. AniaiJan.pl)',
            'Automatyczne przypomnienia SMS',
            'Priorytetowe wsparcie 24/7',
        ],
        isHighlighted: true,
    },
    {
        name: 'Plus',
        description: 'Dla wymagających organizatorów',
        price: 179,
        features: [
            'Wszystko z pakietu Basic',
            'Do 150 gości',
            'Wszystkie szablony Premium',
            'Galerie zdjęć i Listy prezentów',
            'Wsparcie e-mail i czat',
        ],
        isHighlighted: false,
    },
];

export default function PricingSection() {
    return (
        <section id="cennik" className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Wybierz plan idealny для Ciebie</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Jeden koszt, bez ukrytych opłat. Zyskaj dostęp do wszystkich funkcji i zorganizuj wydarzenie marzeń.
                    </p>
                </div>
                <div className="mt-16 grid lg:grid-cols-3 gap-8 items-center">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`h-full flex flex-col p-8 rounded-xl border ${plan.isHighlighted ? 'bg-slate-900 text-white border-slate-700 scale-105 shadow-2xl relative' : 'bg-white border-slate-200'}`}>
                            {plan.isHighlighted && (
                                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    Najlepszy Wybór
                                </span>
                            )}
                            <h3 className="text-xl font-bold mt-4">{plan.name}</h3>
                            <p className={`mt-2 ${plan.isHighlighted ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                            <p className="mt-6 text-5xl font-extrabold">
                                {plan.price} <span className={`text-lg font-medium ${plan.isHighlighted ? 'text-slate-400' : 'text-slate-500'}`}>zł</span>
                            </p>
                            <ul className={`mt-8 space-y-4 ${plan.isHighlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <CheckCircle className={`mr-3 ${plan.isHighlighted ? 'text-amber-400' : 'text-sky-500'}`} size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-8">
                                <Link href="/checkout" className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition ${plan.isHighlighted ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg' : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'}`}>
                                    Wybierz Pakiet
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
