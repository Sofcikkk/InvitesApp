import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PersonalizationSection from "@/components/landing/PersonalizationSection";
import ManagementSection from "@/components/landing/ManagementSection";
import DemoSection from "@/components/landing/DemoSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import CreatorSection from "@/components/landing/CreatorSection";
import PricingSection from "@/components/landing/PricingSection";
import HybridSection from "@/components/landing/HybridSection";
import CTASection from "@/components/landing/CTASection";
import ContactSection from "@/components/landing/ContactSection"; // Import nowej sekcji

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <UseCasesSection />
            <PersonalizationSection />
            <ManagementSection />
            <DemoSection />
            <ReviewsSection />
            <CreatorSection />
            <PricingSection />
            <HybridSection />
            <CTASection />
            <ContactSection /> {/* Dodanie nowej sekcji */}
        </>
    );
}