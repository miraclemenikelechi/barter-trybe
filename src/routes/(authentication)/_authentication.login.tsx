import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useTransition } from "react";
import { toast } from "sonner";

import { useAuthentication } from "@/hooks/authentication";
import FormButton from "@/pages/authentication/components/button";
import FormInput from "@/pages/authentication/components/input";
import { useForm } from "@/pages/authentication/hooks/useForm";
import { SigninRequest } from "@/pages/authentication/types";
import { SigninSchema } from "@/pages/authentication/utils/validation";

export const Route = createFileRoute("/(authentication)/_authentication/login")(
    {
        component: function Page() {
            const navigate = useNavigate();
            const [isPending, startTransition] = useTransition();

            // Authentication context to manage user login
            const { login, isAuthenticated } = useAuthentication();

            // Redirect user to dashboard if already authenticated
            useEffect(
                function () {
                    if (isAuthenticated)
                        navigate({ to: "/dashboard", replace: true });
                },
                [isAuthenticated, navigate]
            );

            // Form handling with validation schema
            const { errors, formData, handleChange, handleSubmit } =
                useForm<SigninRequest>({
                    initialData: {
                        email: "",
                        password: "",
                    },
                    schema: SigninSchema,
                    onSubmit: handleLoginAuth,
                });

            function handleLoginAuth(data: SigninRequest) {
                startTransition(() => {
                    login(data.email, data.password)
                        .then(function () {
                            toast.success("You are logged in!");
                            navigate({ to: "/dashboard" });
                        })

                        .catch(function (error) {
                            if (axios.isAxiosError(error))
                                toast.error(
                                    error.response?.data.message ||
                                        "An error occurred. Please try again later."
                                );
                        });
                });
            }

            return (
                <section className="signin">
                    <div className="signin__wrapper">
                        <header className="signin__header">
                            <h1>Login</h1>
                            <span>Welcome Back to BarterTrybe</span>
                        </header>

                        <footer>
                            <form onSubmit={handleSubmit}>
                                <FormInput
                                    className="signin__input"
                                    error={errors.email}
                                    label="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                    type="email"
                                    value={formData.email}
                                />

                                <FormInput
                                    className="signin__input"
                                    error={errors.password}
                                    label="password"
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    type="password"
                                    value={formData.password}
                                />

                                <Link to={"/forgot-password"}>
                                    Forgot Password?
                                </Link>

                                <FormButton
                                    className="signin__button"
                                    disabled={isPending}
                                    filled={true}
                                    label={
                                        isPending ? "Logging In..." : "Log In"
                                    }
                                    type="submit"
                                />
                            </form>

                            <div>
                                <span>Don't have an account?</span>
                                <Link to={"/signup"}>Sign Up</Link>
                            </div>
                        </footer>
                    </div>
                </section>
            );
        },
    }
);
