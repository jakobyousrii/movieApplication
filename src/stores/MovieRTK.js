import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/3`
    }),
    endpoints: (builder) => ({
        movies: builder.query({ query: (name) => `movie/${name}?${process.env.REACT_APP_KEY}&language=en-US` }),
        trailer: builder.query({query: (name) => `movie/${name}/videos?${process.env.REACT_APP_KEY}&language=en-US`}),
        topRatedMovies: builder.query({query: (page) => `movie/top_rated?${process.env.REACT_APP_KEY}&language=en-US&page=${page}`}),
        popularMovies: builder.query({query: (page) => `movie/popular?${process.env.REACT_APP_KEY}&language=en-US&page=${page}`}),
        getGenres: builder.query({query: () => `genre/movie/list?${process.env.REACT_APP_KEY}&language=en-US`}),
        getGenreMovies: builder.query({query: ({id, page}) => `discover/movie?${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`})
    }) 
})

export const { useMoviesQuery, useTrailerQuery, useTopRatedMoviesQuery, usePopularMoviesQuery, useGetGenresQuery, useGetGenreMoviesQuery} = movieApi;