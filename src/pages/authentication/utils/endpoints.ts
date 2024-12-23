import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";
import { sleep } from "@/utils/sleep";

import { useApiMutation } from "../hooks/mutation";
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

        return useApiMutation(
            {
                METHOD: APP_CONSTANTS.ENDPOINTS.SIGN_UP.METHOD as HttpMethod,
                URL: APP_CONSTANTS.ENDPOINTS.SIGN_UP.URL,
            },
            {
                onSuccess: async function (data: SignupResponse, variables) {
                    toast.success(data.message);
                    await sleep(1500);
                    navigate({
                        to: "/verify",
                        state: {
                            verifyEmail: {
                                email: variables.businessEmail as string,
                            },
                        },
                    });
                },
            },
            function (variables: Record<string, unknown>) {
                const signupRequest = variables as SignupRequest;
                return {
                    businessname: signupRequest.businessName,
                    businesstype: signupRequest.businessType,
                    email: signupRequest.businessEmail,
                    password: signupRequest.password,
                };
            }
        );
    },

    VERIFY_TOKEN: function () {
        const navigate = useNavigate();

        return useApiMutation(
            {
                URL: APP_CONSTANTS.ENDPOINTS.VERIFY_TOKEN.URL,
                METHOD: APP_CONSTANTS.ENDPOINTS.VERIFY_TOKEN
                    .METHOD as HttpMethod,
            },
            {
                onSuccess: async function (data: VerifyTokenResponse) {
                    toast.success(data.message);
                    await sleep(1500);
                    navigate({ to: "/login" });
                },
            },
            function (variables: VerifyTokenRequest) {
                return {
                    verificationCode: variables.token,
                    email: variables.email,
                };
            }
        );
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
