import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./config/react-query";
import "./index.css";
import router from "./router";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ReactQueryDevtools
          initialIsOpen={false}
          panelPosition="right"
          position="bottom-right"
        />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
