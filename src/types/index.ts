import { ApexOptions } from "apexcharts";
import { FC } from "react";

export interface Link {
    href: string;
    title: string;
}

export interface DROPDOWN_OPTION {
    label: string;
    value: string;
}

export type DASHBOARD_NAVIGATION = Link & {
    icon: FC<{ color: string }>;
};

export type DASHBOARD_NAVIGATION_ITEM = {
    icon: FC<{ color: string }>;
    label: string;
    path: string;
};

export type DASHBOARD_PAGE_NAVIGATION = Link;

export interface DASHBOARD_PAGE_CHARTS_TABLE {
    name: string;
    price: number;
    remaining: number;
    sold: number;
}

export type ChartDataProps = {
    series: ApexOptions["series"];
    categories: string[];
};
