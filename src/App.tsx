import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import ContextAllPost from "./contextStore/AllPostContext";
import ContextAuth from "./contextStore/AuthContext";
import ContextPost from "./contextStore/PostContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <ContextAuth>
        <ContextAllPost>
          <ContextPost>
            <Routes />
          </ContextPost>
        </ContextAllPost>
      </ContextAuth>
    </div>
  )
}

export default App;
