import "./index.scss";

import { Link } from "react-router-dom";

import FormButton from "./components/button";
import FormInput from "./components/input";
import { useSignin } from "./hooks/useSignin";

export default function Page() {
    const { errors, handleChange, handleSubmit, userData, isLoading } =
        useSignin();

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
                            value={userData.email}
                        />

                        <FormInput
                            className="signin__input"
                            error={errors.password}
                            label="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            type="password"
                            value={userData.password}
                        />

                        <Link to={""}>Forgot Password?</Link>

                        <FormButton
                            type="submit"
                            filled={true}
                            label="Login"
                            className="signin__button"
                            disabled={isLoading}
                        />
                    </form>

                    <div>
                        <span>Don't have an account?</span>
                        <Link to={""}>Sign Up</Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
