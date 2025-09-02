'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
    const [backendStatus, setBackendStatus] = useState('Łączenie...');

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/health');

                if (!response.ok) {
                    throw new Error(`Błąd HTTP! Status: ${response.status}`);
                }

                const data = await response.json();
                setBackendStatus(`Połączono! Status: ${data.status}, Wiadomość: "${data.message}"`);
            } catch (error) {
                console.error("Nie udało się połączyć z backendem:", error);
                setBackendStatus('Błąd połączenia z backendem. Sprawdź logi kontenerów i upewnij się, że backend działa.');
            }
        };

        fetchStatus();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-5xl font-extrabold text-slate-900">
                Witaj w zaproszenia.app
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                To jest miejsce na Twoją stronę główną (Landing Page).
            </p>
            <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-slate-200 max-w-2xl mx-auto">
                <h2 className="font-bold text-xl text-slate-800">Status połączenia z API</h2>
                <p className="mt-2 text-slate-600 font-mono p-4 bg-slate-100 rounded-md break-words">
                    {backendStatus}
                </p>
            </div>
        </div>
    );
}