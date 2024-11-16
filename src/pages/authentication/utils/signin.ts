import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";

import { SigninRequest, SigninResponse } from "../types";

export async function signinAction(request: SigninRequest) {
    return await makeRequest<SigninResponse>({
        url: APP_CONSTANTS.ENDPOINTS.SIGN_IN.URL,
        method: APP_CONSTANTS.ENDPOINTS.SIGN_IN.METHOD as HttpMethod,
        data: request,
    });
}
