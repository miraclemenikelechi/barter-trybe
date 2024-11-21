import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { DelayedSuspense } from "@/components/lazy";
import DashboardLayout from "@/views/dashboard";

const LazyDashboard = lazy(() => import("@/pages/dashboard"));
const LazyAnalytics = lazy(() => import("@/pages/analytics"));

export const business_OWNER: RouteObject[] = [
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: (
                    <DelayedSuspense
                        children={<LazyDashboard />}
                        delay={3000}
                        fallback={<div>Loading...</div>}
                    />
                ),
            },
            {
                path: "analytics",
                element: (
                    <DelayedSuspense
                        children={<LazyAnalytics />}
                        delay={3000}
                        fallback={<div>Loading...</div>}
                    />
                ),
            },
            {
                path: "customers",
                element: <div>Customers</div>,
            },
            {
                path: "sales",
                element: <div>Sales</div>,
            },
            {
                path: "community",
                element: <div>Community</div>,
            },
        ],
    },
];
