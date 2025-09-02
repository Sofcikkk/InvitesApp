import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            E-zaproszenia, które{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                robią wrażenie.
              </span>
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                            Stwórz wyjątkową stronę dla swojego wydarzenia. Zarządzaj gośćmi, zbieraj potwierdzenia i zachwyć wszystkich interaktywnym zaproszeniem, które zapamiętają na długo.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/#cennik"
                                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition shadow-lg w-full sm:w-auto"
                            >
                                Wybierz Swój Pakiet
                            </Link>
                            <Link
                                href="/#kreator"
                                className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg border border-slate-300 hover:bg-slate-100 transition w-full sm:w-auto"
                            >
                                Wypróbuj Kreator
                            </Link>
                        </div>
                    </div>

                    {/* Mockup telefonu */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[40px] border-[14px] border-slate-900 shadow-2xl overflow-hidden">
                            <Image
                                src="/img/hero.jpg" // Ścieżka do obrazka w folderze /public
                                alt="Para młoda na zaproszeniu"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute top-4 left-4 w-12 h-1.5 bg-slate-700/50 rounded-full"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full">
                                <h2 className="text-3xl font-bold leading-tight">Anna & Jan</h2>
                                <p className="text-amber-300 mt-1">Pobieramy się!</p>
                                <div className="mt-4 border-t border-white/20 pt-4">
                                    <p className="font-semibold">24 Sierpnia, 2026</p>
                                    <div className="flex items-center gap-2 mt-1 text-sm opacity-80">
                                        <span>Pałac w Jabłonnie</span>
                                    </div>
                                </div>
                                <button className="w-full bg-amber-400 text-slate-900 mt-6 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
                                    Potwierdź przybycie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}