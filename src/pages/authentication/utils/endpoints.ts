import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";
import { sleep } from "@/utils/sleep";

import {
    ResendVerificationEmailRequest,
    ResendVerificationEmailResponse,
    SignupRequest,
    SignupResponse,
    VerifyTokenRequest,
    VerifyTokenResponse,
} from "../types";

export const API = {
    SIGN_UP: function () {
        const navigate = useNavigate({ from: "/signup" });

        return useMutation({
            mutationFn: async function (request: SignupRequest) {
                return await makeRequest<SignupResponse>({
                    data: {
                        businessname: request.businessName,
                        businesstype: request.businessType,
                        email: request.businessEmail,
                        password: request.password,
                    },
                    method: APP_CONSTANTS.ENDPOINTS.SIGN_UP
                        .METHOD as HttpMethod,
                    url: APP_CONSTANTS.ENDPOINTS.SIGN_UP.URL,
                });
            },

            onSuccess: async function (data, variables) {
                toast.success(data.message);
                await sleep(1500);
                navigate({
                    to: "/verify",
                    state: {
                        verifyEmail: { email: variables.businessEmail },
                    },
                });
            },

            onError: async function (error: Error) {
                if (axios.isAxiosError(error)) {
                    toast.error(error.response?.data.message);
                } else {
                    console.error(error);
                }
            },
        });
    },

    VERIFY_TOKEN: function () {
        return useMutation({
            mutationFn: async function (request: VerifyTokenRequest) {
                return await makeRequest<VerifyTokenResponse>({
                    data: {
                        verificationCode: request.token,
                        email: request.email,
                    },
                    method: APP_CONSTANTS.ENDPOINTS.VERIFY_TOKEN
                        .METHOD as HttpMethod,
                    url: APP_CONSTANTS.ENDPOINTS.VERIFY_TOKEN.URL,
                });
            },

            onSuccess: async function (data) {
                toast.success(data.message);
            },

            onError: async function (error: Error) {
                if (axios.isAxiosError(error)) {
                    toast.error(error.response?.data.message);
                } else {
                    console.error(error);
                }
            },
        });
    },

    RESEND_VERIFICATION_EMAIL: function () {
        return useMutation({
            mutationFn: async function (
                request: ResendVerificationEmailRequest
            ) {
                return await makeRequest<ResendVerificationEmailResponse>({
                    url: APP_CONSTANTS.ENDPOINTS.RESEND_VERIFICATION_EMAIL.URL,
                    method: APP_CONSTANTS.ENDPOINTS.RESEND_VERIFICATION_EMAIL
                        .METHOD as HttpMethod,
                    data: request,
                });
            },

            onSuccess: async function (data) {
                toast.success(data.message);
            },

            onError: async function (error: Error) {
                if (axios.isAxiosError(error)) {
                    toast.error(error.response?.data.message);
                } else {
                    console.error(error);
                }
            },
        });
    },
};
