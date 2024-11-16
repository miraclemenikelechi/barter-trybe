import { useMutation } from "@tanstack/react-query";

import { signinAction } from "../utils/signin";

export function useSigninMutation() {
    return useMutation({ mutationFn: signinAction });
}
