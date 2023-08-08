import React, { useState } from "react";
import instance from "../../../configs/axios";
import { IUserType } from "../../../types/userType";
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
  const handleSubmit = async ({data}:{data:any}) => {
    data.born = data?.born.format("YYYY-MM-DD")
    try {
      let res = await instance({
        url: "/api/user/register",
        method: "POST",
        data: data,
      });
      localStorage.setItem("accessToken", res.data.accessToken);      
      router.push("/profile");
      message.success(res?.data?.msg || "Logged");
      setUser(res.data)
    } catch (error: any) {
      message.error(error?.response?.data?.detail[0]?.msg || "Xatolik");
      console.log(error);
      
    }
  };
  const [form] = Form.useForm();
  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={"+998"} style={{ width: 90 }}>
        <Select.Option value="+998">+998</Select.Option>
      </Select>
    </Form.Item>
  );
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
        name="phone_number"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} maxLength={9} style={{ width: '100%' }} value={user.phone_number} onChange={(e)=>setUser({...user, phone_number: e.target.value})} />

      </Form.Item>
      <Form.Item required label="Name:" name={"name"}>
        <Input
          type="text"
          placeholder="Your name"
        />
      </Form.Item>
      <Form.Item required label="Lastname:" name={"l_name"}>
        <Input
          type="text"
          placeholder="Your lastname"
        />
      </Form.Item>
      <Form.Item required label="Email:" name={"gmail"}>
        <Input
          type="text"
          placeholder="Email"
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
      <Form.Item required name={"born"} label="Birthday:">
        <DatePicker
        />
      </Form.Item>
      <div className="row">
        <Form.Item required label="Country:" name={"country"} className="col-6">
          <Select
          allowClear
          >
            <Option value="uzb">Uzbekistan</Option>
          </Select>
        </Form.Item>
        <Form.Item required label="Region:" name={"region"} className="col-6">
          <Select
          allowClear
          >
            <Option value="bux">Bukhara</Option>
          </Select>
        </Form.Item>
      </div>
      <Button htmlType="submit" className={"bg-[#068fff] text-white"} onClick={() => handleSubmit}>
        Register
      </Button>
    </Form>
  );
};

export default Register;

  