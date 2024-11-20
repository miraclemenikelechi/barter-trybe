import { createContext, ReactNode, useState } from "react";

import { User } from "@/types/user";

export type AuthenticationContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: () => Promise<null>;
    logout: () => Promise<null>;
};

const AuthenticationContext = createContext<AuthenticationContextType | null>(
    null
);

function AuthenticationContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated: boolean = !!user;

    async function login(): Promise<null> {
        setUser(null);
        return null;
    }

    async function logout(): Promise<null> {
        return null;
    }

    return (
        <AuthenticationContext.Provider
            value={{ isAuthenticated, logout, login, user }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationContext, AuthenticationContextProvider };
