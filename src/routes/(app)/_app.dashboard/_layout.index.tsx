import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app/dashboard/_layout/")({
    component: RouteComponent,
});

function RouteComponent() {
    return "Hello /(app)/_app/dashboard/!";
}
