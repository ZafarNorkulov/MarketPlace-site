import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import NoneLayout from "../../layouts/noneLayout";


const Login = dynamic(() => import('../../components/auth/login'))
const SignIn = () => {
  return (
    <>
      <Head>
        <title>MarketPlace Login</title>
        <meta name="description" content={"Market sotuv platformasi"} />
      </Head>
      <Login />
    </>
  );
};

export default SignIn;

SignIn.layout= NoneLayout