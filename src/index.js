import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="ProjectOne" index element={<ProjectOne />} />
        <Route path="ProjectTwo" index element={<ProjectTwo />} />
        <Route path="ProjectThree" index element={<ProjectThree />} />
        <Route path="ProjectFour" index element={<ProjectFour />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
