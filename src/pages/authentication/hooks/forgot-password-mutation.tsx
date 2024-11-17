import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { sleep } from "@/utils/sleep";

import { forgotPasswordAction } from "../utils/forgot-password";

export function useForgotPasswordMutation() {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: forgotPasswordAction,

        onSuccess: async function (data, variables) {
            toast.success(data.message);
            await sleep(2000);
            navigate("../verify", { state: { email: variables.email } });
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
