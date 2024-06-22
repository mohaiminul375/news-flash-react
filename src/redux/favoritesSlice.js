import { createSlice } from "@reduxjs/toolkit";

const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];


const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavorites,
//   reducers
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const newState = state.filter(
        (article) => article.url !== action.payload.url
      );
      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
