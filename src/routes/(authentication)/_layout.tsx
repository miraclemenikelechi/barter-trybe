import { createFileRoute } from "@tanstack/react-router";

import DashboardLayout from "@/views/dashboard";

export const Route = createFileRoute("/(authentication)/_layout")({
    component: DashboardLayout,
});
