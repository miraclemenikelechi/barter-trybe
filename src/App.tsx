import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Fragment } from "react";
import { Toaster } from "sonner";

import ContextProvider from "@/contexts";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export default function App() {
    return (
        <Fragment>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
            <Toaster richColors />
        </Fragment>
    );
}
