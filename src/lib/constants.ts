export const APP_CONSTANTS = {
    NAME: "BarterTrybe",

    API: import.meta.env.VITE_BACKEND_URL,

    ENDPOINTS: {
        SIGN_IN: {
            METHOD: "POST",
            URL: "/auth/login",
        },
        FORGOT_PASSWORD: {
            METHOD: "POST",
            URL: "/auth/sendPasswordResetToken",
        },
    },
};
