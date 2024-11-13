import { FEATURE_CONNECT, FEATURE_INSIGHTS, FEATURE_SALES, FEATURE_TRUST } from "@/assets/icons";

import { Feature, NavigationLink, Step } from "./types";

export const NAVIGATION_LINKS: NavigationLink[] = [
    { href: "", label: "home" },
    { href: "", label: "features" },
    { href: "", label: "pricing" },
    { href: "", label: "testimonials" },
];

export const FEATURES: Feature[] = [
    {
        icon: FEATURE_INSIGHTS,
        title: "AI-Powered Insights",
        description: "Gain valuable customer trends, product performance & sales forecasts."
    },
    {
        icon: FEATURE_SALES,
        title: "Effortless Sales Tracking",
        description: "Ditch manual entries! Use unique scan codes to digitize your sales data."
    },
    {
        icon: FEATURE_TRUST,
        title: "Build Trust & Credibility",
        description: "Earn a Trust Score based on customer reviews and performance."
    },
    {
        icon: FEATURE_CONNECT,
        title: "Connect & Grow Your Business",
        description: "Network with other entrepreneurs and explore new opportunities."
    },
];

export const MECHANISM_STEPS: Step[] = [
    {
        after: "Register Your Business",
        before: "",
        content: "1"
    },
    {
        after: "",
        before: "Get Your Unique <br> Scan Code",
        content: "2"
    },
    {
        after: "Customers Scan Qr <br> and fill form",
        before: "",
        content: "3"
    },
    {
        after: "",
        before: "Track Sales <br> with Ease",
        content: "4"
    },
    {
        after: "Unlock AI-powered <br> Insights",
        before: "",
        content: "5"
    },
];