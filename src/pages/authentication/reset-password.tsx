import "./index.scss";

import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { PasswordResetCheck } from "@/assets/icons";

import FormButton from "./components/button";
import FormInput from "./components/input";
import { useForm } from "./hooks/useForm";
import { ResetPasswordSchema } from "./utils/validation";

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const { errors, formData, handleChange, handleSubmit } = useForm({
        initialData: { confirmPassword: "", password: "" },
        schema: ResetPasswordSchema,
        onSubmit: function (data) {
            console.log(data);
            setIsSubmitted(true);
        },
    });

    const navigate = useNavigate();

    if (isSubmitted) return <PasswordResetConfirmation />;

    return (
        <section className="reset-password">
            <div className="reset-password__wrapper">
                <header>
                    <h1>Reset Password</h1>
                    <span>Choose a new password for your account</span>
                </header>

                <footer>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            className="reset-password__input"
                            error={errors.password}
                            label="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            type="password"
                            value={formData.password}
                        />

                        <FormInput
                            className="reset-password__input"
                            error={errors.confirmPassword}
                            label="confirm password"
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            type="password"
                            value={formData.confirmPassword}
                        />

                        <FormButton
                            type="submit"
                            filled={true}
                            label="Reset Password"
                            className="reset-password__button"
                        />
                    </form>

                    <FormButton
                        className="reset-password__button"
                        label="Back to Login"
                        onClick={() => navigate("../login")}
                        type="button"
                    />
                </footer>
            </div>
        </section>
    );
}

function PasswordResetConfirmation() {
    const navigate = useNavigate();

    return (
        <section className="reset-password">
            <div className="reset-password__wrapper">
                <header>
                    <h1 className="text-center">Password Reset Success</h1>
                </header>

                <footer>
                    <i>
                        <PasswordResetCheck />
                    </i>

                    <FormButton
                        className="reset-password__button"
                        filled={true}
                        label="Login"
                        onClick={() => navigate("../login")}
                        type="button"
                    />
                </footer>
            </div>
        </section>
    );
}
