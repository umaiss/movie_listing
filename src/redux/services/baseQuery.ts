import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig, AxiosError } from "axios";
import axiosInstance from "../../api/axiosBase";

export const axiosBaseQuery =
    ({ baseUrl }: { baseUrl?: string } = { baseUrl: "" }): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
        },
        unknown,
        unknown
    > =>
        async ({ url, method, data, params }) => {
            try {
                const result = await axiosInstance({ url: baseUrl + url, method, data, params });
                return { data: result.data };
            } catch (error) {
                const err = error as AxiosError;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                };
            }
        };
