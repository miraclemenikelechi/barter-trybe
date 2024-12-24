import {
    ButtonHTMLAttributes,
    HTMLAttributes,
    InputHTMLAttributes,
} from "react";
import { z } from "zod";

import {
    ForgotPasswordSchema,
    ResetPasswordSchema,
    SigninSchema,
    SignupSchema,
} from "./utils/validation";

type MessageWithDataResponse = {
    message: string;
    data: {
        email: string;
        token: string;
    };
};

type MessageResponse = {
    message: string;
};

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    HTMLAttributes<HTMLButtonElement> & {
        filled?: boolean;
        label: string;
    };

export type SigninRequest = z.infer<typeof SigninSchema>;

export type SigninResponse = {
    message: string;
    data: {
        _id: string;
        businessname: string;
        businesstype: string;
        email: string;
        token: string;
        verified: boolean;
    };
};

export type SignoutResponse = MessageResponse & {
    loggedIn: boolean;
};

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordSchema>;

export type ForgotPasswordResponse = MessageWithDataResponse;

export type ResetPasswordRequest = z.infer<typeof ResetPasswordSchema>;

export type SignupRequest = z.infer<typeof SignupSchema>;

export type SignupResponse = MessageResponse;

export type businessOption = {
    label: string;
    value: string;
};

export type ResendVerificationEmailRequest = {
    email: string;
};

export type ResendVerificationEmailResponse = MessageWithDataResponse;

export type VerifyTokenRequest = {
    email: string;
    token: string;
};

export type VerifyTokenResponse = MessageResponse;
