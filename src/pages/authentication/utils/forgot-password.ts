import { APP_CONSTANTS } from "@/lib/constants";
import { HttpMethod, makeRequest } from "@/utils/make-requests";

import { ForgotPasswordRequest, ForgotPasswordResponse } from "../types";

export async function forgotPasswordAction(request: ForgotPasswordRequest) {
    return await makeRequest<ForgotPasswordResponse>({
        url: APP_CONSTANTS.ENDPOINTS.RETRIEVE_PASSWORD_TOKEN.URL,
        method: APP_CONSTANTS.ENDPOINTS.RETRIEVE_PASSWORD_TOKEN.METHOD as HttpMethod,
        data: request,
    });
}
