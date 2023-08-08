import React, { useState } from "react";
import instance from "../../../configs/axios";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/reducers/authReducer";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const [form] = Form.useForm();

  const handleLogged = async (data:{username:string,password:string}) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
      try {
        let res = await instance({
          url: "/site/login",
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        message.success(res?.data?.msg || "Logged");
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
        dispatch(setUserInfo(res?.data));
        router.push("/profile");
      } catch (error:any) {
          message.error(error?.response?.data?.detail)
      }
     

  };
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="mx-auto">Login</h2>
      <Form
        form={form}
        onFinish={handleLogged}
        layout="vertical"
        className="d-flex flex-column gap-3"
      >
        <Form.Item label="Email:" name={"username"}>
          <Input type="text" placeholder="Email" />
        </Form.Item>
        <Form.Item label="Password:" name={"password"}>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Button
          className="bg-[#068FFF] text-center block w-full text-white"
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
