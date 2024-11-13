import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContextProvider from "@/contexts";
import { ROUTES } from "@/routes";

export default function App() {
    return (
        <Fragment>
            <ContextProvider>
                <RouterProvider router={createBrowserRouter(ROUTES)} />
            </ContextProvider>
        </Fragment>
    );
}
