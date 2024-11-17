import { RouteObject } from "react-router-dom";

import ForgotPassword from "@/pages/authentication/forgot-passowrd";
import SignIn from "@/pages/authentication/signin";
import VerifyEmail from "@/pages/authentication/verify-email";
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
                element: <VerifyEmail />,
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
