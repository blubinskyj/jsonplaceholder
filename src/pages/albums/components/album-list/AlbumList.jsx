import React from "react";
import AlbumItem from "../album-item/AlbumItem";

const AlbumList = ({ albums }) => {
  return (
    <ul>
      {albums.map((album) => (
        <AlbumItem album={album} key={album.id} />
      ))}
    </ul>
  );
};

export default AlbumList;
