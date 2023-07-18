import React from 'react'
import Register from './register';
import Login from './login';
import { Tabs } from 'antd';
import Link from 'next/link';

const AuthComponent = () => {
    const items = [
        {
          key: '1',
          label: <Link href={"/auth/register"}>Register</Link>,
          children: <Register/>,
        },
        {
          key: '2',
          label:  <Link href={"/auth/login"}>Login</Link>,
          children: <Login/>,
        },
      
      ];
  return (
    <div style={{maxWidth: "500px", margin: "auto"}}>
      <Tabs defaultActiveKey="1" items={items}  />
    </div>
  )
}

export default AuthComponent
