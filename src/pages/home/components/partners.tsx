import { Link } from "@tanstack/react-router";

import { LogoPre } from "@/assets/icons";

export default function Component() {
    return (
        <section className="home__partners">
            <div className="home__partners__wrapper">
                <h3>trusted by the best</h3>

                <ul>
                    {[...Array(8)].map(function () {
                        return (
                            <li key={Math.random()}>
                                <i>
                                    <LogoPre />
                                </i>
                            </li>
                        );
                    })}
                </ul>

                <section>
                    <h3>
                        sign up for barterTrybe, take your business to the next
                        level and <br /> experience the difference
                    </h3>

                    <Link to={"."}>get started</Link>
                </section>
            </div>
        </section>
    );
}
