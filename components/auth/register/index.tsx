import React, { useState } from "react";
import instance from "../../../configs/axios";

import { useRouter } from "next/router";
import {Form,Input,DatePicker,Select,Button,message,FormInstance,} from "antd";
const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState<any>([
    {
      name: "",
      l_name: "",
      born: "",
      phone_number: "",
      country: "",
      region: "",
      gmail: "",
      password: "",
    },
  ]);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      let res = await instance({
        url: "/user/register",
        method: "POST",
        data: user,
      });
      // localStorage.setItem("accessToken", res.data.accessToken);      
      // router.push("/auth/login");
    } catch (error: any) {
      message.error(error?.response?.data?.detail?.msg || "Xatolik");
      console.log(error);
      
    }
  };
  type RequiredMark = boolean | "optional";
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");
  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const [form] = Form.useForm();
  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={"+998"} style={{ width: 90 }}>
        <Select.Option value="+998">+998</Select.Option>
      </Select>
    </Form.Item>
  );console.log(user)
  
const {Option} = Select
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ size: 18 }}
      style={{ maxWidth: 600, margin: "0 auto" }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} value={user.phone_number} onChange={(e)=>setUser({...user, phone_number: e.target.value})} />

      </Form.Item>
      <Form.Item required label="Name:">
        <Input
          type="text"
          placeholder="Your name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item required label="Lastname:">
        <Input
          type="text"
          placeholder="Your lastname"
          value={user.l_name}
          onChange={(e) => setUser({ ...user, l_name: e.target.value })}
        />
      </Form.Item>
      <Form.Item required label="Email:">
        <Input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, gmail: e.target.value })}
        />
      </Form.Item>
      
      <Form.Item
      label="Password:"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password type="password"
          placeholder="Password"
          value={user.password}
          
          onChange={(e) => setUser({ ...user, password: e.target.value })}/>
    </Form.Item>
      <Form.Item required label="Birthday:">
        <DatePicker
          // value={user.born}
          onChange={(e, data) => setUser({ ...user, born: data })}
        />
      </Form.Item>
      <div className="row">
        <Form.Item required label="Country:" className="col-6">
          <Select
          allowClear
            value={user.country}
            onChange={(e) => setUser({ ...user, country: e })}
          >
            <Option value="uzb">Uzbekistan</Option>
          </Select>
        </Form.Item>
        <Form.Item required label="Region:" className="col-6">
          <Select
          allowClear
            value={user.region}
            onChange={(e) => setUser({ ...user, region: e })}
          >
            <Option value="bux">Bukhara</Option>
          </Select>
        </Form.Item>
      </div>
      <Button type="primary" htmlType="submit" onClick={() => handleSubmit}>
        Register
      </Button>
    </Form>
  );
};

export default Register;

  