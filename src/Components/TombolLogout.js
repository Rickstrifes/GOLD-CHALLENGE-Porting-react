import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "./TombolLogout.css";

const TombolLogout = () => {
  const navigate = useNavigate();
  return (
    <Link to="/signin" onClick={() => Auth.logOut(navigate)} className="btn logoutbtn">
      Log out
    </Link>
  );
};

export default TombolLogout;
