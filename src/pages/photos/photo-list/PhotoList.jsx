import React from "react";
import PhotoItem from "../photo-item/PhotoItem";

const PhotoList = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoItem photo={photo} key={photo.id} />
      ))}
    </ul>
  );
};

export default PhotoList;
