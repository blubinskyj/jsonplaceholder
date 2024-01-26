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
        <Route path="/" element={<HomeCover />}>
          <Route index element={<Users />} />
          <Route path="posts/:id" element={<Posts />} />
          <Route path="albums/:id" element={<Albums />} />
          <Route path="photos/:id" element={<Photos />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
