import "@styles/pages/dashboard.scss";

import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import DashboardPageNavigation from "@/components/dashboard-page-navigation-link";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import type { ILink } from "@/types";

const pageNavigation: ILink[] = [
    {
        href: "/dashboard",
        title: "Summary",
    },
    {
        href: "/dashboard/charts",
        title: "Charts",
    },
];

export const Route = createFileRoute("/(app)/_app/dashboard/_layout")({
    component: function View() {
        const { setTitle } = useDashboardPagesTitle();
        const matchRoute = useMatchRoute();

        useEffect(() => {
            setTitle("Dashboard");
        }, [setTitle]);

        return (
            <section className="dashboard">
                <header className="dashboard__header">
                    <nav className="dashboard__navigation">
                        <DashboardPageNavigation links={pageNavigation} />
                    </nav>

                    {matchRoute({ to: "/dashboard" }) ? (
                        <span>stuff here temp</span>
                    ) : null}
                </header>

                <Outlet />
            </section>
        );
    },
});
