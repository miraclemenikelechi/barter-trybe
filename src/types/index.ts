import { ApexOptions } from "apexcharts";
import { FC } from "react";

/**
 * === LINK TYPES ===
 * Types and interfaces related to navigation and links
 */
export interface ILink {
    href: string;
    title: string;
}

export type DASHBOARD_NAVIGATION = ILink & {
    icon: FC<{ color: string }>;
};

export type DASHBOARD_NAVIGATION_ITEM = {
    icon: FC<{ color: string }>;
    label: string;
    path: string;
};

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

export type ChartRenderProps = {
    duration: string;
    sales: number;
};

export interface IDashboardChartsPageTable {
    name: string;
    price: number;
    remaining: number;
    sold: number;
}

export interface IChartFilter {
    thisWeek: ChartRenderProps[];
    thisMonth: ChartRenderProps[];
    thisYear: ChartRenderProps[];
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
 * === DASHBOARD PAGE TYPES ===
 * Interfaces and types related to the dashboard page
 */
export interface IDashboardSummary {
    icon: FC;
    isMoney: boolean;
    isProfit: boolean;
    isRating: boolean;
    lastWeek: number;
    prediction: number;
    profit: number;
    thisWeek: number;
    title: string;
}

export interface IDashboardSummaryTopProducts {
    icon: FC;
    products: string[];
    title: string;
}

export interface IDashboardChartsGeneralSummary {
    isMoney: boolean;
    title: string;
    value: number;
}

export interface IDashboardChartsGeneralSummaryFilter {
    thisWeek: IDashboardChartsGeneralSummary[];
    thisMonth: IDashboardChartsGeneralSummary[];
    thisYear: IDashboardChartsGeneralSummary[];
}

export interface IDashboardChartCustomerSatisfaction {
    rating: number;
    percentage: number;
}

/**
 * === ANALYTICS PAGE TYPES ===
 * Interfaces and types related to the analytics page
 */
export type ProductsFilter = {
    title: string;
    options: IDropdownOption[];
};

export interface IProductsTable {
    serialNumber: number;
    name: string;
    batchNumber: string;
    expiresIn: string;
    expiryThreshold: number;
    expiredItems: number;
    expiredLoss: number;
    unit: number;
    shelf: string;
    category: string;
}

export interface IProductsTableHeaders {
    label: string;
    value: keyof IProductsTable;
}

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
