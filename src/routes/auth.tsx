import { RouteObject } from "react-router-dom";

import AuthLayout from "@/views/auth";

export const AUTHENTICATION: RouteObject[] = [
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <>oauth</>,
            },
            {
                path: "login",
                element: <>login</>,
            },
            {
                path: "signup",
                element: <>signup</>,
            },
            {
                path: "verify",
                element: <>verify</>,
            },
            {
                path: "forgot-password",
                element: <>forgot password</>,
            },
            {
                path: "reset-password",
                element: <>reset password</>,
            },
        ],
    },
];
