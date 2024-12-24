import axios, { AxiosHeaders, AxiosResponse } from "axios";

import { APP_CONSTANTS } from "@/lib/constants";

/**
 * Define supported HTTP methods.
 */
export type HttpMethod = "GET" | "POST" | "DELETE" | "PATCH";

/**
 * Define RequestOptions type for configuring requests.
 */
type RequestOptions = {
    url: string;
    method?: HttpMethod;
    params?: Record<string, unknown>;
    headers?: AxiosHeaders;
    data?: Record<string, unknown>;
};

const axiosInstance = axios.create({
    baseURL: APP_CONSTANTS.API,
    withCredentials: true,
});

/**
 * A reusable function for making HTTP requests using Axios.
 *
 * @template T - The expected response type.
 * @param options - The configuration options for the request.
 * @returns A promise that resolves with the response data.
 * @throws Will throw an error if the request fails.
 */
export async function makeRequest<T>({
    url,
    method,
    params,
    headers,
    data,
}: RequestOptions): Promise<T> {
    try {
        /**
         * Send the request using the configured Axios instance.
         */
        const response: AxiosResponse<T> = await axiosInstance({
            url,
            method,
            params,
            headers,
            data,
        });

        /**
         * Return the response data.
         */
        return response.data as T;
    } catch (error) {
        /**
         * Handle Axios errors.
         */
        if (axios.isAxiosError(error)) {
            if (error.response) {
                /**
                 * The request was made and the server responded with a status code
                 * that falls out of the range of 2xx
                 */

                console.error({
                    status: error.response.status,
                    message: error.response.data.message,
                });
            } else if (error.request) {
                /**
                 * The request was made but no response was received
                 * `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                 * http.ClientRequest in node.js
                 */
                console.error(error.request);
            } else {
                /**
                 * Something happened in setting up the request that triggered an Error
                 */
                console.error("Error", error.message);
            }
        } else {
            /**
             * Handle non-Axios errors.
             */
            console.error("Error making request:", error);
        }

        throw error;
    }
}
