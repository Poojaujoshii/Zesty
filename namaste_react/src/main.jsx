// src/main.jsx  (or wherever you render <App />)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestaurantsProvider } from "./Components/RestrauntContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RestaurantsProvider>
  </React.StrictMode>
);
