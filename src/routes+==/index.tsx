import { RouteObject } from "react-router-dom";

import Home from "@/pages/home";

import { AUTHENTICATION } from "./auth";
import { business_OWNER } from "./business-owner";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    ...AUTHENTICATION,
    ...business_OWNER,
];
