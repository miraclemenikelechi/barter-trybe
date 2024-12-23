import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
    "/(app)/_app/analytics/_layout/categories"
)({
    component: RouteComponent,
});

function RouteComponent() {
    return "Hello /(app)/_app/analytics/_layout/categories!";
}
