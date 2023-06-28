import React, { Fragment, useContext } from "react";
import Create from "../components/CreatePost/CreatePost";
import { AuthContext } from "../contextStore/AuthContext";
import Login from "./Login";
const CreatePage = () => {
  const { user } = useContext(AuthContext) ?? {}; // Set an empty object as fallback
  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreatePage;
