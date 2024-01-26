import React from "react";
import "./PostItem.css";
const PostItem = ({ post }) => {
  return (
    <li className="post-card">
      <h2>Post #{post.id}</h2>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Body:</strong> {post.body}
      </p>
    </li>
  );
};

export default PostItem;
