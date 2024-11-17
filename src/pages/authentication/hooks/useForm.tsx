import { ChangeEvent, FormEvent, useState } from "react";
import { ZodSchema } from "zod";

type UseFormProps<T> = {
    initialData: T;
    schema: ZodSchema<T>;
    onSubmit: (data: T) => void;
};

/**
 * Custom hook for managing form state and validation.
 *
 * @template T - Type of form data.
 * @param props - Hook configuration options.
 * @returns Object containing form state and handlers.
 */
export function useForm<T>({ initialData, schema, onSubmit }: UseFormProps<T>) {
    const [formData, setFormData] = useState<T>(initialData);

    const [errors, setErrors] = useState<Record<string, string>>({});

    /**
     * Handles input changes in the form.
     *
     * @param event - Change event from input element.
     */
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        /**
         * Clear error message for the changed input.
         */
        setErrors((previous) => ({ ...previous, [event.target.name]: "" }));
    }

    /**
     * Handles form submission.
     *
     * @param event - Form submission event.
     */
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        /**
         * Validate form data using provided Zod schema.
         */
        const result = schema.safeParse(formData);

        if (!result.success) {
            const validationErrors: Record<string, string> = {};

            /**
             * Extract validation errors from result.
             */
            result.error.errors.forEach(function (error) {
                if (error.path[0])
                    validationErrors[error.path[0] as string] = error.message;
            });

            setErrors(validationErrors);
            return;
        }

        /**
         * Trigger submission callback with validated form data.
         */
        onSubmit(result.data);
    }

    return {
        errors,
        formData,
        handleChange,
        handleSubmit,
    };
}
