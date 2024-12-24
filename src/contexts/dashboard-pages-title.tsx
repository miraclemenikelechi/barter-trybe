import { ReactNode, useState } from "react";

import { DashboardPagesTitleContext } from "@/hooks/dashboard-pages-title";

export function DashboardPagesTitleContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [title, setTitle] = useState<string | null>(null);

    return (
        <DashboardPagesTitleContext.Provider value={{ title, setTitle }}>
            {children}
        </DashboardPagesTitleContext.Provider>
    );
}
