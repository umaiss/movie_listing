import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../services/baseQuery";
import { LoginRequest, RegisterRequest, AuthResponse } from "../services/types";
import { API_ENDPOINTS, API_KEY, BASE_URL } from "../../utils/constant";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        upcoming: builder.query({
            query: () => ({
                url: `${API_ENDPOINTS.UPCOMING}`,
                params: {
                    api_key: API_KEY
                },
                method: "GET",
            }),
        }),
        movieDetail: builder.query({
            query: (movie_id) => ({
                url: `${API_ENDPOINTS.MOVIE_DETAIL}/${movie_id}`,
                params: {
                    api_key: API_KEY
                },
                method: "GET",
            }),
        }),
        getImages: builder.query({
            query: (movie_id) => ({
                url: `${API_ENDPOINTS.GETIMAGES}/${movie_id}/images`,
                params: {
                    api_key: API_KEY
                },
                method: "GET",
            }),
        }),
        getMovieVideos: builder.query({
            query: (movie_id) => ({
                url: `${API_ENDPOINTS.MOVIE_VIDEOS}/${movie_id}/videos`,
                params: {
                    api_key: API_KEY
                },
                method: "GET",
            }),
        }),
    }),
});

export const { useUpcomingQuery, useGetImagesQuery, useMovieDetailQuery, useGetMovieVideosQuery } = authApi;
