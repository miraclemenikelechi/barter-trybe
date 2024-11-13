import "./index.scss";

import Header from "./components/header";

export default function Page() {
    return (
        <section className="home">
            <div className="home__wrapper">
                <Header />
                <main></main>
                <footer></footer>
            </div>
        </section>
    );
}
