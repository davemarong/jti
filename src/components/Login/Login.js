//   IMPORT

// React
import React from "react";
import { useState } from "react";
// Next
import Router from "next/router";
// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Utils

// Other
import axios from "axios";

// FUNCTIONAL COMPONENT
export default function Register({ setJwt, setIsLogged }) {
  //   State
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  //   Functions
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterUser = () => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: username,
        password: password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        setJwt(response.data.jwt);
        setIsLogged(true);
        Router.push("/kurs");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  //   Return
  return (
    <div>
      <Typography variant="h3">Logg inn</Typography>
      <TextField
        onChange={handleUsernameInput}
        label="Brukernavn/Email"
        variant="outlined"
      />
      <TextField
        onChange={handlePasswordInput}
        label="Passord"
        variant="outlined"
      />
      <Button onClick={handleRegisterUser} variant="contained">
        Logg inn!
      </Button>
    </div>
  );
}
