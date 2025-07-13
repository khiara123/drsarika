import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../modules/Layout";
import Home from "../Home";
import ImageGallery from "../modules/ImageGallery";
import Articles from "../modules/Articles";
import Services from "../modules/Services";
import Blogs from "../modules/Blogs";
import BlogDetail from "../modules/BlogDetail";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallary" element={<ImageGallery />} />
        {/* <Route path="/blogs" element={<Articles />} /> */}
        <Route path="blogs" element={<Blogs />}>
          <Route index element={<Articles />} />
          <Route path=":blogId" element={<BlogDetail />} />
        </Route>
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
