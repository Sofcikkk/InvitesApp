import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} zaproszenia.app. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/regulamin" className="text-slate-500 hover:text-slate-800">
                            Regulamin
                        </Link>
                        <Link href="/polityka-prywatnosci" className="text-slate-500 hover:text-slate-800">
                            Polityka Prywatności
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}