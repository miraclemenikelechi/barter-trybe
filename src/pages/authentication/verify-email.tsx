import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { truncateEmail } from "@/utils/truncate-email";

import FormButton from "./components/button";
import { useForgotPasswordMutation } from "./hooks/forgot-password-mutation";

export default function Page() {
    const location = useLocation();
    const navigate = useNavigate();
    const { mutate, isPending } = useForgotPasswordMutation();

    const email = location.state?.email;

    useEffect(
        function () {
            if (!email) navigate("../forgot-password", { replace: true });
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
                        Didnt recieve the email? Check spam or
                    </span>
                </header>
                <footer>
                    <FormButton
                        className="verify-email__button"
                        filled={true}
                        label="Resend Email"
                        type="button"
                        onClick={() => mutate({ email })}
                        disabled={isPending}
                    />

                    <div>
                        <span>Wrong Email?</span>
                        <Link to={"../forgot-password"}>Change Email</Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
