import React from 'react';
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import PostComponent from "../components/Post/Post";

function Post() {
    return (
        <div>
          <NavBar />
          <PostComponent />
          <Footer />
        </div>
    );
};

export default Post;
