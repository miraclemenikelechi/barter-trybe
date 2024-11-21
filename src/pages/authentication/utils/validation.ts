import { z } from "zod";

export const SigninSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SignupSchema = z.object({
    businessLogo: z
        .instanceof(File, { message: "A valid file is required" })
        .refine(
            (file) =>
                ["image/png", "image/jpg", "image/jpeg"].includes(file.type),
            { message: "File must be an image (PNG, JPG, or JPEG)" }
        )
        .nullable(),

    businessEmail: z.string().email("Invalid email address"),

    businessName: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(50, { message: "Name must be at most 50 characters" }),
    businessType: z.string().min(1, { message: "Business Type is required" }),

    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),

    businessLocation: z
        .string()
        .min(3, { message: "Location must be at least 3 characters" })
        .max(100, { message: "Location must be at most 100 characters" })
        .nullable(),
});

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
