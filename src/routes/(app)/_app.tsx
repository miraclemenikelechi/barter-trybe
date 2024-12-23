import { createFileRoute, redirect } from "@tanstack/react-router";

import DashboardLayout from "@/views/dashboard";

export const Route = createFileRoute("/(app)/_app")({
    beforeLoad: function ({ context, location }) {
        if (!context.authentication.isAuthenticated) {
            throw redirect({
                to: "/login",
                search: { redirect: location.href },
            });
        }
    },

    component: DashboardLayout,
});
