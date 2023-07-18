import React, { useEffect } from "react";
import instance from "../configs/axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/authReducer";
import { useRouter } from "next/router";

const ProfileLayout = ({children}:{children:any}) => {

    const router = useRouter()
    const dispatch = useDispatch();
    const getMe = async () => {
        let token =  localStorage.getItem("accessToken") || "";
        try {
      let res = await instance({
        url: `user/access_token?token=${token}`,
        method: "GET",
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      dispatch(setUserInfo(res.data.user))
    } catch (error) {
        console.log(error)
        router.push("/auth/login")
    }
  };
  useEffect(() => {
    getMe();
  },[]);
  return <>Profile Layout{children}</>;
};

export default ProfileLayout;
