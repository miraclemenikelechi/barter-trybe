import { RouteObject } from "react-router-dom";

import Home from "@/pages/home";

import { AUTHENTICATION } from "./auth";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    ...AUTHENTICATION,
];
