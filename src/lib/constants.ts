export const APP_CONSTANTS = {
    NAME: "BarterTrybe",

    API: import.meta.env.VITE_BACKEND_URL,

    ENDPOINTS: {
        SIGN_IN: {
            METHOD: "POST",
            URL: "/auth/login",
        },
        SIGN_UP: {
            METHOD: "POST",
            URL: "/auth/signup",
        },
        RETRIEVE_PASSWORD_TOKEN: {
            METHOD: "POST",
            URL: "/auth/sendPasswordResetToken",
        },
        RESEND_VERIFICATION_EMAIL: {
            METHOD: "POST",
            URL: "/auth/resendVerificationCode",
        },
        VERIFY_TOKEN: {
            METHOD: "POST",
            URL: "/auth/verifyAccount",
        },
    },
};
