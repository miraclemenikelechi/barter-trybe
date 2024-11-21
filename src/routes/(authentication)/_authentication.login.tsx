import { createFileRoute } from "@tanstack/react-router";

import Login from "@/pages/authentication/signin";

export const Route = createFileRoute("/(authentication)/_authentication/login")(
    {
        component: Login,
    }
);
