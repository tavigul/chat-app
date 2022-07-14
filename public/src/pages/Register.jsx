import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Container, Icon, Button } from "react-bulma-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const { Input, Field, Control, Label } = Form;

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      toast.error("Password did not match :(", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return false;
    } else if (username.length < 3) {
      toast.error("Username must be over 3 characters!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return false;
    } else if (password.length < 8) {
      toast.error("Password must be over 8 characters!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return false;
    } else if (email === "") {
      toast.error("A valid email address is required and please, fill out this field", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation()
  };

  return (
    <div className="register">
      <Container>
        <form
          className="register__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <h3 className="register__title">Sign up for the Chat App! </h3>
          <Form.Field>
            <Form.Label>Username</Form.Label>
            <Form.Control>
              <Form.Input
                className="auth-input"
                onChange={(e) => {
                  return handleChange(e);
                }}
              />
              <Icon align="left" size="small">
                <i className="fas fa-user" />
              </Icon>
              <Icon align="right" size="small">
                <i className="fas fa-check" />
              </Icon>
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Control>
              <Form.Input
                className="auth-input"
                type="email"
                onChange={(e) => {
                  return handleChange(e);
                }}
              />
              <Icon align="left" size="small">
                <i className="fas fa-envelope" />
              </Icon>
              <Icon align="right" size="small">
                <i className="fas fa-exclamation-triangle" />
              </Icon>
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Enter password</Form.Label>
            <Form.Control>
              <Form.Input
                className="auth-input"
                type="password"
                onChange={(e) => {
                  return handleChange(e);
                }}
              />
              <Icon align="left" size="small">
                <i className="fas fa-user" />
              </Icon>
              <Icon align="right" size="small">
                <i className="fas fa-check" />
              </Icon>
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control>
              <Form.Input
                className="auth-input"
                type="password"
                onChange={(e) => {
                  return handleChange(e);
                }}
              />
              <Icon align="left" size="small">
                <i className="fas fa-user" />
              </Icon>
              <Icon align="right" size="small">
                <i className="fas fa-check" />
              </Icon>
            </Form.Control>
          </Form.Field>
          <Button submit className="btn btn-auth">
            Register
          </Button>
          <span className="auth-span">
            Already have an account?{" "}
            <Link className="auth-link" to="/login">
              {" "}
              Login
            </Link>
          </span>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
}
