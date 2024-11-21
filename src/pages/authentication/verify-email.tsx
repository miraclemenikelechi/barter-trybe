import "./index.scss";

import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { FormEvent, Fragment, useEffect } from "react";
import { toast } from "sonner";

import { truncateEmail } from "@/utils/truncate-email";

import FormButton from "./components/button";
import { useOtpHandler } from "./hooks/otp";
import { API } from "./utils/endpoints";

export default function Page() {
    const {
        mutate: resendVerification,
        isPending: resendVerificationIsPending,
    } = API.RESEND_VERIFICATION_EMAIL();

    const { mutate: verifyToken, isPending: verifyTokenIsPending } =
        API.VERIFY_TOKEN();

    const navigate = useNavigate();

    const {
        handleChange,
        handleKeyDown,
        handlePaste,
        isFieldDisabled,
        inputRefs,
        isOtpComplete,
        otp,
    } = useOtpHandler(4);

    const state = useRouterState({
        select(state) {
            return state.location.state;
        },
    });

    const email = state.verifyEmail?.email;

    useEffect(
        function () {
            if (!email) navigate({ to: "/login", replace: true });
        },
        [email, navigate]
    );

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!isOtpComplete) {
            toast.error("Please enter the correct OTP");
            return;
        }

        const token = otp.join("");
        verifyToken({ email: email!, token });
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
                                            disabled={isFieldDisabled(index)}
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
                                verifyTokenIsPending ? "Verifying..." : "Verify"
                            }
                            type="submit"
                            disabled={verifyTokenIsPending}
                        />
                    </form>

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

                    <div>
                        <span>Wrong Email?</span>
                        <Link to={"/forgot-password"}>Change Email</Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
