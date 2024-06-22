import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api and keys
// const API_KEY = "0f95578168a14bffa3bf1c5e4886f534";
const BASE_URL = "https://newsapi.org/v2/";

// fetch
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({category,page,language}) => {
    // console.log("lan in store", language, category,pageSize);
    console.log(category,page,language);

    const articlesResponse = await axios.get(`${BASE_URL}top-headlines`, {
      params: {
        apiKey: API_KEY,
        category,
        page,
        pageSize: 10,
        language,
      },
    });
    // console.log(language, category);
    return {
      articles: articlesResponse.data.articles,
      totalResults: articlesResponse.data.totalResults,
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
    category: "general",
    page: 1,
    totalResults: 0,
    totalPages: 0,
    language: "",
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
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log(state.language);
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
      //   console.log(state.totalResults)
      state.totalPages = Math.ceil(action.payload.totalResults / 10);
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { setCategory, setPage, setLanguage } = newsSlice.actions;

export default newsSlice.reducer;
