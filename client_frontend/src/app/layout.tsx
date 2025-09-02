import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// POPRAWKA: Używamy czcionki "Plus Jakarta Sans" i przypisujemy jej klasę do body.
// To rozwiązuje błędy '--font-geist-sans' i '--font-geist-mono'.
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin-ext"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "zaproszenia.app | Stwórz e-Zaproszenia, które Robią Wrażenie!",
    description: "Twórz i zarządzaj interaktywnymi zaproszeniami na śluby, urodziny i inne wydarzenia.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="!scroll-smooth">
        <body className={`${jakarta.className} bg-slate-50 text-slate-800`}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}