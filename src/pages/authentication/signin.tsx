import "./index.scss";

import { Link } from "@tanstack/react-router";

import FormButton from "./components/button";
import FormInput from "./components/input";
import { useSigninMutation } from "./hooks/sign-in-mutation";
import { useForm } from "./hooks/useForm";
import { SigninRequest } from "./types";
import { SigninSchema } from "./utils/validation";

export default function Page() {
    const { mutate, isPending } = useSigninMutation();

    const { errors, formData, handleChange, handleSubmit } =
        useForm<SigninRequest>({
            initialData: {
                email: "",
                password: "",
            },
            schema: SigninSchema,
            onSubmit: (data) => mutate(data),
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

                        <Link to={"/forgot-password"}>Forgot Password?</Link>

                        <FormButton
                            type="submit"
                            filled={true}
                            label={isPending ? "Logging In..." : "Log In"}
                            className="signin__button"
                            disabled={isPending}
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
}
