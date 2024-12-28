import "@styles/pages/analytics.scss";

import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import DashboardPageNavigation from "@/components/dashboard-page-navigation-link";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import { cn } from "@/lib/utils";
import type { ILink } from "@/types";

const pageNavigation: ILink[] = [
    {
        href: "/analytics",
        title: "Products",
    },
    {
        href: "/analytics/categories",
        title: "Categories",
    },
];

export const Route = createFileRoute("/(app)/_app/analytics/_layout")({
    component: function Component() {
        const matchRoute = useMatchRoute();
        const { setTitle } = useDashboardPagesTitle();

        const showPageNavigation =
            matchRoute({ to: "/analytics" }) ||
            matchRoute({ to: "/analytics/categories" });

        useEffect(() => {
            setTitle("Analytics");
        }, [setTitle]);

        return (
            <section className={cn("analytics")}>
                {showPageNavigation ? (
                    <header className={cn("analytics__header")}>
                        <nav className={cn("analytics__navigation")}>
                            <DashboardPageNavigation links={pageNavigation} />
                        </nav>
                    </header>
                ) : null}

                <Outlet />
            </section>
        );
    },
});
