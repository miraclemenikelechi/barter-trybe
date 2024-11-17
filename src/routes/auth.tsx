import { RouteObject } from "react-router-dom";

import ForgotPassword from "@/pages/authentication/forgot-passowrd";
import SignIn from "@/pages/authentication/signin";
import AuthLayout from "@/views/auth";

export const AUTHENTICATION: RouteObject[] = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <SignIn />,
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
                element: <ForgotPassword />,
            },
            {
                path: "reset-password",
                element: <>reset password</>,
            },
        ],
    },
];
