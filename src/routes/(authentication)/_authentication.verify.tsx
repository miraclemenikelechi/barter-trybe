import { createFileRoute } from "@tanstack/react-router";

import VerifyEmail from "@/pages/authentication/verify-email";

export const Route = createFileRoute(
    "/(authentication)/_authentication/verify"
)({
    component: VerifyEmail,
});
