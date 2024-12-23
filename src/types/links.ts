import { FC } from "react";

export interface Link {
    href: string;
    title: string;
}

export type DASHBOARD_PAGE_NAVIGATION = Link;

export type DASHBOARD_NAVIGATION = Link & {
    icon: FC<{ color: string }>;
};
