import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AdvantagesSection from './components/AdvantagesSection';
import UseCasesSection from './components/UseCasesSection';
import DemoSection from './components/DemoSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
    return (
        <div className="text-brand-dark">
            <Header />
            <main>
                <AnimatedSection>
                    <HeroSection />
                </AnimatedSection>
                <AnimatedSection>
                    <ProblemSection />
                </AnimatedSection>
                <AnimatedSection>
                    <SolutionSection />
                </AnimatedSection>
                <AnimatedSection>
                    <AdvantagesSection />
                </AnimatedSection>
                <AnimatedSection>
                    <UseCasesSection />
                </AnimatedSection>
                <AnimatedSection>
                    <DemoSection />
                </AnimatedSection>
                <AnimatedSection>
                    <PricingSection />
                </AnimatedSection>
                <AnimatedSection>
                    <FaqSection />
                </AnimatedSection>
                <AnimatedSection>
                    <CtaSection />
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
};

export default App;