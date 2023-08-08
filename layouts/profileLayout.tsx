import React, { ReactChild, useEffect } from "react";
import instance from "../configs/axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/authReducer";
import { useRouter } from "next/router";

const ProfileLayout = ({children}:{children:ReactChild}) => {
  const router = useRouter();
const token = localStorage?.getItem("access_token");
useEffect(() => {
  if(!token){
    router.push("/auth/login")
  }
},[token])
  return <>{children}</>;
};

export default ProfileLayout;
