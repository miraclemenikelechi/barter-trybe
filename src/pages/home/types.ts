import { FC } from "react";

export type NavigationLink = {
    href: string;
    label: string;
};

export type Feature = {
    description: string;
    icon: FC;
    title: string;
};

export type Step = {
    after: string;
    before: string;
    content: string;
};