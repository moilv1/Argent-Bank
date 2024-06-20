import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../Assets/argentBankLogo.png";
import "../Header/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../actions/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); 
  const signOut = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" >   
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </div>
      </NavLink>
      <div>
        {user.connected ? (
  <div className="profilNav">
    <NavLink className="main-nav-item" to="/user">
      <i className="fa fa-user-circle"></i>
      {user.userName}
    </NavLink>
    <NavLink className="main-nav-item" to="/" onClick={signOut}>
      <i className="fa fa-sign-out"></i>
      Sign Out
    </NavLink>
  </div>
) : (
  <NavLink className="main-nav-item" to="/login">
    <i className="fa fa-user-circle"></i>
    Sign In
  </NavLink>
)}
      </div>
    </nav>
  );
}