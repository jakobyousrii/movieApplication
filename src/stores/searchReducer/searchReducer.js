import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSearchMovies = createAsyncThunk("getSearchMovies", async (search)=>{
    const response = await fetch(`${process.env.REACT_APP_URL}/4/search/movie?${process.env.REACT_APP_KEY}&query=${search}&page=1`);
    const data = await response.json();
    return data;
})

const initialState = {
    movies: [],
    loading: false
}

const searchReducer = createSlice({
name: "searchMovies",
initialState,
reducers: {
    removeMovies: (state)=>{
        state.movies = [];
    }
},
extraReducers:{
[getSearchMovies.pending]: (state, {payload})=>{
},
[getSearchMovies.fulfilled]: (state, {payload})=>{

    return {movies: payload, loading: false}
},
[getSearchMovies.rejected]: (state, {payload})=>{
    console.log("baaddddd");
    return {...state, loading: false}
}
}
})

export const {removeMovies} = searchReducer.actions;
export default searchReducer.reducer;
