import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

import DashboardNavigation from "@/components/dashboard-navigation";
import { useAuthentication } from "@/hooks/authentication";
import { useDashboardPagesTitle } from "@/hooks/dashboard-pages-title";
import ProtectedRoute from "@/views/protected";

export const Route = createFileRoute("/(app)/_app")({
/**
 * Layout component that serves as a wrapper for protected routes within the application.
 * Utilizes dashboard navigation and displays the current dashboard page title.
 * Includes a logout button to handle user logout and navigate to the login page.
 * Renders its children components inside a protected route to ensure authentication.
 * 
 * Dependencies:
 * - useNavigate from @tanstack/react-router for navigation.
 * - useDashboardPagesTitle to retrieve the current dashboard page title.
 * - useAuthentication to handle user authentication actions, including logout.
 * 
 * Children:
 * - ProtectedRoute ensures only authenticated users can access the wrapped content.
 * - DashboardNavigation provides navigational links for dashboard features.
 * - Outlet serves as a placeholder for nested routes.
 */

    component: function Layout() {
        const navigate = useNavigate();

        const { title } = useDashboardPagesTitle();
        const { logout } = useAuthentication();

        /**
         * Handles user logout by calling the logout function from authentication context.
         * On successful logout, it navigates the user to the login page.
         */
        function handleLogout() {
            /**
             * Call the logout function and handle the promise.
             * If the logout is successful, navigate the user to the login page.
             * If an error occurs, display a toast notification with the error message.
             */
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
