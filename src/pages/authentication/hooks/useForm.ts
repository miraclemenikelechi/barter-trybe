import { ChangeEvent, FormEvent, useState } from "react";
import { ZodSchema } from "zod";

type UseFormProps<T> = {
    initialData: T;
    schema: ZodSchema<T>;
    onSubmit: (data: T) => void;
};

export function useForm<T>({ initialData, schema, onSubmit }: UseFormProps<T>) {
    const [formData, setFormData] = useState<T>(initialData);
    const [errors, setErrors] = useState<Record<string, string>>({});

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

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        /**
         * Validate user signin data using SigninSchema.
         */
        const result = schema.safeParse(formData);

        if (!result.success) {
            const validationErrors: Record<string, string> = {};

            result.error.errors.forEach(function (error) {
                if (error.path[0])
                    validationErrors[error.path[0] as string] = error.message;
            });

            setErrors(validationErrors);
            return;
        }

        /**
         * Trigger signin mutation with validated user data.
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
