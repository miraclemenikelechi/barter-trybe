import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContextProvider from "@/contexts";
import { ROUTES } from "@/routes";

const router = createBrowserRouter(ROUTES, {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});

export default function App() {
    return (
        <Fragment>
            <ContextProvider>
                <RouterProvider
                    router={router}
                    future={{
                        v7_startTransition: true,
                    }}
                />
            </ContextProvider>
        </Fragment>
    );
}
