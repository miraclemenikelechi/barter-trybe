import { ApexOptions } from "apexcharts";
import { FC } from "react";

export interface Link {
    href: string;
    title: string;
}

export interface DROPDOWN_OPTION {
    label: string;
    value: string;
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

export interface DASHBOARD_PAGE_CHARTS_TABLE {
    name: string;
    price: number;
    remaining: number;
    sold: number;
}

export type ChartDataProps = {
    series: ApexOptions["series"];
    categories: string[];
};

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

export interface AuthenticationContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    cookies: Record<string, string>;
}
