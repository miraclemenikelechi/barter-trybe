import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Toaster } from "sonner";

import ContextWrapper from "@/contexts";
import { useAuthenticationContext } from "@/hooks/authentication";
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
    }
}

function ContextProvider() {
    const authentication = useAuthenticationContext();
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
