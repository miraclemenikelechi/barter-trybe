import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { useServer } from "@/hooks/server";
import { APP_CONSTANTS } from "@/lib/constants";
import FormButton from "@/pages/authentication/components/button";
import FormInput from "@/pages/authentication/components/input";
import { useForm } from "@/pages/authentication/hooks/useForm";
import {
    ForgotPasswordRequest,
    ForgotPasswordResponse,
} from "@/pages/authentication/types";
import { ForgotPasswordSchema } from "@/pages/authentication/utils/validation";
import { HttpMethod } from "@/utils/make-requests";
import { sleep } from "@/utils/sleep";

export const Route = createFileRoute(
    "/(authentication)/_authentication/forgot-password"
)({
    component: function Page() {
        const navigate = useNavigate({ from: "/forgot-password" });

        const { mutate, isPending } = useServer(
            {
                URL: APP_CONSTANTS.ENDPOINTS.RETRIEVE_PASSWORD_TOKEN.URL,
                METHOD: APP_CONSTANTS.ENDPOINTS.RETRIEVE_PASSWORD_TOKEN
                    .METHOD as HttpMethod,
            },
            {
                onSuccess: async function (
                    data: ForgotPasswordResponse,
                    variables: ForgotPasswordRequest
                ) {
                    toast.success(data.message);
                    await sleep(500);
                    navigate({
                        to: "/verify",
                        state: {
                            verifyEmail: { email: variables.email },
                            from: "/forgot-password",
                        },
                    });
                },
            }
        );

        const { errors, formData, handleChange, handleSubmit } =
            useForm<ForgotPasswordRequest>({
                initialData: { email: "" },
                schema: ForgotPasswordSchema,
                onSubmit: (data) => mutate(data),
            });

        return (
            <section className="forgot-password">
                <div className="forgot-password__wrapper">
                    <header>
                        <h1>Forgot Password</h1>
                        <span>so we can send you instructions on</span>
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

                            <FormButton
                                type="submit"
                                filled={true}
                                label="Send Reset Link"
                                className="forgot-password__button"
                                disabled={isPending}
                            />
                        </form>

                        <FormButton
                            type="button"
                            label="Back to Login"
                            className="forgot-password__button"
                            onClick={() => navigate({ to: "/login" })}
                        />
                    </footer>
                </div>
            </section>
        );
    },
});
