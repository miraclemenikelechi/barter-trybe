import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { Dashboard_Cube } from "@/assets/icons";
import { DashboardNavigationItem } from "@/types/busniess-owner";

export default function Component() {
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

    return (
        <ul>
            {routes.map(function (value, index) {
                return (
                    <li key={index}>
                        <NavLink
                            to={value.path}
                            className={({ isActive }) =>
                                [
                                    isActive
                                        ? "bg-[var(--orange--100)]"
                                        : "bg-transparent",
                                ].join(" ")
                            }
                        >
                            {({ isActive }) => (
                                <Fragment>
                                    <i>
                                        <value.icon
                                            color={
                                                isActive
                                                    ? "var(--black--500)"
                                                    : "var(--white--100)"
                                            }
                                        />
                                    </i>

                                    <span
                                        className={`${
                                            isActive
                                                ? "text-[var(--black--500)]"
                                                : "text-[var(--white--100)]"
                                        }`}
                                    >
                                        {value.label}
                                    </span>
                                </Fragment>
                            )}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
