import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import { signupAction } from "../utils/signup";

export function useSignupMutation() {
    return useMutation({
        mutationFn: signupAction,

        onSuccess: function (data, variables) {
            console.log(data);
            console.log(variables);
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
