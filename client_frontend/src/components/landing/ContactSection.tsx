'use client'; // Ten komponent jest interaktywny, więc oznaczamy go jako kliencki.

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        message: '',
        privacy: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Tutaj w przyszłości będzie logika wysyłania formularza do API
        console.log('Dane formularza:', formData);
        alert('Dziękujemy za wiadomość! (Funkcjonalność w budowie)');
    };

    return (
        <section id="kontakt" className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Masz pytania? Skontaktuj się z nami.</h2>
                    <p className="mt-4 text-lg text-slate-600">Jesteśmy do Twojej dyspozycji. Odpowiemy na wszystkie pytania tak szybko, jak to możliwe.</p>
                </div>

                <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
                    {/* Kolumna z informacjami */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Informacje kontaktowe</h3>
                            <div className="space-y-4">
                                <a href="mailto:kontakt@zaproszenia.app" className="flex items-center gap-4 group">
                                    <div className="bg-white p-3 rounded-xl text-sky-600 group-hover:bg-sky-100 transition border border-slate-200">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">kontakt@zaproszenia.app</p>
                                        <p className="text-slate-500">Napisz do nas e-mail</p>
                                    </div>
                                </a>
                                <a href="tel:+48573569077" className="flex items-center gap-4 group">
                                    <div className="bg-white p-3 rounded-xl text-sky-600 group-hover:bg-sky-100 transition border border-slate-200">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">+48 573 569 077</p>
                                        <p className="text-slate-500">Zadzwoń w godzinach pracy</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Dane firmy</h3>
                            <div className="text-slate-600 space-y-1">
                                <p><span className="font-semibold text-slate-700">Nazwa:</span> PRO AGE sp. z o.o.</p>
                                <p><span className="font-semibold text-slate-700">Adres:</span> ul. Pana Cogito 11, 31-419 Kraków</p>
                                <p><span className="font-semibold text-slate-700">NIP:</span> 945 206 00 05</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Godziny pracy</h3>
                            <div className="text-slate-600">
                                <p><span className="font-semibold text-slate-700">Poniedziałek - Piątek:</span> 10:00 - 18:00</p>
                                <p><span className="font-semibold text-slate-700">Sobota - Niedziela:</span> Nieczynne</p>
                            </div>
                        </div>
                    </div>

                    {/* Kolumna z formularzem */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="font-semibold text-slate-700">Imię i nazwisko</label>
                                    <input type="text" id="contact-name" name="name" required onChange={handleChange} value={formData.name} className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="font-semibold text-slate-700">Adres e-mail</label>
                                    <input type="email" id="contact-email" name="email" required onChange={handleChange} value={formData.email} className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="contact-topic" className="font-semibold text-slate-700">Temat wiadomości</label>
                                    <select id="contact-topic" name="topic" required onChange={handleChange} value={formData.topic} className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none bg-white">
                                        <option value="" disabled>Wybierz temat...</option>
                                        <option value="zaproszenia_papierowe">Zapytanie o zaproszenia papierowe</option>
                                        <option value="wsparcie_techniczne">Wsparcie techniczne</option>
                                        <option value="platnosci_faktury">Kwestie płatności i faktur</option>
                                        <option value="wspolpraca">Propozycja współpracy</option>
                                        <option value="inne">Inne</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="font-semibold text-slate-700">Twoja wiadomość</label>
                                    <textarea id="contact-message" name="message" rows={5} required onChange={handleChange} value={formData.message} className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"></textarea>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="privacy-policy" name="privacy" required onChange={handleChange} checked={formData.privacy} className="h-5 w-5 rounded mt-0.5 text-sky-600 focus:ring-sky-500 border-slate-300" />
                                    <label htmlFor="privacy-policy" className="text-sm text-slate-600">
                                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie. Zapoznałem/am się z <Link href="/polityka-prywatnosci" className="text-sky-600 hover:underline">Polityką Prywatności</Link>.
                                    </label>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-amber-500 text-white p-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg">Wyślij wiadomość</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}