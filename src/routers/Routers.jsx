import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "../pages/users/Users";
import HomeCover from "../components/home-cover/HomeCover";
import { PageNotFound } from "../pages/not-found/PageNotFound";
import Posts from "../pages/posts/Posts";
import Albums from "../pages/albums/Albums";
import Photos from "../pages/photos/Photos";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jsonplaceholder/" element={<HomeCover />}>
          <Route index element={<Users />} />
          <Route path="jsonplaceholder/posts/:id" element={<Posts />} />
          <Route path="jsonplaceholder/albums/:id" element={<Albums />} />
          <Route path="jsonplaceholder/photos/:id" element={<Photos />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
