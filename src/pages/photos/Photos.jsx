import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoList from "./photo-list/PhotoList";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const { id: albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, [albumId]);

  return <PhotoList photos={photos} />;
};

export default Photos;
