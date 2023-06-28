import React from 'react'
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import HomeComponent from "../components/Home/Home";

function Home() {
  return (
    <div>
      <NavBar />
      <HomeComponent />
      <Footer />
    </div>
  )
}

export default Home
