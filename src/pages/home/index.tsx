import "./index.scss";

import Features from "./components/features";
import Header from "./components/header";

export default function Page() {
    return (
        <section className="home">
            <div className="home__wrapper">
                <Header />

                <main className="home__main">
                    <div className="home__main__wrapper">
                        <Features />
                    </div>
                </main>

                <footer></footer>
            </div>
        </section>
    );
}
