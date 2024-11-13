import { FC } from "react";

export type NavigationLink = {
    href: string; label: string;
};

export type Feature = {
    icon: FC;
    title: string;
    description: string;
};