import { Outlet } from "@tanstack/react-router";

import DashboardNavigation from "@/components/ui/dashboard-navigation";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";

export default function Component() {
    const { title } = useDashboardPagesTitle();

    return (
        <section className="business-owner">
            <div className="business-owner__wrapper">
                <nav className="business-owner__navigation">
                    <span>
                        <img src="/logo.png" alt="logo" />
                    </span>

                    <DashboardNavigation />
                </nav>

                <header className="business-owner__header">
                    <h1>{title}</h1>
                    <h2>Owner</h2>
                </header>

                <footer className="business-owner__footer">
                    <Outlet />
                </footer>
            </div>
        </section>
    );
}
