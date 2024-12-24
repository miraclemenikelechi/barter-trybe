import { ReactNode, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

import { AuthenticationContext } from "@/hooks/authentication";
import { APP_CONSTANTS } from "@/lib/constants";
import {
    SigninRequest,
    SigninResponse,
    SignoutResponse,
} from "@/pages/authentication/types";
import type { AuthUser } from "@/types";
import { HttpMethod, makeRequest } from "@/utils/make-requests";

const authenticatedUserKey = "bartertrybe_user";

/**
 * Retrieves the authenticated user from local storage.
 *
 * @returns {Omit<AuthUser, "token"> | null} The user object without the token or null if not found.
 */
function getUserFromStorage() {
    const user = localStorage.getItem(authenticatedUserKey);
    if (user) return JSON.parse(user) as Omit<AuthUser, "token">;
    return null;
}

/**
 * Stores the authenticated user in local storage.
 *
 * @param {Omit<AuthUser, "token"> | null} user - The user object to store or null to remove it.
 */
function setUserOnStorage(user: Omit<AuthUser, "token"> | null) {
    if (user) localStorage.setItem(authenticatedUserKey, JSON.stringify(user));
    else localStorage.removeItem(authenticatedUserKey);
}

/**
 * Authentication Context Provider Component
 *
 * This component provides authentication context to its children,
 * allowing them to access the current user's authentication state,
 * and functions for logging in and out.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components that will have access to the authentication context.
 *
 * @returns {JSX.Element} The rendered provider component with authentication context.
 */
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

    // Synchronize user state with local storage on mount
    useEffect(() => setUserOnStorage(getUserFromStorage()), []);

    /**
     * Logs in the user with the provided email and password.
     *
     * @param {string} email - The user's email address.
     * @param {string} password - The user's password.
     *
     * @returns {Promise<void>} A promise that resolves when the login is successful.
     */
    async function login(email: string, password: string): Promise<void> {
        const { data } = await makeRequest<SigninResponse>({
            url: APP_CONSTANTS.ENDPOINTS.SIGN_IN.URL,
            method: APP_CONSTANTS.ENDPOINTS.SIGN_IN.METHOD as HttpMethod,
            data: { email, password } as SigninRequest,
        });

        const { token, ...rest } = data;

        // Set token in cookies and update user state
        setCookies(authenticatedUserKey, token);
        setUser(rest);
        setUserOnStorage(rest);
    }

    /**
     * Logs out the current user by removing cookies and clearing user state.
     *
     * @returns {Promise<void>} A promise that resolves when logout is complete.
     */
    async function logout(): Promise<void> {
        const response = await makeRequest<SignoutResponse>({
            url: APP_CONSTANTS.ENDPOINTS.SIGN_OUT.URL,
            method: APP_CONSTANTS.ENDPOINTS.SIGN_OUT.METHOD as HttpMethod,
        });

        // Remove cookies and clear user state
        if (!response.loggedIn) {
            [authenticatedUserKey].forEach((cookie) =>
                removeCookies(cookie as "bartertrybe_user")
            );
            setUser(null);
            setUserOnStorage(null);
        }
    }

    // Memoized value containing authentication context
    const value = useMemo(
        () => ({
            login,
            logout,
            cookies,
            isAuthenticated,
            user,
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
