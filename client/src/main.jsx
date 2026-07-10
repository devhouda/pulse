import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Layout from "./components/Layout.jsx";
import Feed from "./components/Feed.jsx";
import Post from "./components/Post.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
