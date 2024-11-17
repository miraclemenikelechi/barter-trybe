import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import { forgotPasswordAction } from "../utils/forgot-password";

export function useForgotPasswordMutation() {
    return useMutation({
        mutationFn: forgotPasswordAction,

        onSuccess: function (data) {
            toast.success(data.message);
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
