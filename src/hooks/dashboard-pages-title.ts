import { createContext, useContext } from "react";

import type { DashboardPagesTitleContextType } from "@/types";

export const DashboardPagesTitleContext =
    createContext<DashboardPagesTitleContextType | null>(null);

export function useDashboardPagesTitle() {
    const context = useContext(DashboardPagesTitleContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useDashboardPagesTitle must be used within a DashboardPagesTitleContextProvider"
        );
    }

    return context;
}
