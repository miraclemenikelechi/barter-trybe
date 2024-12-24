import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAuthentication } from "@/hooks/authentication";
import { useHydration } from "@/hooks/hydration";
import DashboardLayout from "@/views/dashboard";

export const Route = createFileRoute("/(app)/_app")({
    component: function Page() {
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

        return <DashboardLayout />;
    },
});
