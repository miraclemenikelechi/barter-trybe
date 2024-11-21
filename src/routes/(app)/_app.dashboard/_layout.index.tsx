import { createFileRoute } from "@tanstack/react-router";

import Summary from "@/pages/dashboard/summary";

export const Route = createFileRoute("/(app)/_app/dashboard/_layout/")({
    component: Summary,
});
