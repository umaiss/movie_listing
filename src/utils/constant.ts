
export const PhoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
export const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const NameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/

export const BASE_URL = 'https://api.themoviedb.org';

export const API_KEY = "3860d48d8f2832e0d5fb7d0f993339ea"

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

export const API_ENDPOINTS = {
    UPCOMING: "/3/movie/upcoming",
    GETIMAGES: "/3/movie",
    MOVIE_DETAIL: "/3/movie",
    MOVIE_VIDEOS: "/3/movie",
};