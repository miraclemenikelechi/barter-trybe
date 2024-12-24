import { useNavigate } from "@tanstack/react-router";
import { ReactNode, useEffect } from "react";

import { useAuthentication } from "@/hooks/authentication";
import { useHydration } from "@/hooks/hydration";

export default function Layout({ children }: { children: ReactNode }) {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuthentication();
    const isHydrated = useHydration();

    useEffect(() => {
        if (!isAuthenticated && isHydrated) {
            navigate({ to: "/login", replace: true });
        }
    }, [isAuthenticated, navigate, isHydrated]);

    if (!isAuthenticated) {
        return null;
    }

    return children;
}
