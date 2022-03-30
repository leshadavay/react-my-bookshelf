import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  Dialog,
  CircleButton,
  Spinner,
} from "./components/lib";
import { Logo } from "./components/logo";

import "@reach/dialog/styles.css";
import "./App.css";

function LoginForm({ onSubmit, buttonText }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements);
    const {
      username: { value: username },
      password: { value: password },
    } = e.target.elements;
    onSubmit({
      username,
      password,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" type="text" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>
        <Button type="submit">{buttonText}</Button>
        <Spinner />
      </div>
    </form>
  );
}

function App() {
  const [openModal, setOpenModal] = useState("");
  function handleLogin(formData) {
    console.log("login:", formData);
  }
  function handleRegister(formData) {
    console.log("register:", formData);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Logo />
      <h1>Bookshelf</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,2fr)",
          gridGap: "0.75rem",
        }}
      >
        <Button onClick={() => setOpenModal("login")}>Login</Button>
        <Button onClick={() => setOpenModal("register")} variant="secondary">
          Register
        </Button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CircleButton onClick={() => setOpenModal("")}>x</CircleButton>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={handleLogin} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === "register"}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CircleButton onClick={() => setOpenModal("")}>x</CircleButton>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={handleRegister} buttonText="Register" />
      </Dialog>
    </div>
  );
}

export default App;
