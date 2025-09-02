import { Users, RotateCw, Wand2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const hybridFeatures = [
    { icon: Users, title: 'Idealne dla każdego pokolenia', description: 'To doskonałe rozwiązanie dla starszych gości, którzy cenią tradycyjną formę, nie tracąc przy tym żadnej z cyfrowych funkcji, takich jak RSVP online czy aktualizacje.' },
    { icon: RotateCw, title: 'Pełna kontrola w jednym panelu', description: 'Niezależnie od tego, czy gość potwierdzi przybycie przez stronę, czy telefonicznie, wszystko zanotujesz w jednym, spójnym systemie.' },
    { icon: Wand2, title: 'Element "wow" i wygoda', description: 'Goście otrzymują piękną pamiątkę, a jednocześnie zyskują natychmiastowy dostęp do map, harmonogramu i galerii po zeskanowaniu kodu.' },
];

export default function HybridSection() {
    return (
        <section id="zaproszenia-hybrydowe" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-semibold text-sky-600">TRADYCJA I NOWOCZESNOŚĆ</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">Połącz to, co najlepsze z obu światów.</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Chcesz uhonorować wszystkich gości, łącząc elegancję papieru z potęgą cyfrowych narzędzi? Z nami to możliwe! Zaskocz swoich bliskich, oferując im piękne, fizyczne zaproszenia z unikalnym kodem QR, który przenosi ich do interaktywnej wersji online.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {hybridFeatures.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-3">
                                    <div className="text-amber-500 mt-1 shrink-0"><feature.icon size={24} /></div>
                                    <div>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <Link href="/#kontakt" className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition shadow-lg">
                                Skontaktuj się w sprawie wyceny
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* POPRAWKA: Dodano klasy w-full i h-auto dla responsywności */}
                            <Image
                                src="/img/papier.png"
                                alt="Przykładowe zaproszenie papierowe z kodem QR"
                                width={500}
                                height={700}
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}