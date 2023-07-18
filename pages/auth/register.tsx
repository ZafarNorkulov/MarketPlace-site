import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import UserLayout from "../../layouts/userLayout";
import NoneLayout from "../../layouts/NoneLayout";
const Register = dynamic(() => import('../../components/auth/register'))
// const Login = dynamic(() => import('../../components/auth/login'))
const SignIn = () => {
  return (
    <>
      <Head>
        <title>MarketPlace Login</title>
        <meta name="description" content={"Market sotuv platformasi"} />
      </Head>
      <Register />
    </>
  );
};

export default SignIn;

SignIn.layout= NoneLayout