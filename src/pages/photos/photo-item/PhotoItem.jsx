import React from "react";
import "./PhotoItem.css";
const PhotoItem = ({ photo }) => {
  return (
    <div className="photo-card">
      <h2>Photo #{photo.id}</h2>
      <img src={photo.url} alt="" />
      <p>
        <strong>Title:</strong> {photo.title}
      </p>
    </div>
  );
};

export default PhotoItem;
