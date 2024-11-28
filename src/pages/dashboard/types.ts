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
