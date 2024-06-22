import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Root from "./Root/Root.jsx";
import NewsDetails from "./Pages/NewsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/article/:title',
        element:<NewsDetails></NewsDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
