import { createFileRoute } from "@tanstack/react-router";

import Charts from "@/pages/dashboard/charts";

export const Route = createFileRoute("/(app)/_app/dashboard/_layout/charts")({
    component: Charts,
});
