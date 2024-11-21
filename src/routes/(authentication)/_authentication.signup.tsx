import { createFileRoute } from "@tanstack/react-router";

import SignUp from "@/pages/authentication/signup";

export const Route = createFileRoute(
    "/(authentication)/_authentication/signup"
)({
    component: SignUp,
});
