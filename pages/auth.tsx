import React from 'react'
import Login from "../components/auth/login"
import Register from "../components/auth/register"
import { Tabs } from 'antd';
import NoneLayout from '../layouts/noneLayout';
import AuthComponent from '../components/auth';
const Auth = () => {

  return (
   <AuthComponent/>
  )
}

export default Auth

Auth.layout= NoneLayout
