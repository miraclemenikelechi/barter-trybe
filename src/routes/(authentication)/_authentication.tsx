import { createFileRoute } from "@tanstack/react-router";

import AuthLayout from "@/views/auth";

export const Route = createFileRoute("/(authentication)/_authentication")({
    component: AuthLayout,
});
