import Image from 'next/image';
import Link from 'next/link';

export default function DemoSection() {
    return (
        <section id="demo" className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-semibold text-sky-600">DOŚWIADCZENIE GOŚCIA</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">Zobacz, co zobaczą Twoi goście.</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Chcesz wiedzieć, jakie wrażenie zrobisz na swoich bliskich? Przygotowaliśmy w pełni interaktywne demo strony zaproszenia. Kliknij i poczuj się jak jeden z zaproszonych gości – zobacz odliczanie, sprawdź harmonogram i przetestuj formularz RSVP.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/demo-zaproszenie" // W przyszłości stworzymy tę podstronę
                                target="_blank"
                                className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition shadow-lg"
                            >
                                Zobacz Interaktywne Demo
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-4 border border-slate-100">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="w-full h-64 rounded-lg overflow-hidden relative">
                                <Image
                                    src="/img/hero.jpg"
                                    alt="Podgląd przykładowego zaproszenia"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}