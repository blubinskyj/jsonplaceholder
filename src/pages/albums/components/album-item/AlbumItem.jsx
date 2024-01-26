import React from "react";
import "./AlbumItem.css";
import { Link } from "react-router-dom";

const AlbumItem = ({ album }) => {
  return (
    <li className="album-card">
      <Link to={`/jsonplaceholder/photos/${album.id}`}>
        <h2>Album #{album.id}</h2>
        <p>
          <strong>Title:</strong> {album.title}
        </p>
      </Link>
    </li>
  );
};

export default AlbumItem;
