import { useRef } from "react";
import Slider, { Settings } from "react-slick";

import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { TESTIMONIES } from "@/lib/landing.config";

export default function Component() {
    const settings: Settings = {
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        draggable: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        swipeToSlide: false,
        variableWidth: true,
    };

    const sliderRef = useRef<Slider | null>(null);

    return (
        <section className="home__testimonials" id="testimonials">
            <div className="home__testimonials__wrapper">
                <h3>what people say about us</h3>

                <Slider {...settings} ref={sliderRef}>
                    {TESTIMONIES.map(function (value, index) {
                        return (
                            <article key={index}>
                                <div className="home__testimonials__testimonial">
                                    <p>{value.content}</p>

                                    <hr />

                                    <section>
                                        <span>
                                            <img
                                                src={value.image}
                                                alt={value.name + " image"}
                                            />
                                        </span>

                                        <div>
                                            <span>{value.name}</span>
                                            <span>{value.job}</span>
                                        </div>
                                    </section>
                                </div>
                            </article>
                        );
                    })}
                </Slider>

                <div className="home__testimonials__control">
                    <button onClick={() => sliderRef.current?.slickPrev()}>
                        <i>
                            <ArrowLeft />
                        </i>
                    </button>

                    <button onClick={() => sliderRef.current?.slickNext()}>
                        <i>
                            <ArrowRight />
                        </i>
                    </button>
                </div>
            </div>
        </section>
    );
}
