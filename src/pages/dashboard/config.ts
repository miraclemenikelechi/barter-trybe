import { Dashboard_Revenue } from "@/assets/icons";

import {
    DASHBOARD_SUMMARY_TYPE,
    DASHBOARD_TOP_PRODUCTS_TYPE,
    GENERAL_SUMMARY_TYPE,
    SATISFACTION_TYPE,
} from "./types";

export const DASHBOARD_SUMMARY: DASHBOARD_SUMMARY_TYPE[] = [
    {
        icon: Dashboard_Revenue,
        isMoney: true,
        isProfit: true,
        isRating: false,
        lastWeek: 56665665,
        prediction: 18,
        profit: 20,
        thisWeek: 56665665,
        title: "Total Revenue",
    },
    {
        icon: Dashboard_Revenue,
        isMoney: false,
        isProfit: false,
        isRating: false,
        lastWeek: 44,
        prediction: 18,
        profit: 14,
        thisWeek: 35,
        title: "Total Customers",
    },
    {
        icon: Dashboard_Revenue,
        isMoney: false,
        isProfit: true,
        isRating: false,
        lastWeek: 460,
        prediction: 18,
        profit: 20,
        thisWeek: 560,
        title: "Total Sales",
    },
    {
        icon: Dashboard_Revenue,
        isMoney: true,
        isProfit: true,
        isRating: false,
        lastWeek: 56665665,
        prediction: 18,
        profit: 20,
        thisWeek: 56665665,
        title: "Average Order Value",
    },
    {
        icon: Dashboard_Revenue,
        isMoney: false,
        isProfit: false,
        isRating: false,
        lastWeek: 44,
        prediction: 18,
        profit: 14,
        thisWeek: 35,
        title: "New Customers",
    },
    {
        icon: Dashboard_Revenue,
        isMoney: false,
        isProfit: true,
        isRating: true,
        lastWeek: 4.4,
        prediction: 18,
        profit: 20,
        thisWeek: 4.8,
        title: "New Customers",
    },
];

export const DASHBOARD_TOP_PRODUCTS: DASHBOARD_TOP_PRODUCTS_TYPE[] = [
    {
        icon: Dashboard_Revenue,
        products: [
            "Product 1",
            "Product 2",
            "Product 3",
            "Product 4",
            "Product 5",
            "Product 6",
            "Product 7",
            "Product 8",
            "Product 9",
            "Product 10",
        ],
        title: "Top Products",
    },
    {
        icon: Dashboard_Revenue,
        products: [
            "Product 1",
            "Product 2",
            "Product 3",
            "Product 4",
            "Product 5",
            "Product 6",
            "Product 7",
            "Product 8",
            "Product 9",
            "Product 10",
        ],
        title: "Top Products",
    },
];

export const GENERAL_SUMMARY: GENERAL_SUMMARY_TYPE[] = [
    {
        isMoney: true,
        title: "Total Sales",
        value: 56665665,
    },
    {
        isMoney: true,
        title: "Average Order Value",
        value: 566665,
    },
    {
        isMoney: false,
        title: "Customers",
        value: 655,
    },
    {
        isMoney: false,
        title: "New Customers",
        value: 87,
    },
];

export const SATISFACTION: SATISFACTION_TYPE[] = [
    {
        percentage: 78,
        rating: 5,
    },
    {
        percentage: 92,
        rating: 4,
    },
    {
        percentage: 45,
        rating: 3,
    },
    {
        percentage: 61,
        rating: 2,
    },
    {
        percentage: 20,
        rating: 1,
    },
];
