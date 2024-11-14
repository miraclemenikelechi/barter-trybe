import { Link } from "react-router-dom";

import { LogoPre } from "@/assets/icons";

export default function Component() {
    return (
        <section className="home__partners">
            <div className="home__partners__wrapper">
                <h3>trusted by the best</h3>

                <ul>
                    {[...Array(8)].map(function () {
                        return (
                            <li>
                                <i>
                                    <LogoPre />
                                </i>
                            </li>
                        );
                    })}
                </ul>

                <section>
                    <h3>
                        sign up for barterTrybe, take your busniess to the next
                        level and <br /> experience the difference
                    </h3>

                    <Link to={""}>get started</Link>
                </section>
            </div>
        </section>
    );
}
