import { createContext, ReactNode, useEffect, useState } from "react";

import { APP_CONSTANTS } from "@/lib/constants";
import { SigninRequest, SigninResponse } from "@/pages/authentication/types";
import type { AuthUser } from "@/types";
import { HttpMethod, makeRequest } from "@/utils/make-requests";

export type AuthenticationContextType = {
    user: AuthUser | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthenticationContext = createContext<AuthenticationContextType | null>(
    null
);

const authenticatedUserKey = "bartertrybe_user";

function getUserFromStorage() {
    const user = localStorage.getItem(authenticatedUserKey);
    if (user) return JSON.parse(user) as AuthUser;
    return null;
}

function setUserToStorage(user: AuthUser | null) {
    if (user) localStorage.setItem(authenticatedUserKey, JSON.stringify(user));
    else localStorage.removeItem(authenticatedUserKey);
}

function AuthenticationContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(getUserFromStorage());
    const isAuthenticated = !!user;

    useEffect(() => setUserToStorage(getUserFromStorage()), []);

    async function login(email: string, password: string): Promise<void> {
        const response = await makeRequest<SigninResponse>({
            url: APP_CONSTANTS.ENDPOINTS.SIGN_IN.URL,
            method: APP_CONSTANTS.ENDPOINTS.SIGN_IN.METHOD as HttpMethod,
            data: { email, password } as SigninRequest,
        });

        setUser(response.data);
        setUserToStorage(response.data);
    }

    async function logout(): Promise<void> {
        setUser(null);
        setUserToStorage(null);
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
