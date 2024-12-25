import { Link } from "@tanstack/react-router";

import { FOOTER_LINKS, FOOTER_SOCIALS } from "@/lib/landing-page.config";

export default function Component() {
    return (
        <footer className="home__footer">
            <div className="home__footer__wrapper">
                <section className="home__footer__top">
                    <span>
                        <img src="/logo.png" alt="logo" />
                    </span>

                    <ul>
                        {FOOTER_SOCIALS.map(function (value, index) {
                            return (
                                <li key={index}>
                                    <Link to={value.href}>
                                        <i>
                                            <value.icon />
                                        </i>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <hr />

                <section className="home__footer__bottom">
                    <span>
                        &copy; {new Date().getFullYear()} BarterTrybe. All
                        rights reserved.
                    </span>

                    <ul>
                        {FOOTER_LINKS.map(function (value, index) {
                            return (
                                <li key={index}>
                                    <Link to={value.href}>{value.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
        </footer>
    );
}
