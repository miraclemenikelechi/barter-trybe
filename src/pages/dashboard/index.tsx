import "./index.scss";

import { Outlet, useMatchRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import DashboardPageNavigation from "@/components/dashboard-page-navigation-link";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import { DASHBOARD_PAGE_NAVIGATION } from "@/types";

const pageNavigation: DASHBOARD_PAGE_NAVIGATION[] = [
    {
        href: "/dashboard",
        title: "Summary",
    },
    {
        href: "/dashboard/charts",
        title: "Charts",
    },
];

export default function Page() {
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
}
