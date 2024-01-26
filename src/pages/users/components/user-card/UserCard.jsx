import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <li className="user-card">
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <div className={"user-card-nav"}>
        <Link to={`jsonplaceholder/posts/${user.id}`}>Posts</Link>
        <Link to={`jsonplaceholder/albums/${user.id}`}>Albums</Link>
      </div>
    </li>
  );
};

export default UserCard;
