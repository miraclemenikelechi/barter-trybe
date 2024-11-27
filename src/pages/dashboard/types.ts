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
    title: string;
    products: string[];
};
