import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate} from 'react-router-dom';

import { UserContext } from "../context/UserContext";

import ErrorMessage from "./ErrorMessage";

import { backend_url } from "../config";

const Navbar = ({ title }) => {

  const [token, setToken] = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);


  
  const submitLogout = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const response = await fetch(`${backend_url}auth/logout`, requestOptions);

    if (response.ok === false) {
      const data = await response.json();
      console.log('Navbar-logout', data);
    } else {
      console.log('logout success');
      setToken(null);
    }
  };



  const submitPass = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const response = await fetch(`${backend_url}pass`, requestOptions);
    const data = await response.json();
    if (response.ok === false) {
      setErrorMessage(data.detail)
      console.log('Navbar-pass', data);
    } else {
      // console.log('get pass success', data.full_name, data.card);
      navigate('/pass',  { state: { full_name: data.full_name, card: data.card}, replace: false });
    }
  };

  const handleLogout = () => {
    submitLogout();
  };

  const handlePass = () => {
    submitPass();
  };

  return (
    <div className="has-text-centered m-6">
      <h1 className="title">{title}</h1>
      {token && (
        <div>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
          <button className="button" onClick={handlePass}>
            Pass
          </button>
            <ErrorMessage message={errorMessage} />
            <br />
        </div>
      )}
    </div>
  );
};

export default Navbar;