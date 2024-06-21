import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api and keys
// const API_KEY = "fa922ea666f540faa15c016b981e4bef";
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
        pageSize: 10,
      },
    });
    return{
        articles: articlesResponse.data.articles,
        totalResults: articlesResponse.data.totalResults
    };
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
    totalResults:0,
    totalPages:0,
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
      state.totalResults = action.payload;
      console.log(state.totalResults)
      state.totalPages = Math.ceil(action.payload.totalResults / 10);
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { setCategory, setPage } = newsSlice.actions;

export default newsSlice.reducer;
