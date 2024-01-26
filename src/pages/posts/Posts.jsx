import React, { useEffect, useState } from "react";
import PostList from "./components/post-list/PostList";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [id]);

  return <PostList posts={posts}/>;
};

export default Posts;
