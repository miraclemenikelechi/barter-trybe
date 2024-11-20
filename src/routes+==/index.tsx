import { RouteObject } from "react-router-dom";

import Home from "@/pages/home";

import { AUTHENTICATION } from "./auth";
import { BUSNIESS_OWNER } from "./busniess-owner";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    ...AUTHENTICATION,
    ...BUSNIESS_OWNER,
];
