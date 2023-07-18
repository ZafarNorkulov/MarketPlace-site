import React, { useState } from "react";
import instance from "../../../configs/axios";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/reducers/authReducer";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const [user, setUser] = useState<any>([
    {
      email: "",
      password: "",
    },
  ]);
  const handleLogged = async (e: React.SyntheticEvent) => {
    try {
      let res = await instance({
        url: "user/login",
        method: "POST",
        data: user,
      });
      message.success(res?.data?.msg || "Logged");
      localStorage.setItem("accessToken", res.data.accessToken);
      dispatch(setUserInfo(res.data.user));
      console.log(res?.data);
      router.push("/profile")
    } catch (error: any) {
      message.error(error?.response?.data?.msg || "UnLogged");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="mx-auto">Login</h2>
      <Form onFinish={handleLogged} layout="vertical" className="d-flex flex-column gap-3">
       <Form.Item label="Email:">
       <Input
          type="text"
          
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
       </Form.Item>
       <Form.Item label="Password:">
       <Input
          type="text"
          placeholder="Password"
          value={user.password} 
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
       </Form.Item>
        <Button type="primary" htmlType="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
