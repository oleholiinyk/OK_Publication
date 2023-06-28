import React from 'react';
import Register from '../components/Register/Register';
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";

function RegisterPage() {
  return (
    <div>
      <NavBar />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterPage;
