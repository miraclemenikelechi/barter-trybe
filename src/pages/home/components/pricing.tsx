import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

import { Check } from "@/assets/icons";

import { PRICING_PLANS } from "../config";

export default function Component() {
    return (
        <section className="home__pricing" id="pricing">
            <div className="home__pricing__wrapper">
                <h3>
                    unlock your full busniess potential with barterTrybe pro
                </h3>

                <ul>
                    {PRICING_PLANS.map(function (value, index) {
                        return (
                            <li key={index}>
                                <strong>{value.title}</strong>

                                <span>{value.description}</span>

                                <b>
                                    {value.price === 0 ? (
                                        <span>Free</span>
                                    ) : (
                                        <Fragment>
                                            <sup>₦</sup>
                                            <span>
                                                {value.price.toLocaleString()}/
                                            </span>
                                            <sub>m</sub>
                                        </Fragment>
                                    )}
                                </b>

                                {value.href ? (
                                    <Link to={value.href}>get started</Link>
                                ) : null}

                                {value.features.map(function (value, index) {
                                    return (
                                        <p key={index}>
                                            <i>
                                                <Check />
                                            </i>

                                            <span>{value}</span>
                                        </p>
                                    );
                                })}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
