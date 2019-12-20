import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const postRequest = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setCredentials({
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={postRequest}>
        <label>Username:</label>
        <input
          type="text"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="text"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
