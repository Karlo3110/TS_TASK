import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NotFound from "./pages/NotFound";
import ArticleList from "./pages/ArticleList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MPObracun from "./pages/MPObracun";
import MPObracunPlacanja from "./pages/MPObracunPlacanja";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="ArticleList" element={<ArticleList />} />
          <Route path="MPObracun" element={<MPObracun />} />
          <Route path="MPObracunPlacanja" element={<MPObracunPlacanja />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
