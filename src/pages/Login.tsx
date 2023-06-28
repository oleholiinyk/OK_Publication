import React from 'react';
import Login from '../components/Login/Login';
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";

function LoginPage() {
  return (
    <div>
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
