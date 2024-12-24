import { createFileRoute } from "@tanstack/react-router";

import DashboardLayout from "@/views/dashboard";
import ProtectedRoute from "@/views/protected";

export const Route = createFileRoute("/(app)/_app")({
    component: function Page() {
        return (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        );
    },
});
