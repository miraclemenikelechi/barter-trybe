import "./index.scss";

import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
    ChangeEvent,
    Fragment,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";

import { truncateEmail } from "@/utils/truncate-email";

import FormButton from "./components/button";
import { useForgotPasswordMutation } from "./hooks/forgot-password-mutation";

let currentInputIndex = 0;

export default function Page() {
    const { mutate, isPending } = useForgotPasswordMutation();

    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const [activeInputIndex, setActiveInputIndex] = useState<number>(0);

    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleOTP(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const OTP: string[] = [...otp];

        OTP[currentInputIndex] = value.substring(value.length - 1);

        if (!value) setActiveInputIndex(currentInputIndex - 1);
        else setActiveInputIndex(currentInputIndex + 1);

        setOtp(OTP);
    }

    function handleKeyDown(
        event: KeyboardEvent<HTMLInputElement>,
        index: number
    ) {
        currentInputIndex = index;

        if (event.key === "Backspace")
            setActiveInputIndex(currentInputIndex - 1);
    }

    useEffect(
        function () {
            inputRef.current?.focus();
        },
        [activeInputIndex]
    );

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
                    <form action="">
                        <div>
                            {otp.map(function (_, index) {
                                return (
                                    <Fragment key={index}>
                                        <input
                                            className="verify-email__input"
                                            onChange={handleOTP}
                                            onKeyDown={(event) =>
                                                handleKeyDown(event, index)
                                            }
                                            ref={
                                                index === activeInputIndex
                                                    ? inputRef
                                                    : null
                                            }
                                            type="number"
                                            value={otp[index]}
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
                            label="Verify"
                            type="submit"
                            disabled={isPending}
                        />
                    </form>

                    <FormButton
                        className="verify-email__button"
                        filled={false}
                        label="Resend Email"
                        type="button"
                        onClick={() => mutate({ email })}
                        disabled={isPending}
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
