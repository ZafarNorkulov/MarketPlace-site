import React from "react";
import NoneLayout from "../../layouts/noneLayout";
import Register from "../../components/auth/register";

const Signup = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default Signup;

Signup.layout = NoneLayout;
