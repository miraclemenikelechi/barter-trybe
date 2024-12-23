import "./index.scss";

import { Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

import DashboardPageNavigation from "@/components/dashboard-page-navigation-link";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import { cn } from "@/lib/utils";
import { DASHBOARD_PAGE_NAVIGATION } from "@/types/links";

const pageNavigation: DASHBOARD_PAGE_NAVIGATION[] = [
    {
        href: "/analytics",
        title: "Products",
    },
    {
        href: "/analytics/categories",
        title: "Categories",
    },
];

export default function Page() {
    const { setTitle } = useDashboardPagesTitle();

    useEffect(() => {
        setTitle("Analytics");
    }, [setTitle]);

    return (
        <section className={cn("analytics")}>
            <header className={cn("analytics__header")}>
                <nav className={cn("analytics__navigation")}>
                    <DashboardPageNavigation links={pageNavigation} />
                </nav>
            </header>

            <Outlet />
        </section>
    );
}
