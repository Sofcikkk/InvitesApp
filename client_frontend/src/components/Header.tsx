'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // POPRAWKA: Dodano linki do Szablonów i Kontaktu
    const navLinks = [
        { href: '/#funkcje', label: 'Możliwości' },
        { href: '/#szablony', label: 'Szablony' },
        { href: '/#opinie', label: 'Opinie' },
        { href: '/#cennik', label: 'Cennik' },
        { href: '/#kontakt', label: 'Kontakt' },
        { href: '/login', label: 'Zaloguj się' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-slate-900">
                            zaproszenia.app
                        </Link>
                    </div>

                    {/* Nawigacja dla desktopu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-slate-900 transition">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Przycisk CTA */}
                    <div className="hidden md:block">
                        <Link href="/#cennik" className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition shadow-md">
                            Zacznij tworzyć
                        </Link>
                    </div>

                    {/* Przycisk menu mobilnego */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobilne */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-slate-200">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-slate-900 transition py-2">
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/#cennik" onClick={() => setIsMenuOpen(false)} className="block bg-amber-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition mt-2">
                        Zacznij Tworzyć
                    </Link>
                </div>
            )}
        </header>
    );
}
