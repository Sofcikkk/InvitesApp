import { Sparkles, Users, MessageSquareText, Gift, Images, Map, Wallet, BarChart, Wand2, Table } from 'lucide-react';

const features = [
    {
        icon: Sparkles,
        title: 'Piękne Szablony',
        description: 'Wybieraj spośród dziesiątek profesjonalnie zaprojektowanych szablonów i dopasuj je do stylu swojego wydarzenia.',
        color: 'text-amber-500',
    },
    {
        icon: Users,
        title: 'Zarządzanie Gośćmi (RSVP)',
        description: 'Śledź potwierdzenia w czasie rzeczywistym i w prosty sposób importuj listę gości z pliku Excel.',
        color: 'text-blue-500',
    },
    {
        icon: MessageSquareText,
        title: 'Powiadomienia SMS',
        description: 'Automatyzuj wysyłkę zaproszeń, przypomnień o RSVP i informacji na 7 dni przed wielkim dniem.',
        color: 'text-cyan-500',
    },
    {
        icon: Gift,
        title: 'Wskazówki Prezentowe',
        description: 'Zasugeruj gościom preferencje prezentowe w subtelny sposób, używając eleganckich ikonek i krótkich opisów.',
        color: 'text-red-500',
    },
    {
        icon: Images,
        title: 'Galerie Zdjęć',
        description: 'Po zakończeniu uroczystości, stwórz piękną galerię ze zdjęciami, aby dzielić się wspomnieniami ze wszystkimi gośćmi.',
        color: 'text-purple-500',
    },
    {
        icon: Map,
        title: 'Mapa i Harmonogram',
        description: 'Dodaj interaktywną mapę dojazdu i szczegółowy plan dnia, aby wszyscy goście byli doskonale poinformowani.',
        color: 'text-teal-500',
    },
    {
        icon: Wallet,
        title: 'Zarządzanie Budżetem',
        description: 'Kontroluj wydatki i planuj koszty dzięki wbudowanemu menedżerowi budżetu, by nic Cię nie zaskoczyło.',
        color: 'text-lime-500',
    },
    {
        icon: BarChart,
        title: 'Zaawansowane Statystyki',
        description: 'Sprawdzaj, kto otworzył zaproszenie i jak często je odwiedza, aby mieć pełen obraz zaangażowania gości.',
        color: 'text-rose-500',
    },
    {
        icon: Wand2,
        title: 'Interaktywne Elementy',
        description: 'Ułatw gościom życie! Dodaj ankiety (np. o piosenki), przycisk "Dodaj do Kalendarza" i odliczanie do wielkiego dnia.',
        color: 'text-violet-500',
    },
];

export default function FeaturesSection() {
    return (
        <section id="funkcje" className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Platforma do zadań specjalnych</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Wszystko, czego potrzebujesz, by Twoje wydarzenie było perfekcyjnie zorganizowane i niezapomniane.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className={`text-4xl ${feature.color} mb-4`}>
                                <feature.icon size={40} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                    {/* Dodatkowa, wyróżniona karta */}
                    <div className="lg:col-span-3 bg-sky-50 p-8 rounded-xl border border-sky-200 flex flex-col md:flex-row items-center gap-8">
                        <div className="text-6xl text-sky-500 shrink-0">
                            <Table size={60} strokeWidth={2} />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <h3 className="text-xl font-bold">Interaktywny Planer Stołów</h3>
                                <span className="text-xs font-bold text-amber-800 bg-amber-200 px-3 py-1 rounded-full">
                  DOSTĘPNE WKRÓTCE
                </span>
                            </div>
                            <p className="text-slate-600 mt-2">
                                Koniec z kartką i ołówkiem! Na podstawie listy gości z systemu, rozsadź wszystkich wirtualnie na sali. Dowolnie dodawaj i ustawiaj stoły, a następnie metodą przeciągnij i upuść przypisuj gości do miejsc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


