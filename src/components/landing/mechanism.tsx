import { MechanismLine } from "@/assets/icons";
import { MECHANISM_STEPS } from "@/lib/landing-page.config";
import { purifyMarkup } from "@/utils/purify-markup";

export default function Component() {
    return (
        <section className="home__mechanism">
            <div className="home__mechanism__wrapper">
                <section className="home__mechanism__left">
                    <div>
                        <figure>
                            <MechanismLine />
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

                <section className="home__mechanism__right">
                    <h3>how barterTrybe works for you</h3>
                    <span>
                        <img src="/qr.png" alt="" />
                    </span>

                    <hr />

                    <p>
                        Bartertrybe simplifies business management for Nigerian
                        SMEs. Ditch manual entry with our scannable QR codes!
                        Track sales, gain AI insights, and connect with other
                        entrepreneurs. Enjoy features to unlock even more
                        growth. Sign up today!
                    </p>
                </section>
            </div>
        </section>
    );
}
