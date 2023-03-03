import React from "react";
import { useNavigate, Link } from "react-router-dom";

const TombolLogout = () => {
  const navigate = useNavigate();
  return (
    <Link to="/signin" onClick={() => Auth.logOut(navigate)} className="btn logoutbtn">
      Log out
    </Link>
  );
};

export default TombolLogout;
