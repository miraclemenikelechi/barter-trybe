import { FEATURES } from "../config";

export default function Component() {
    return (
        <section className="home__features">
            <div className="home__features__wrapper">
                <h3>supercharge your busniess with powerful features</h3>

                <ul>
                    {FEATURES.map(function (value, index) {
                        return (
                            <li key={index}>
                                <i>
                                    <value.icon />
                                </i>

                                <div>
                                    <span>{value.title}</span>
                                    <p>{value.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
