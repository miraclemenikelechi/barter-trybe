import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";
import { sleep } from "@/utils/sleep";

import { ForgotPasswordRequest, ForgotPasswordResponse } from "../types";
import { forgotPasswordAction } from "../utils/forgot-password";

export function useRetrievePasswordToken() {
    const navigate = useNavigate({ from: "/forgot-password" });

    return useMutation({
        mutationFn: forgotPasswordAction,

        onSuccess: async function (data, variables) {
            toast.success(data.message);
            await sleep(2000);
            navigate({
                to: "/verify",
                state: { verifyEmail: { email: variables.email } },
            });
        },

        onError: function (error: Error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
            } else {
                console.error(error);
            }
        },
    });
}

export const PASSWORD_MUTATIONS = {
    GET_TOKEN: function () {
        return useMutation({
            mutationFn: async function (request: ForgotPasswordRequest) {
                return await makeRequest<ForgotPasswordResponse>({
                    url: APP_CONSTANTS.ENDPOINTS.RETRIEVE_PASSWORD_TOKEN.URL,
                    method: APP_CONSTANTS.ENDPOINTS.RETRIEVE_PASSWORD_TOKEN
                        .METHOD as HttpMethod,
                    data: request,
                });
            },

            onSuccess: function () {},

            onError: function () {},
        });
    },

    VERIFY_TOKEN: function () {
        return useMutation({
            mutationFn: async function () {},
        });
    },
};
