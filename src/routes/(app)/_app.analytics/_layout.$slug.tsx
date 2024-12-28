import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app/analytics/_layout/$slug")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/(app)/_app/analytics/_layout/index/$"!</div>;
}
