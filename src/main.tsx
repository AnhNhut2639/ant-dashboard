import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import store from "./store/index.ts";
import "./index.css";
// load Toast styles
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer />
    </React.StrictMode>
  </Provider>
);
