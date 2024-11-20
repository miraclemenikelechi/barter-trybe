import { useContext } from "react";

import { DashboardPagesTitleContext } from "@/contexts/dashboard-pages-title";

export function useDashboardPagesTitle() {
    const context = useContext(DashboardPagesTitleContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useDashboardPagesTitle must be used within a DashboardPagesTitleContextProvider"
        );
    }

    return context;
}
