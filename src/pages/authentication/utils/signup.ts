import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";

import { SignupRequest, SignupResponse } from "../types";

export async function signupAction(request: SignupRequest) {
    return await makeRequest<SignupResponse>({
        url: APP_CONSTANTS.ENDPOINTS.SIGN_UP.URL,
        method: APP_CONSTANTS.ENDPOINTS.SIGN_UP.METHOD as HttpMethod,
        data: request,
    });
}
