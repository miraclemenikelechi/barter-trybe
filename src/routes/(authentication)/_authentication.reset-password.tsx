import { createFileRoute } from "@tanstack/react-router";

import ResetPassword from "@/pages/authentication/reset-password";

export const Route = createFileRoute(
    "/(authentication)/_authentication/reset-password"
)({
    component: ResetPassword,
});
