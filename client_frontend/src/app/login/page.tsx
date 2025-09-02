'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';

// Komponent dla animowanego tła
const AnimatedBackground = () => (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute w-[80px] h-[80px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '25%', animationDelay: '0s' }}></div>
        <div className="absolute w-[20px] h-[20px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '10%', animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute w-[20px] h-[20px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '70%', animationDelay: '4s' }}></div>
        <div className="absolute w-[60px] h-[60px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '40%', animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute w-[20px] h-[20px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '65%', animationDelay: '0s' }}></div>
        <div className="absolute w-[110px] h-[110px] bg-amber-500/10 rounded-2xl animate-float" style={{ left: '75%', animationDelay: '3s' }}></div>
        <div className="absolute w-[150px] h-[150px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '35%', animationDelay: '7s' }}></div>
        <div className="absolute w-[25px] h-[25px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '50%', animationDelay: '15s', animationDuration: '45s' }}></div>
        <div className="absolute w-[15px] h-[15px] bg-amber-500/10 rounded-2xl animate-float" style={{ left: '20%', animationDelay: '2s', animationDuration: '35s' }}></div>
        <div className="absolute w-[150px] h-[150px] bg-sky-500/10 rounded-2xl animate-float" style={{ left: '85%', animationDelay: '0s', animationDuration: '11s' }}></div>
    </div>
);

export default function LoginPage() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Symulujemy logowanie
        setTimeout(() => {
            setIsLoading(false);
            alert('Logowanie w budowie!');
        }, 2000);
    };

    return (
        <>
            <AnimatedBackground />
            <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-160px)] px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-100">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-slate-900">Zaloguj się do panelu</h1>
                            <p className="mt-2 text-slate-600">Wpisz swoje dane, aby zarządzać zaproszeniem.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Adres e-mail</label>
                                <input type="email" id="email" name="email" required autoComplete="email" className="w-full mt-2 p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-400 transition" />
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-semibold text-slate-700">Hasło</label>
                                    {/* POPRAWKA: Usunięto 'legacyBehavior' i zagnieżdżony tag <a> */}
                                    <Link href="/reset-password" className="text-sm text-sky-600 hover:underline">
                                        Nie pamiętasz hasła?
                                    </Link>
                                </div>
                                <div className="relative mt-2">
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        required
                                        autoComplete="current-password"
                                        className="w-full p-3 pr-10 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-400 transition"
                                    />
                                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 hover:text-slate-800 transition-colors">
                                        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center items-center gap-2 bg-amber-500 text-white p-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg disabled:bg-amber-300 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <LoaderCircle className="animate-spin" />
                                            <span>Logowanie...</span>
                                        </>
                                    ) : (
                                        'Zaloguj się'
                                    )}
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-center text-sm text-slate-600">
                            Nie masz jeszcze konta?{' '}
                            {/* POPRAWKA: Usunięto 'legacyBehavior' i zagnieżdżony tag <a> */}
                            <Link href="/#cennik" className="font-semibold text-sky-600 hover:underline">
                                Stwórz je teraz
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
