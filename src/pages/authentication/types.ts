import {
    ButtonHTMLAttributes,
    HTMLAttributes,
    InputHTMLAttributes,
} from "react";
import { z } from "zod";

import { ForgotPasswordSchema, SigninSchema } from "./utils/validation";

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

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordSchema>;

export type ForgotPasswordResponse = {
    message: string;
    data: {
        email: string;
        token: string;
    };
};
