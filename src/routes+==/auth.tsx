import { RouteObject } from "react-router-dom";

import ForgotPassword from "@/pages/authentication/forgot-passowrd";
import ResetPassword from "@/pages/authentication/reset-password";
import SignIn from "@/pages/authentication/signin";
import SignUp from "@/pages/authentication/signup";
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
                element: <SignUp />,
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
                element: <ResetPassword />,
            },
        ],
    },
];
