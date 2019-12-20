import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const postRequest = e => {
    console.log(credentials);
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
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
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
