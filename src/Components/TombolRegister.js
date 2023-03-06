import React from "react";
import { Link } from "react-router-dom";
import "./TombolRegister.css";

const TombolRegister = () => {
  return (
    <Link to={"/signup"} className="btn">
      Register
    </Link>
  );
};

export default TombolRegister;
