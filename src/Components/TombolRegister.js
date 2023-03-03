import React from "react";
import { Link } from "react-router-dom";

const TombolRegister = () => {
  return (
    <Link to={"/signup"} className="btn">
      Register
    </Link>
  );
};

export default TombolRegister;
