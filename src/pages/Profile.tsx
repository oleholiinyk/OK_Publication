import React from 'react'
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Profile from "../components/Profile/Profile";

function Home() {
  return (
    <div>
      <NavBar />
      <Profile />
      <Footer />
    </div>
  )
}

export default Home
