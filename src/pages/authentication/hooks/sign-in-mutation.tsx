import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import { signinAction } from "../utils/signin";

/**
 * Custom hook for handling signin mutations.
 *
 * @returns Mutation hook with signin functionality.
 */
export function useSigninMutation() {
    return useMutation({
        mutationFn: signinAction,

        onSuccess: function (data, variables, context) {
            console.log(data);
            console.log(variables);
            console.log(context);
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
