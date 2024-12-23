import { createFileRoute } from "@tanstack/react-router";

import LandingPage from "@/pages/home";

export const Route = createFileRoute("/")({
    component: LandingPage,
});
