import { createFileRoute } from "@tanstack/react-router";

import Analytics from "@/pages/analytics";

export const Route = createFileRoute("/(app)/_app/analytics/_layout")({
    component: Analytics,
});
