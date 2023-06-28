import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// import Logo from "../../olx-logo.png";
import "./Register.css";
import Header from "../../layouts/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="wrapper">
            <h3 className={"text-center pb-4"}>Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"
                       value={first_name}
                       onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="form-label" htmlFor="form2Example1">First name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form2Example1">Last name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form2Example2">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <button type="button" className="btn btn-primary btn-block mb-4">Sign up</button>
                </div>
              </div>

              <div className="text-center">
                <Link to="/login">
                  <span>Sign in</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
