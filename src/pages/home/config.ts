import {
    FeatureConnect,
    FeatureInsights,
    FeatureSales,
    FeatureTrust,
} from "@/assets/icons";

import { Feature, NavigationLink, PricingPlan, Step, Testimonial } from "./types";

export const NAVIGATION_LINKS: NavigationLink[] = [
    { href: "", label: "home" },
    { href: "", label: "features" },
    { href: "", label: "pricing" },
    { href: "", label: "testimonials" },
];

export const FEATURES: Feature[] = [
    {
        icon: FeatureInsights,
        title: "AI-Powered Insights",
        description:
            "Gain valuable customer trends, product performance & sales forecasts.",
    },
    {
        icon: FeatureSales,
        title: "Effortless Sales Tracking",
        description:
            "Ditch manual entries! Use unique scan codes to digitize your sales data.",
    },
    {
        icon: FeatureTrust,
        title: "Build Trust & Credibility",
        description:
            "Earn a Trust Score based on customer reviews and performance.",
    },
    {
        icon: FeatureConnect,
        title: "Connect & Grow Your Business",
        description:
            "Network with other entrepreneurs and explore new opportunities.",
    },
];

export const MECHANISM_STEPS: Step[] = [
    {
        after: "Register Your Business",
        before: "",
        content: "1",
    },
    {
        after: "",
        before: "Get Your Unique <br> Scan Code",
        content: "2",
    },
    {
        after: "Customers Scan Qr <br> and fill form",
        before: "",
        content: "3",
    },
    {
        after: "",
        before: "Track Sales <br> with Ease",
        content: "4",
    },
    {
        after: "Unlock AI-powered <br> Insights",
        before: "",
        content: "5",
    },
];

export const TESTIMONIES: Testimonial[] = [
    {
        content: `
        BarterTrybe has helped me take charge of my business data, i can now make
        informed decisions and increase profit
        `,
        image: "yusuf.png",
        job: "Hanel Supermarket",
        name: "Ali Yusuf",
    },
    {
        content: `
        BarterTrybe has made it easy for me to track my sales and know where to
        improve upon
        `,
        image: "mike.png",
        job: "Jubilee Mart",
        name: "Mike Mayor",
    },
    {
        content: `
        BarterTrybe has made it easy to get my business analytics, and receive
        proper sales data
        `,
        image: "ugo.png",
        job: "Uche and Sons Global ",
        name: "Uche Mogalu",
    },
    {
        content: `
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
        `,
        image: "doe.png",
        job: "JohnDoe Company",
        name: "John Doe",
    },
    {
        content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur
        veritatis unde deleniti magnam omnis? Explicabo id recusandae commodi ad.
        `,
        image: "doe.png",
        job: "JaneDoe Company",
        name: "Jane Doe",
    },
];


export const PRICING_PLANS: PricingPlan[] = [
    {
        description: "Best for Lorem",
        features: [
            `Feature Here`,
            `Feature Here`,
            `Feature Here`,
        ],
        href: "",
        price: 0,
        title: "barter lite",
    },
    {
        description: "Best for Lorem",
        features: [
            `Feature Here`,
            `Feature Here`,
            `Feature Here`,
        ],
        href: "#",
        price: 1300,
        title: "barter pro",
    },
    {
        description: "Best for Lorem",
        features: [
            `Feature Here`,
            `Feature Here`,
            `Feature Here`,
        ],
        href: "#",
        price: 4000,
        title: "barter max",
    },
];