import { Link, useMatchRoute } from "@tanstack/react-router";
import { FC } from "react";

import { Dashboard_Cube } from "@/assets/icons";
import { cn } from "@/lib/utils";

type DashboardNavigationItem = {
    icon: FC<{ color: string }>;
    label: string;
    path: string;
};

const routes: DashboardNavigationItem[] = [
    {
        icon: Dashboard_Cube,
        label: "Dashboard",
        path: "dashboard",
    },
    {
        icon: Dashboard_Cube,
        label: "Analytics",
        path: "analytics",
    },
    {
        icon: Dashboard_Cube,
        label: "Customers",
        path: "customers",
    },
    {
        icon: Dashboard_Cube,
        label: "Sales",
        path: "sales",
    },
    {
        icon: Dashboard_Cube,
        label: "Community",
        path: "community",
    },
];

export default function Component() {
    return (
        <ul>
            {routes.map(function (value, index) {
                return (
                    <li key={index}>
                        <NavigationItem {...value} />
                    </li>
                );
            })}
        </ul>
    );
}

function NavigationItem({ icon: Icon, label, path }: DashboardNavigationItem) {
    const matchRoute = useMatchRoute();
    const isActive: boolean = !!matchRoute({
        to: path,
        pending: false,
        fuzzy: true,
    });

    return (
        <Link
            to={path}
            className={[
                isActive ? "bg-[var(--orange--100)]" : "bg-transparent",
            ].join(" ")}
        >
            <i>
                <Icon
                    color={isActive ? "var(--black--500)" : "var(--white--100)"}
                />
            </i>

            <span
                className={cn(
                    isActive
                        ? "text-[var(--black--500)]"
                        : "text-[var(--white--100)]"
                )}
            >
                {label}
            </span>
        </Link>
    );
}
