import { fakerEN_NG as faker } from "@faker-js/faker";

import { Dashboard_Revenue } from "@/assets/icons";
import { APP_CONSTANTS } from "@/lib/constants";
import type {
    IChartFilter,
    IDashboardChartsGeneralSummaryFilter,
    IDashboardSummary,
    IDashboardSummaryTopProducts,
} from "@/types";
import { generateChartData, generateWeeks } from "@/utils/dashboard-page.utils";

export const DASHBOARD_SUMMARY: IDashboardSummary[] = [
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

export const DASHBOARD_TOP_PRODUCTS: IDashboardSummaryTopProducts[] = [
    {
        icon: Dashboard_Revenue,
        products: Array.from({ length: 10 }, () => faker.commerce.product()),
        title: "Top Products",
    },
    {
        icon: Dashboard_Revenue,
        products: Array.from({ length: 10 }, () => faker.commerce.product()),
        title: "Top Products",
    },
];

export const GENERAL_SUMMARY: IDashboardChartsGeneralSummaryFilter = {
    thisWeek: [
        {
            isMoney: true,
            title: "Total Sales",
            value: faker.number.int({ max: 100000 }),
        },
        {
            isMoney: true,
            title: "Average Order Value",
            value: faker.number.int({ max: 10000 }),
        },
        {
            isMoney: false,
            title: "Customers",
            value: faker.number.int({ max: 500 }),
        },
        {
            isMoney: false,
            title: "New Customers",
            value: faker.number.int({ max: 50 }),
        },
    ],
    thisMonth: [
        {
            isMoney: true,
            title: "Total Sales",
            value: faker.number.int({ max: 500000 }),
        },
        {
            isMoney: true,
            title: "Average Order Value",
            value: faker.number.int({ max: 20000 }),
        },
        {
            isMoney: false,
            title: "Customers",
            value: faker.number.int({ max: 2000 }),
        },
        {
            isMoney: false,
            title: "New Customers",
            value: faker.number.int({ max: 300 }),
        },
    ],
    thisYear: [
        {
            isMoney: true,
            title: "Total Sales",
            value: faker.number.int({ max: 1000000 }),
        },
        {
            isMoney: true,
            title: "Average Order Value",
            value: faker.number.int({ max: 50000 }),
        },
        {
            isMoney: false,
            title: "Customers",
            value: faker.number.int({ max: 10000 }),
        },
        {
            isMoney: false,
            title: "New Customers",
            value: faker.number.int({ max: 2000 }),
        },
    ],
};

export const SALES_TRENDS: IChartFilter = {
    thisWeek: generateChartData({
        labels: APP_CONSTANTS.TIME_FRAMES.DAYS,
        minSales: 100,
        maxSales: 900,
    }),

    thisMonth: generateChartData({
        labels: generateWeeks(),
        minSales: 100,
        maxSales: 9000,
    }),

    thisYear: generateChartData({
        labels: APP_CONSTANTS.TIME_FRAMES.MONTHS,
        minSales: 100,
        maxSales: 90000,
    }),
};

export const REPORT_REVENUE: IChartFilter = {
    thisWeek: generateChartData({
        labels: APP_CONSTANTS.TIME_FRAMES.DAYS,
        minSales: 100,
        maxSales: 900,
    }),

    thisMonth: generateChartData({
        labels: generateWeeks(),
        minSales: 100,
        maxSales: 9000,
    }),

    thisYear: generateChartData({
        labels: APP_CONSTANTS.TIME_FRAMES.MONTHS,
        minSales: 100,
        maxSales: 90000,
    }),
};

export const RETURN_RATE: IChartFilter = {
    thisWeek: generateChartData({
        labels: ["Returning Customers", "New Customers"],
        minSales: 100,
        maxSales: 900,
    }),

    thisMonth: generateChartData({
        labels: ["Returning Customers", "New Customers"],
        minSales: 100,
        maxSales: 9000,
    }),

    thisYear: generateChartData({
        labels: ["Returning Customers", "New Customers"],
        minSales: 100,
        maxSales: 90000,
    }),
};
