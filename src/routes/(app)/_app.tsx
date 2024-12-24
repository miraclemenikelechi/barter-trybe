import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

import DashboardNavigation from "@/components/dashboard-navigation";
import { useAuthentication } from "@/hooks/authentication";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import ProtectedRoute from "@/views/protected";

export const Route = createFileRoute("/(app)/_app")({
    component: function Page() {
        const navigate = useNavigate();

        const { title } = useDashboardPagesTitle();
        const { logout } = useAuthentication();

        function handleLogout() {
            logout()
                .then(function () {
                    navigate({ to: "/login", replace: true });
                })

                .catch(function (error) {
                    if (axios.isAxiosError(error))
                        toast.error(
                            error.response?.data.message ||
                                "An error occurred. Please try again later."
                        );
                });
        }

        return (
            <ProtectedRoute>
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
            </ProtectedRoute>
        );
    },
});
