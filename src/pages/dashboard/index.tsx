import "./index.scss";

import { Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import { cn } from "@/lib/utils";

import { isActiveLink } from "./utils/active-link";

export default function Page() {
    const { setTitle } = useDashboardPagesTitle();
    const matchRoute = useMatchRoute();

    useEffect(() => {
        setTitle("Dashboard");
    }, [setTitle]);

    const activeLink = {
        summary: !!matchRoute({ to: "/dashboard" }),
        charts: !!matchRoute({ to: "/dashboard/charts" }),
    };

    return (
        <section className="dashboard">
            <header className="dashboard__header">
                <nav className="dashboard__navigation">
                    <Link
                        to={"/dashboard"}
                        className={cn(isActiveLink(activeLink.summary))}
                    >
                        <span>Summary</span>
                    </Link>
                    <Link
                        to={"/dashboard/charts"}
                        className={cn(isActiveLink(activeLink.charts))}
                    >
                        <span>Charts</span>
                    </Link>
                </nav>

                {activeLink.summary ? <span>stuff here temp</span> : null}
            </header>
            {/* <main className="dashboard__main"></main>
            <footer className="dashboard__footer"></footer> */}

            <Outlet />
        </section>
    );
}
