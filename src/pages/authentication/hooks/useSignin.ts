import { ChangeEvent, FormEvent, useState } from "react";

import { SigninRequest } from "../types";
import { SigninSchema } from "../utils/validation";
import { useSigninMutation } from "./useSigninMutation";

/**
 * Custom hook for handling signin form logic.
 *
 * @returns Object containing signin form state and handlers.
 */
export function useSignin() {
    const [userData, setUserData] = useState<SigninRequest>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const signinMutation = useSigninMutation();

    /**
     * Handles input changes in the signin form.
     *
     * @param event - Change event from input element.
     */
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        /**
         * Clear error message for the changed input.
         */
        setErrors((previous) => ({ ...previous, [event.target.name]: "" }));
    }

    /**
     * Handles signin form submission.
     *
     * @param event - Form submission event.
     */
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        /**
         * Validate user signin data using SigninSchema.
         */
        const result = SigninSchema.safeParse(userData);

        if (!result.success) {
            const validationErrors: Record<string, string> = {};

            result.error.errors.forEach(function (error) {
                if (error.path[0])
                    validationErrors[error.path[0] as string] = error.message;
            });

            setErrors(validationErrors);
            return;
        }

        signinMutation.mutate(result.data, {
            onSuccess: function () {
                console.log(result.data);
            },
        });
    }

    /**
     * Return signin form state and handlers.
     */
    return {
        errors,
        isLoading: signinMutation.isPending,
        userData,
        handleChange,
        handleSubmit,
    };
}
