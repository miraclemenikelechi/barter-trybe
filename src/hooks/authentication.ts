import { useContext } from "react";

import { AuthenticationContext } from "@/contexts/authentication";

export function useAuthenticationContext() {
    const context = useContext(AuthenticationContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useAuthenticationContext must be used within a AuthenticationContextProvider"
        );
    }

    return context;
}
