import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";
import { sleep } from "@/utils/sleep";

import { SignupRequest, SignupResponse } from "../types";

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
                console.log(data);
                toast.success(data.message);
                await sleep(2000);
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
};
