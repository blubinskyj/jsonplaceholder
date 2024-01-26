import React from "react";
import PostItem from "../post-item/PostItem";

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostList;
