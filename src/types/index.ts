import { ApexOptions } from "apexcharts";
import { FC } from "react";

/**
 * === LINK TYPES ===
 * Types and interfaces related to navigation and links
 */
export interface Link {
    href: string;
    title: string;
}

export type DASHBOARD_NAVIGATION = Link & {
    icon: FC<{ color: string }>;
};

export type DASHBOARD_NAVIGATION_ITEM = {
    icon: FC<{ color: string }>;
    label: string;
    path: string;
};

export type DASHBOARD_PAGE_NAVIGATION = Link;

/**
 * === DROPDOWN AND SELECTION TYPES ===
 * Types related to dropdowns and selection options
 */
export interface IDropdownOption {
    label: string;
    value: string;
}

/**
 * === DASHBOARD CONTEXT TYPES ===
 * Types related to the dashboard's state and context
 */
export type DashboardPagesTitleContextType = {
    title: string | null;
    setTitle: (title: string | null) => void;
};

/**
 * === CHARTS AND TABLE DATA TYPES ===
 * Types for managing chart and table data in the dashboard
 */
export type ChartDataProps = {
    series: ApexOptions["series"];
    categories: string[];
};

export interface DASHBOARD_PAGE_CHARTS_TABLE {
    name: string;
    price: number;
    remaining: number;
    sold: number;
}

/**
 * === LANDING PAGE TYPES ===
 * Interfaces and types related to the landing page
 */
export type Feature = {
    description: string;
    icon: FC;
    title: string;
};

export type Step = {
    after: string;
    before: string;
    content: string;
};

export type Testimonial = {
    content: string;
    image: string;
    job: string;
    name: string;
};

export type PricingPlan = {
    description: string;
    features: string[];
    href: string;
    price: number;
    title: string;
};

export type Social = {
    href: string;
    icon: FC;
};

/**
 * === ANALYTICS PAGE TYPES ===
 * Interfaces and types related to the analytics page
 */
export type ProductsFilter = {
    title: string;
    options: IDropdownOption[];
};

/**
 * === USER DATA TYPES ===
 * Interfaces and types related to user data and authentication
 */
export interface IUser {
    address: string;
    authType: string;
    bio: string;
    businessname: string;
    businesstype: string;
    country: string;
    countryCode: string;
    dob: string;
    email: string;
    gender: string;
    imageUrl: string;
    lga: string;
    location: string;
    password: string;
    phone: string;
    phoneNumber: string;
    profileVerified: boolean;
    referralCode: string;
    resetPasswordCode: string;
    state: string;
    uid: string;
    username: string;
    verificationCode: string;
    verificationCodeTimeStamp: number;
    verified: boolean;
    zipcode: string;
}

export type AuthUser = Partial<IUser>;

/**
 * === AUTHENTICATION CONTEXT TYPES ===
 * Types related to the Authentication context provider
 */
export interface AuthenticationContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    cookies: Record<string, string>;
}
