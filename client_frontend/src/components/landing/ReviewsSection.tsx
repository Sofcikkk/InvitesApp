import { Star } from 'lucide-react';

const reviews = [
    {
        quote: "Platforma przerosła nasze oczekiwania! Goście byli zachwyceni interaktywnym zaproszeniem, a my mieliśmy wszystko pod kontrolą. Funkcja RSVP i lista prezentów to złoto!",
        author: "Anna i Tomasz K.",
        event: "Wesele, 150 gości",
    },
    {
        quote: "Organizacja 40. urodzin męża była prosta jak nigdy. Stworzenie strony zajęło mi 15 minut, a Inteligentny Kreator napisał idealny tekst zaproszenia. Polecam!",
        author: "Magdalena S.",
        event: "40. Urodziny, 60 gości",
    },
];

const StarRating = () => (
    <div className="flex text-amber-400 mb-4">
        <Star className="fill-current" />
        <Star className="fill-current" />
        <Star className="fill-current" />
        <Star className="fill-current" />
        <Star className="fill-current" />
    </div>
);

export default function ReviewsSection() {
    return (
        <section id="opinie" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Zaufali nam najlepsi</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Zobacz, co mówią o nas klienci, którzy zorganizowali z nami swoje wymarzone uroczystości.
                    </p>
                </div>
                <div className="mt-16 grid lg:grid-cols-2 gap-8">
                    {reviews.map((review) => (
                        <div key={review.author} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <StarRating />
                            <p className="text-slate-700 italic">{review.quote}</p>
                            <div className="mt-4 text-right">
                                <p className="font-bold">{review.author}</p>
                                <p className="text-sm text-slate-500">{review.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}