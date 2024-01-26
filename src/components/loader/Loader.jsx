import React from "react";
import "./Loader.css";
const Loader = ({ isLoading }) => isLoading && <div className="loader"></div>;
export default Loader;
