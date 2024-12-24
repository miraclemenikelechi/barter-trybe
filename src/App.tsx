import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Toaster } from "sonner";

import ContextWrapper from "@/contexts";
import { useAuthentication } from "@/hooks/authentication";
import { routeTree } from "@/routeTree.gen";

const queryClient = new QueryClient();

const router = createRouter({
    routeTree,
    context: { authentication: undefined!, queryClient },
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
    interface HistoryState {
        verifyEmail?: { email: string };
        from?: string;
    }
}

function ContextProvider() {
    const authentication = useAuthentication();
    return <RouterProvider router={router} context={{ authentication }} />;
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ContextWrapper>
                <ContextProvider />
            </ContextWrapper>
            <Toaster richColors />
        </QueryClientProvider>
    );
}
