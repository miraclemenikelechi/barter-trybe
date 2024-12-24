import "@styles/pages/landing.scss";

import { createFileRoute } from "@tanstack/react-router";

import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Mechanism from "@/components/landing/mechanism";
import Partners from "@/components/landing/partners";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";

export const Route = createFileRoute("/")({
    component: function Page() {
        return (
            <section className="home">
                <div className="home__wrapper">
                    <Header />

                    <main className="home__main">
                        <div className="home__main__wrapper">
                            <Features />

                            <Mechanism />

                            <Testimonials />

                            <Pricing />

                            <Partners />
                        </div>
                    </main>

                    <Footer />
                </div>
            </section>
        );
    },
});
