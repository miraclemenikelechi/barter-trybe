import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authentication)/_layout/login")({
    component: RouteComponent,
});

function RouteComponent() {
    return "Hello /(authentication)/login!";
}
