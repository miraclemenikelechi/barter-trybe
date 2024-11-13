import { RouteObject } from "react-router-dom";

import Home from "@/pages/home";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
];
