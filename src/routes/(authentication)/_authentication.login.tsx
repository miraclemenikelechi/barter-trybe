import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

import { useAuthenticationContext } from "@/hooks/authentication";
import FormButton from "@/pages/authentication/components/button";
import FormInput from "@/pages/authentication/components/input";
import { useForm } from "@/pages/authentication/hooks/useForm";
import { SigninRequest } from "@/pages/authentication/types";
import { SigninSchema } from "@/pages/authentication/utils/validation";

export const Route = createFileRoute("/(authentication)/_authentication/login")(
    {
        component: function Page() {
            const [isPending, setIsPending] = useState<boolean>(false);
            const navigate = useNavigate();
            const { login } = useAuthenticationContext();

            const { errors, formData, handleChange, handleSubmit } =
                useForm<SigninRequest>({
                    initialData: {
                        email: "",
                        password: "",
                    },
                    schema: SigninSchema,
                    onSubmit: async (data) => {
                        setIsPending(true);
                        // login(data.email, data.password)
                        //     .then(function () {
                        //         toast.success(
                        //             "You have successfully logged in!"
                        //         );
                        //         navigate({ to: "/dashboard" });
                        //     })
                        //     .catch(function (error) {
                        //         toast.error(error.response.data.message);
                        //     })
                        //     .finally(function () {
                        //         setIsPending(false);
                        //     });

                        try {
                            await login(data.email, data.password);
                            toast.success("You have successfully logged in!");
                            navigate({ to: "/dashboard" });
                        } catch (error) {
                            if (axios.isAxiosError(error))
                                toast.error(
                                    error.response?.data.message ||
                                        "An error occurred. Please try again later."
                                );
                        } finally {
                            setIsPending(false);
                        }
                    },
                });

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
