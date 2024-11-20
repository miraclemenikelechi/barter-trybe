import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

import { AuthenticationContextProvider } from "./authentication";
import { DashboardPagesTitleContextProvider } from "./dashboard-pages-title";

const queryClient: QueryClient = new QueryClient();

export default function Component({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthenticationContextProvider>
                <DashboardPagesTitleContextProvider>
                    {children}
                </DashboardPagesTitleContextProvider>
            </AuthenticationContextProvider>
        </QueryClientProvider>
    );
}
