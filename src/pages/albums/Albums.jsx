import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumList from "./components/album-list/AlbumList";
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { id: userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, [userId]);

  return <AlbumList albums={albums} />;
};

export default Albums;
