import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bulma-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIroutes";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
  const { setIsLoggedIn } = props;
  let navigate = useNavigate();

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
      toast.error(
        "A valid email address is required and please, fill out this field",
        {
          position: toast.POSITION.BOTTOM_CENTER,
        }
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, email, password } = values;

      const { data } = await axios.post("http://localhost:3002/api/auth/user/register", {
        username,
        email,
        password,
      });

      if (data.status === parseInt("401")) {
        toast.error(data.response, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/");
      }
    }
  };

  return (
    <div className="register">
      <Container>
        <form
          className="register__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <h3 className="register__title">Sign up for the Chat App! </h3>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input auth-input"
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input auth-input"
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input auth-input"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input auth-input"
                type="password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

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
