import { ReactNode, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

import { AuthenticationContext } from "@/hooks/authentication";
import { APP_CONSTANTS } from "@/lib/constants";
import { SigninRequest, SigninResponse } from "@/pages/authentication/types";
import type { AuthUser } from "@/types";
import { HttpMethod, makeRequest } from "@/utils/make-requests";

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

export function AuthenticationContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<AuthUser | null>(getUserFromStorage());
    const isAuthenticated = !!user;
    const [cookies, setCookies, removeCookies] = useCookies([
        authenticatedUserKey,
    ]);

    useEffect(() => setUserToStorage(getUserFromStorage()), []);

    async function login(email: string, password: string): Promise<void> {
        const response = await makeRequest<SigninResponse>({
            url: APP_CONSTANTS.ENDPOINTS.SIGN_IN.URL,
            method: APP_CONSTANTS.ENDPOINTS.SIGN_IN.METHOD as HttpMethod,
            data: { email, password } as SigninRequest,
        });

        setCookies("bartertrybe_user", response.data.token);

        setUser(response.data);
        setUserToStorage(response.data);
    }

    async function logout(): Promise<void> {
        console.log("logout");
        ["bartertrybe_user"].forEach((cookie) =>
            removeCookies(cookie as "bartertrybe_user")
        );
        setUser(null);
        setUserToStorage(null);
    }

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout,
            user,
            isAuthenticated,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [cookies]
    );

    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    );
}
