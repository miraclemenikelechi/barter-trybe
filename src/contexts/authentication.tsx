import { createContext, PropsWithChildren,useContext } from "react";

import { User } from "@/types/user";

type AuthenticationContextType = PropsWithChildren & {
    user?: User;
    isAuthenticated: boolean;
};

const AuthenticationContext = createContext<
    AuthenticationContextType | undefined
>(undefined);

export function useAuthenticationContext() {
    const context = useContext(AuthenticationContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useAuthenticationContext must be used within a AuthenticationContextProvider"
        );
    }

    return context;
}

export function AuthenticationContextProvider({
    children,
    isAuthenticated,
}: AuthenticationContextType) {
    return (
        <AuthenticationContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthenticationContext.Provider>
    );
}
