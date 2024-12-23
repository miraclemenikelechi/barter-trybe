import { createFileRoute } from "@tanstack/react-router";

import AnalyticsProductPage from "@/pages/analytics/products";

export const Route = createFileRoute("/(app)/_app/analytics/_layout/")({
    component: AnalyticsProductPage,
});
