import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../MovieRTK";
import searchReducer  from "../searchReducer/searchReducer";


const movieStore = configureStore({
    reducer: {
        search: searchReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})

export default movieStore;