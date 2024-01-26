import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./HomeCover.css";

const HomeCover = () => {
  return (
    <div>
      <h2 className={"title"}>Json placeholder</h2>
      <h5>by Bohdan Lubinskyj</h5>
      <nav className="navbar">
        <Link to="/jsonplaceholder">
          <p>All users</p>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomeCover;
