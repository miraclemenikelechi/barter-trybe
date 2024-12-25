import { createContext, useContext } from "react";

import type { AuthenticationContextType } from "@/types";

export const AuthenticationContext =
    createContext<AuthenticationContextType | null>(null);

export function useAuthentication() {
    const context = useContext(AuthenticationContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useAuthentication must be used within a AuthenticationContextProvider"
        );
    }

    return context;
}
