import { Outlet, useNavigate } from "@tanstack/react-router";

import DashboardNavigation from "@/components/dashboard-navigation";
import { useAuthentication } from "@/hooks/authentication";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";

export default function Component() {
    const navigate = useNavigate();

    const { title } = useDashboardPagesTitle();
    const { logout } = useAuthentication();

    function handleLogout() {
        navigate({ to: "/login", replace: true });
        logout();
    }

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
                    <button onClick={handleLogout}>logout</button>
                </header>

                <footer className="business-owner__footer">
                    <Outlet />
                </footer>
            </div>
        </section>
    );
}
