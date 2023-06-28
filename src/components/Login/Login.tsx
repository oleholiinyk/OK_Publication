import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// import Logo from "../../olx-logo.png";
import "./Login.css";
import Header from "../../layouts/Header";

function Login() {
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
            <h3 className={"text-center pb-4"}>Sign In</h3>
            <form onSubmit={handleSubmit}>
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
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked/>
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

              <div className="text-center">
                <p>Not a member? <a href="/register">Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
