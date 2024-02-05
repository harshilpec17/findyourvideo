import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShimmerWatchContainer from "./components/WatchComponent/ShimmerWatchContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<ShimmerWatchContainer />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
