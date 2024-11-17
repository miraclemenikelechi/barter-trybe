import "./index.scss";

import FormButton from "./components/button";
import FormInput from "./components/input";
import { useForgotPasswordMutation } from "./hooks/forgot-password-mutation";
import { useForm } from "./hooks/useForm";
import { ForgotPasswordRequest } from "./types";
import { ForgotPasswordSchema } from "./utils/validation";
import { useNavigate } from "react-router-dom";

export default function Page() {
    const navigate = useNavigate();

    const { mutate, isPending } = useForgotPasswordMutation();

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
                        onClick={() => navigate("../login")}
                    />
                </footer>
            </div>
        </section>
    );
}
