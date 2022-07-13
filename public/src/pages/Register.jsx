import React,  { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Container, Icon, Button } from "react-bulma-components";

export default function Register() {
  const { Input, Field, Control, Label } = Form;

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Done!");
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register">
    <Container>
      <form className="register__form" onSubmit={handleSubmit}>
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
          {/* <Form.Help color="success">This username is available</Form.Help> */}
        </Form.Field>

        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input
            className="auth-input"
            type='email'
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
          {/* <Form.Help color="danger">This email is invalid</Form.Help> */}
        </Form.Field>

        <Form.Field>
          <Form.Label>Enter password</Form.Label>
          <Form.Control>
            <Form.Input
            className="auth-input"
            type='password'
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
          {/* <Form.Help color="success">This username is available</Form.Help> */}
        </Form.Field>

        <Form.Field>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control>
            <Form.Input
            className="auth-input"
            type='password'
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
          {/* <Form.Help color="success">This username is available</Form.Help> */}
        </Form.Field>
        <Button submit className="btn btn-auth">Register</Button>
        <span className="auth-span">Already have an account? <Link className="auth-link" to="/login"> Login</Link></span>
      </form>
    </Container>
    </div>
  );
}
