import { Fragment } from "react";

export default function Component() {
    return (
        <Fragment>
            <main className="dashboard-summary__top">
                <ul>
                    {[...Array(8)].map(function (value, index) {
                        return (
                            <li
                                key={index}
                                className="dashboard-summary__top__item"
                            >
                                <span>{value}</span>
                            </li>
                        );
                    })}
                </ul>
            </main>

            <footer className="dashboard-summary__bottom">
                <h3>AI Recommendations</h3>
                <ul>
                    {[].map(function (value, index) {
                        return (
                            <li
                                key={index}
                                className="dashboard-summary__bottom__item"
                            >
                                <span>{value}</span>
                            </li>
                        );
                    })}
                </ul>
            </footer>
        </Fragment>
    );
}
