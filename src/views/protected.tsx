import { useNavigate } from "@tanstack/react-router";
import { ReactNode, useEffect } from "react";

import { useAuthentication } from "@/hooks/authentication";
import { useHydration } from "@/hooks/hydration";

/**
 *  The main layout component for authenticated users.
 *
 *  This component checks the authentication status and redirects unauthenticated users to the login page.
 *  It also ensures that the redirection only happens after the hydration process is complete.
 *
 *  @param children The content to be rendered within the layout.
 */
export default function Layout({ children }: { children: ReactNode }) {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuthentication();
    const isHydrated = useHydration();

    /**
     *  useEffect hook to handle redirection for unauthenticated users.
     *
     *  This effect runs after the component renders and whenever the authentication status or hydration status changes.
     *  If the user is not authenticated and the hydration process is complete, it redirects the user to the login page.
     */
    useEffect(() => {
        if (!isAuthenticated && isHydrated) {
            navigate({ to: "/login", replace: true });
        }
    }, [isAuthenticated, navigate, isHydrated]);

    // If the user is not authenticated, return null to prevent rendering any content.
    if (!isAuthenticated) {
        return null;
    }

    // Render the children content if the user is authenticated.
    return children;
}
