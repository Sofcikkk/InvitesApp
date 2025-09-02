import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const managementFeatures = [
    { title: 'Potwierdzenia w czasie rzeczywistym', description: 'Obserwuj na żywo, kto dołączy do Twojej uroczystości i zarządzaj listą gości bez wysiłku.' },
    { title: 'Automatyczne powiadomienia SMS', description: 'Wysyłaj masowe przypomnienia i podziękowania do wszystkich gości za pomocą kilku kliknięć.' },
    { title: 'Pełna analityka i statystyki', description: 'Sprawdzaj, kto i kiedy otworzył Twoje zaproszenie, aby mieć pełen obraz zaangażowania.' },
];

export default function ManagementSection() {
    return (
        <section id="panel" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-sky-600">CENTRUM DOWODZENIA</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">Zarządzaj wydarzeniem jak profesjonalista.</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Nasze e-zaproszenia to nie tylko piękna strona dla gości. To także potężny i intuicyjny panel zarządzania, który daje Ci pełną kontrolę nad każdym aspektem Twojej uroczystości – wszystko w jednym miejscu.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {managementFeatures.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-3">
                                    <div className="text-green-500 mt-1 shrink-0"><CheckCircle size={24} /></div>
                                    <div>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <Link href="/#cennik" className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition shadow-lg">
                                Wybierz Swój Pakiet
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-2xl">
                            {/* POPRAWKA: Dodano klasy w-full i h-auto dla responsywności */}
                            <Image
                                src="/img/panel.png"
                                alt="Podgląd panelu zarządzania zaproszeniem online"
                                width={1200}
                                height={789}
                                className="rounded-2xl shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}