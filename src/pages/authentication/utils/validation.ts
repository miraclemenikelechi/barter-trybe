import { z } from "zod";

export const SigninSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SignupSchema = z.object({});

export const ForgotPasswordSchema = z.object({
    email: z.string().email("Invalid email"),
});

export const ResetPasswordSchema = z
    .object({
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z
            .string()
            .min(6, "Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords don't match",
    });
