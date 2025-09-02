'use client'; // Ten komponent jest interaktywny, więc oznaczamy go jako kliencki.

import { useState } from 'react';
import { Text, Lightbulb, LoaderCircle } from 'lucide-react';

type Mode = 'text' | 'theme';

export default function CreatorSection() {
    const [mode, setMode] = useState<Mode>('text');
    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState('Czekam na Twoje instrukcje...');
    const [inputValue, setInputValue] = useState('');

    const handleGenerate = () => {
        if (!inputValue) {
            setOutput('Proszę, wypełnij pole powyżej.');
            return;
        }
        setIsLoading(true);
        setOutput('');
        // Symulujemy wywołanie API z opóźnieniem 2 sekund
        setTimeout(() => {
            if (mode === 'text') {
                setOutput(
                    "Z miłością i radością, pragniemy zaprosić Was na uroczystość naszych zaślubin.\n\n" +
                    "Dołączcie do nas, gdy będziemy ślubować sobie miłość, wierność i szacunek w otoczeniu najbliższych nam osób. Wasza obecność w tym wyjątkowym dniu będzie dla nas najpiękniejszym prezentem."
                );
            } else {
                setOutput(
                    "Oto 3 propozycje motywów na 40. urodziny dla miłośnika podróży:\n\n" +
                    "1. **Wokół Świata w Jeden Wieczór:** Każdy stół reprezentuje inny kraj, z flagami, dekoracjami i potrawami z danego regionu. Goście mogą zbierać 'pieczątki' w paszportach za odwiedzenie każdego 'kraju'.\n\n" +
                    "2. **Przystanek Przygoda:** Dekoracje w stylu vintage, stare mapy, walizki i kompasy. Dress code: podróżnicy i odkrywcy.\n\n" +
                    "3. **Tropikalna Fiesta:** Egzotyczne kwiaty, palmy, koktajle w kokosach i muzyka latynoska. Idealne na letnie przyjęcie w ogrodzie."
                );
            }
            setIsLoading(false);
        }, 2000);
    };

    const handleTabClick = (newMode: Mode) => {
        setMode(newMode);
        setInputValue('');
        setOutput('Czekam na Twoje instrukcje...');
    }

    const getPlaceholder = () => {
        return mode === 'text'
            ? 'np. rustykalne wesele, Anna i Piotr'
            : 'np. 40. urodziny dla miłośnika podróży';
    };

    return (
        <section id="kreator" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Inteligentny Kreator Zaproszeń</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Brakuje Ci weny? Nasz system w kilka sekund stworzy dla Ciebie unikalne teksty i podsunie inspiracje, które zachwycą Twoich gości. Wypróbuj na żywo!
                    </p>
                </div>

                <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex border-b border-slate-200 mb-6">
                            <button
                                onClick={() => handleTabClick('text')}
                                className={`flex items-center gap-2 px-6 py-3 font-semibold border-b-2 transition ${mode === 'text' ? 'text-sky-600 border-sky-600' : 'text-slate-500 border-transparent hover:text-slate-800'}`}
                            >
                                <Text size={20} />
                                <span>Generator Tekstu</span>
                            </button>
                            <button
                                onClick={() => handleTabClick('theme')}
                                className={`flex items-center gap-2 px-6 py-3 font-semibold border-b-2 transition ${mode === 'theme' ? 'text-sky-600 border-sky-600' : 'text-slate-500 border-transparent hover:text-slate-800'}`}
                            >
                                <Lightbulb size={20} />
                                <span>Generator Motywów</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="creator-input" className="font-semibold text-slate-700">
                                    {mode === 'text' ? 'Opisz swoje wydarzenie:' : 'Opisz krótko imprezę:'}
                                </label>
                                <p className="text-sm text-slate-500 mt-1 mb-2">
                                    {mode === 'text' ? 'Podaj kilka słów kluczowych (np. styl, okazja, imiona).' : 'Szukasz inspiracji? Opisz charakter imprezy.'}
                                </p>
                                <input
                                    id="creator-input"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                                    placeholder={getPlaceholder()}
                                />
                            </div>
                            <button
                                onClick={handleGenerate}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg disabled:bg-amber-300 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <LoaderCircle className="animate-spin" />
                                        <span>Generowanie...</span>
                                    </>
                                ) : (
                                    'Generuj'
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl shadow-xl border border-slate-200 relative min-h-[300px] flex items-center justify-center">
                        <div className="text-slate-600 leading-relaxed whitespace-pre-wrap text-center">
                            {isLoading ? <LoaderCircle size={40} className="animate-spin text-sky-500" /> : output}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}