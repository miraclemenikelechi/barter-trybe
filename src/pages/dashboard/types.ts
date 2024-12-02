import { FC } from "react";

export type DASHBOARD_SUMMARY_TYPE = {
    icon: FC;
    isMoney: boolean;
    isProfit: boolean;
    isRating: boolean;
    lastWeek: number;
    prediction: number;
    profit: number;
    thisWeek: number;
    title: string;
};

export type DASHBOARD_TOP_PRODUCTS_TYPE = {
    icon: FC;
    products: string[];
    title: string;
};

export type GENERAL_SUMMARY_TYPE = {
    isMoney: boolean;
    title: string;
    value: number;
};

export type SATISFACTION_TYPE = {
    rating: number;
    percentage: number;
};

export type SALES_TREND_TYPE = {
    thisWeek: SALES_TREND_ITEM_TYPE[];
    thisMonth: SALES_TREND_ITEM_TYPE[];
    thisYear: SALES_TREND_ITEM_TYPE[];
};

export type SALES_TREND_ITEM_TYPE = {
    duration: string;
    sales: number;
    color?: string;
};

export type REPORT_REVENUE_TYPE = {
    thisWeek: REPORT_REVENUE_ITEM_TYPE[];
    thisMonth: REPORT_REVENUE_ITEM_TYPE[];
    thisYear: REPORT_REVENUE_ITEM_TYPE[];
};

export type REPORT_REVENUE_ITEM_TYPE = {
    id: string;
    color?: string;
    data: {
        x: string;
        y: number;
    }[];
};
