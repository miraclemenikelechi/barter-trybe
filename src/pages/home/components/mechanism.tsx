import { MECHANISM_LINE } from "@/assets/icons";
import { purifyMarkup } from "@/utils/purify-markup";

import { MECHANISM_STEPS } from "../config";

export default function Component() {
    return (
        <section className="home__mechanism">
            <div className="home__mechanism__wrapper">
                <section className="home__mechanism__left">
                    <div>
                        <figure>
                            <MECHANISM_LINE />
                        </figure>

                        {MECHANISM_STEPS.map(function (value, index) {
                            return (
                                <article key={index}>
                                    <span
                                        dangerouslySetInnerHTML={purifyMarkup({
                                            markup: value.before,
                                        })}
                                    />

                                    <span data-content={value.content} />

                                    <span
                                        dangerouslySetInnerHTML={purifyMarkup({
                                            markup: value.after,
                                        })}
                                    />
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="home__mechanism__right"></section>
            </div>
        </section>
    );
}
