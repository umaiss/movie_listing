import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../services/baseQuery";
import { LoginRequest, RegisterRequest, AuthResponse } from "../services/types";
import { API_ENDPOINTS, BASE_URL } from "../../utils/constant";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: API_ENDPOINTS.LOGIN,
                method: "POST",
                data: credentials,
            }),
        }),
        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: (newUser) => ({
                url: API_ENDPOINTS.REGISTER,
                method: "POST",
                data: newUser,
            }),
        }),
        profile: builder.query<AuthResponse["user"], void>({
            query: () => ({
                url: API_ENDPOINTS.PROFILE,
                method: "GET",
            }),
        }),
        products: builder.query({
            query: () => ({
                url: API_ENDPOINTS.PRODUCTS,
                method: "GET",
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useProfileQuery, useProductsQuery } = authApi;
