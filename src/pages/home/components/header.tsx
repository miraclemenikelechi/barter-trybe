import { Link } from "react-router-dom";

import { NAVIGATION_LINKS } from "../config";

export default function Component() {
    return (
        <header className="home__header">
            <div className="home__header__wrapper">
                <nav className="home__header__navigation">
                    <i className="home__header__logo">
                        <img src="/logo.png" alt="" />
                    </i>

                    <NavigationButtons />

                    <div className="home__header__cta">
                        <Link to={""}>get started</Link>
                    </div>
                </nav>

                <section className="home__header__hero">
                    <h1>unlock actionable insights with BarterTrybe</h1>
                    <p>
                        Transform your busniess with our comprehensive Busniess
                        Intelligence platform
                    </p>
                    <Link to={""} className="home__header__cta">
                        get started
                    </Link>
                </section>
            </div>
        </header>
    );
}

function NavigationButtons() {
    return (
        <ul className="home__header__nav">
            {NAVIGATION_LINKS.map(function (value, index) {
                return (
                    <li key={index}>
                        <Link to={value.href}>{value.label}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
