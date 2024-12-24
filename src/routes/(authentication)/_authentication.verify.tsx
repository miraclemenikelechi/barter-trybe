import {
    createFileRoute,
    Link,
    useNavigate,
    useRouterState,
} from "@tanstack/react-router";
import { FormEvent, Fragment, useEffect } from "react";
import { toast } from "sonner";

import { useServer } from "@/hooks/server";
import { APP_CONSTANTS } from "@/lib/constants";
import FormButton from "@/pages/authentication/components/button";
import { useOtpHandler } from "@/pages/authentication/hooks/otp";
import {
    VerifyTokenRequest,
    VerifyTokenResponse,
} from "@/pages/authentication/types";
import { API } from "@/pages/authentication/utils/endpoints";
import { HttpMethod } from "@/utils/make-requests";
import { sleep } from "@/utils/sleep";
import { truncateEmail } from "@/utils/truncate-email";

export const Route = createFileRoute(
    "/(authentication)/_authentication/verify"
)({
    component: function Page() {
        const navigate = useNavigate();

        const state = useRouterState({
            select(state) {
                return state.location.state;
            },
        });

        const email = state.verifyEmail?.email;
        const isFromForgotPassword = state.from === "/forgot-password";

        const {
            mutate: resendVerification,
            isPending: resendVerificationIsPending,
        } = API.RESEND_VERIFICATION_EMAIL();

        const { mutate: verifyTokenMutate, isPending: verifyTokenIsPending } =
            useServer(
                {
                    URL: APP_CONSTANTS.ENDPOINTS.VERIFY_TOKEN.URL,
                    METHOD: APP_CONSTANTS.ENDPOINTS.VERIFY_TOKEN
                        .METHOD as HttpMethod,
                },
                {
                    onSuccess: async function (data: VerifyTokenResponse) {
                        if (isFromForgotPassword) {
                            toast.success("Password reset verified");
                            await sleep(500);
                            navigate({ to: "/reset-password" });
                            return;
                        }

                        toast.success(data.message);
                        await sleep(500);
                        navigate({ to: "/login" });
                    },
                },
                function (variables: VerifyTokenRequest) {
                    return {
                        verificationCode: variables.token,
                        email: variables.email,
                    };
                }
            );

        const {
            handleChange,
            handleKeyDown,
            handlePaste,
            isFieldDisabled,
            inputRefs,
            isOtpComplete,
            otp,
        } = useOtpHandler(4);

        useEffect(
            function () {
                if (!email) {
                    // navigate({ to: "/login", replace: true });
                    // console.log({ email, isFromForgotPassword });
                    // toast.warning("navigate to forgot password");

                    console.log({ email });
                }

                if (isFromForgotPassword) {
                    console.log({ isFromForgotPassword });
                }

                console.log({ email, isFromForgotPassword });
            },
            [email, navigate, isFromForgotPassword]
        );

        function handleSubmit(event: FormEvent<HTMLFormElement>): void {
            event.preventDefault();

            if (!isOtpComplete) {
                toast.error("Please enter the correct OTP");
                return;
            }

            const token = otp.join("");
            verifyTokenMutate({ email: email!, token });
        }

        if (!email) return null;

        return (
            <section className="verify-email">
                <div className="verify-email__wrapper">
                    <header>
                        <h1>Verify your Email</h1>

                        <span>
                            We have sent a verification token to{" "}
                            <b>{truncateEmail(email)}</b> <br />
                            Didn't recieve the email? Check your spam or junk.
                        </span>
                    </header>
                    <footer>
                        <form onSubmit={handleSubmit}>
                            <div>
                                {otp.map(function (value, index) {
                                    return (
                                        <Fragment key={index}>
                                            <input
                                                className="verify-email__input"
                                                disabled={isFieldDisabled(
                                                    index
                                                )}
                                                onChange={(event) =>
                                                    handleChange(event, index)
                                                }
                                                onKeyDown={(event) =>
                                                    handleKeyDown(event, index)
                                                }
                                                onPaste={handlePaste}
                                                ref={(input) =>
                                                    (inputRefs.current[index] =
                                                        input as HTMLInputElement)
                                                }
                                                type="number"
                                                value={value}
                                            />

                                            {index === otp.length - 1 ? null : (
                                                <span className="w-2 py-0.5 bg-gray-400 rounded-full" />
                                            )}
                                        </Fragment>
                                    );
                                })}
                            </div>

                            <FormButton
                                className="verify-email__button"
                                filled={true}
                                label={
                                    verifyTokenIsPending
                                        ? "Verifying..."
                                        : "Verify"
                                }
                                type="submit"
                                disabled={verifyTokenIsPending}
                            />
                        </form>

                        {isFromForgotPassword ? null : (
                            <FormButton
                                className="verify-email__button"
                                filled={false}
                                label={
                                    resendVerificationIsPending
                                        ? "Resending..."
                                        : "Resend Email"
                                }
                                type="button"
                                onClick={() => resendVerification({ email })}
                                disabled={resendVerificationIsPending}
                            />
                        )}

                        <div>
                            <span>Wrong Email?</span>
                            <Link to={"/forgot-password"}>Change Email</Link>
                        </div>
                    </footer>
                </div>
            </section>
        );
    },
});
