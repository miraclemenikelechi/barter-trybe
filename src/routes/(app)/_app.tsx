import { createFileRoute } from "@tanstack/react-router";

import DashboardLayout from "@/views/dashboard";

export const Route = createFileRoute("/(app)/_app")({
    component: DashboardLayout,
});
