import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Fragment } from "react";
import { Toaster } from "sonner";

import ContextWrapper from "@/contexts";
import { useAuthenticationContext } from "@/hooks/authentication";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({
    routeTree,
    context: { authentication: undefined! },
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
    interface HistoryState {
        verifyEmail?: { email: string };
    }
}

export default function App() {
    return (
        <Fragment>
            <ContextWrapper>
                <ContextProvider />
            </ContextWrapper>
            <Toaster richColors />
        </Fragment>
    );
}

function ContextProvider() {
    const authentication = useAuthenticationContext();
    return <RouterProvider router={router} context={{ authentication }} />;
}
