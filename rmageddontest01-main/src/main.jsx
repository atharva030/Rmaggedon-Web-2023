import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loader from "./Components/Loader";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
      <App />
  </BrowserRouter>
);
