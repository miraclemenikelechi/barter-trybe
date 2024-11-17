import { z } from "zod";

export const SigninSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SignupSchema = z.object({});

export const ForgotPasswordSchema = z.object({
    email: z.string().email("Invalid email"),
});
