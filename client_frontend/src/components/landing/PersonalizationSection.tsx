import { Paintbrush, Camera, ShieldCheck } from 'lucide-react'; // POPRAWKA: PaintBrush -> Paintbrush

const personalizationFeatures = [
    {
        icon: Paintbrush, // POPRAWKA: PaintBrush -> Paintbrush
        title: 'Palety kolorów i czcionki',
        description: 'Wybieraj spośród setek kombinacji lub stwórz własną, aby idealnie dopasować wygląd do motywu przewodniego.',
    },
    {
        icon: Camera,
        title: 'Własne zdjęcia i wideo',
        description: 'Dodaj osobisty akcent, wgrywając własne zdjęcia lub krótki film powitalny dla gości.',
    },
    {
        icon: ShieldCheck,
        title: 'Logo i branding firmowy',
        description: 'Organizujesz event firmowy? Z łatwością dodasz logo swojej firmy i dostosujesz zaproszenie do identyfikacji wizualnej marki.',
    },
];

export default function PersonalizationSection() {
    return (
        <section id="personalizacja" className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Wizualna reprezentacja panelu */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1 bg-slate-100 rounded-lg p-4 space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500">KOLORY</p>
                                        <div className="flex gap-2 mt-2">
                                            <div className="w-6 h-6 rounded-full bg-rose-500 border-2 border-blue-500 ring-2 ring-white"></div>
                                            <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                                            <div className="w-6 h-6 rounded-full bg-amber-500"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500">CZCIONKA</p>
                                        <div className="mt-2 bg-white rounded p-2 text-sm shadow-sm">Playfair Display</div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500">ZDJĘCIA</p>
                                        <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center h-16 text-slate-400">
                                            <Camera size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 bg-slate-50 rounded-lg p-4">
                                    <div className="w-full bg-white rounded-md shadow-inner h-full p-4">
                                        <p className="font-serif text-xl font-bold text-slate-800">Anna & Kamil</p>
                                        <div className="w-full h-12 bg-rose-200 rounded my-2"></div>
                                        <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                                        <div className="w-full h-2 bg-slate-200 rounded mt-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Opis funkcji */}
                    <div>
                        <p className="font-semibold text-sky-600">TWOJE ZAPROSZENIE, TWOJE ZASADY</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">Stwórz zaproszenie, które jest w 100% Twoje.</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Nasza platforma to więcej niż szablony. Dajemy Ci pełną swobodę w tworzeniu zaproszenia, które idealnie odzwierciedla charakter Twojego wydarzenia. Zmieniaj, modyfikuj i dopasowuj każdy element.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {personalizationFeatures.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-3">
                                    <div className="text-amber-500 mt-1 shrink-0">
                                        <feature.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}