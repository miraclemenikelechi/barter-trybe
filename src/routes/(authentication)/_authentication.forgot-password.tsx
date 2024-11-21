import { createFileRoute } from "@tanstack/react-router";

import ForgotPassword from "@/pages/authentication/forgot-passowrd";

export const Route = createFileRoute(
    "/(authentication)/_authentication/forgot-password"
)({
    component: ForgotPassword,
});
