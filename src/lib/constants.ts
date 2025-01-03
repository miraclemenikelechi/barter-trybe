export const APP_CONSTANTS = {
    NAME: "BarterTrybe",

    API: import.meta.env.VITE_BACKEND_URL,

    ENDPOINTS: {
        SIGN_IN: {
            METHOD: "POST",
            URL: "/auth/login",
        },
        SIGN_OUT: {
            METHOD: "GET",
            URL: "/user/logout",
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

    CHART_DROPDOWN_OPTIONS: [
        { label: "This Week", value: "thisWeek" },
        { label: "This Month", value: "thisMonth" },
        { label: "This Year", value: "thisYear" },
    ],

    TIME_FRAMES: {
        MONTHS: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        DAYS: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    APEX_CHART_CONFIG: {
        chart: {
            toolbar: {
                show: false,
            },
            fontFamily: "Inter, sans-serif",
            parentHeightOffset: 0,
        },
        colors: ["#F94144"],
        xaxis: {
            labels: {
                rotate: 0,
                style: {
                    fontSize: "0.75rem",
                },
                trim: true,
            },
        },
    },
    TABLE_COLUMNS: {
        DASHBOARD: [
            {
                label: "Name",
                value: "name",
            },
            {
                label: "Items Sold",
                value: "sold",
            },
            {
                label: "Remaining Stock",
                value: "remaining",
            },
            {
                label: "Price",
                value: "price",
            },
        ],
    },
};
