import { FC } from "react";

export type DashboardNavigationItem = {
    icon: FC<{ color: string }>;
    label: string;
    path: string;
};
