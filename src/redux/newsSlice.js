import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api and keys
const API_KEY = "0f95578168a14bffa3bf1c5e4886f534";
const BASE_URL = "https://newsapi.org/v2/";

// fetch
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ category, page }) => {
    const sourceRes = await axios.get(`${BASE_URL}top-headlines/sources`, {
      params: { apiKey: API_KEY },
    });
    //
    const sources = sourceRes.data.sources
      .filter((source) => category === "all" || source.category === category)
      .map((source) => source.id)
      .join(",");
    //
    const articlesResponse = await axios.get(`${BASE_URL}top-headlines`, {
      params: {
        apiKey: API_KEY,
        sources,
        page,
        pageSize: 9,
      },
    });
    return articlesResponse.data;
  }
);

// redux slice
const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
    category: "all",
    page: 1,
  },
  //   reducer
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.articles = action.payload.articles;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { setCategory, setPage } = newsSlice.actions;

export default newsSlice.reducer;
