import "./index.scss";

import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Mechanism from "./components/mechanism";
import Partners from "./components/partners";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";

export default function Page() {
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
}
