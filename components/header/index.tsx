import React, { useState } from "react";
import { Badge, Button, Input, Popconfirm, Popover, Select } from "antd";
import { Avatar } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLang } from "../../redux/reducers/langReducer";
import { BiUser } from "react-icons/bi";
import { useAppSelector } from "../../redux/service";

const Header = () => {

  // const auth = useAppSelector(state=>state.auth);
  // console.log(auth)
  return (
    <>
      <nav className="header">
        <ul className="d-flex justify-content-between list-unstyled container">
          <li className="header-left d-flex align-items-center gap-5">
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <h1 style={{ color: "#068FFF" }}>Market Place</h1>
            </Link>
            <Select
              allowClear
              className="header-select-category"
              placeholder="Select a category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "texnika",
                  label: "Texnika",
                },
                {
                  value: "mebel",
                  label: "Mebel",
                },
                {
                  value: "uy",
                  label: "Uy",
                },
              ]}
            />
            <Input
              placeholder="Search"
              className="header-search-input"
              allowClear
              prefix={
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3063 19.6894L15.4311 14.0253C16.8429 12.3913 17.5469 10.2955 17.3966 8.17387C17.2464 6.05224 16.2535 4.06812 14.6245 2.63426C12.9955 1.20041 10.8558 0.427212 8.65051 0.475524C6.44523 0.523836 4.34417 1.38993 2.78441 2.89365C1.22464 4.39736 0.326253 6.42292 0.27614 8.54894C0.226027 10.675 1.02804 12.7378 2.51535 14.3082C4.00266 15.8787 6.06074 16.8359 8.26146 16.9808C10.4622 17.1256 12.6361 16.4469 14.331 15.0859L20.2062 20.7499L21.3063 19.6894ZM1.85738 8.74993C1.85738 7.41491 2.26801 6.10987 3.03736 4.99983C3.80671 3.8898 4.90021 3.02464 6.17959 2.51375C7.45897 2.00285 8.86676 1.86918 10.2249 2.12963C11.5831 2.39008 12.8307 3.03296 13.8099 3.97696C14.7891 4.92097 15.4559 6.1237 15.7261 7.43307C15.9962 8.74245 15.8576 10.0996 15.3277 11.333C14.7977 12.5664 13.9003 13.6207 12.7489 14.3624C11.5975 15.1041 10.2438 15.4999 8.859 15.4999C7.00268 15.4979 5.22299 14.7862 3.91038 13.5207C2.59776 12.2553 1.85943 10.5395 1.85738 8.74993Z"
                    fill="#8A8A8A"
                  />
                </svg>
              }
            />
          </li>

          <li className="d-flex justify-content-between align-items-center gap-4">
            <Badge count={3} >
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{cursor: "pointer"}}
              >
                <path
                  d="M15.8375 1.5C16.3836 1.49954 16.9242 1.6081 17.4278 1.81931C17.9313 2.03052 18.3877 2.34014 18.77 2.73C19.5578 3.52979 19.9994 4.60737 19.9994 5.73C19.9994 6.85264 19.5578 7.93022 18.77 8.73L11 16.5975L3.23001 8.73C2.4422 7.93022 2.00061 6.85264 2.00061 5.73C2.00061 4.60737 2.4422 3.52979 3.23001 2.73C3.61258 2.34042 4.06895 2.03096 4.57245 1.81972C5.07595 1.60848 5.6165 1.49968 6.16251 1.49968C6.70853 1.49968 7.24908 1.60848 7.75258 1.81972C8.25608 2.03096 8.71245 2.34042 9.09501 2.73L11 4.68L12.8975 2.745C13.2787 2.35049 13.7355 2.0369 14.2407 1.82298C14.7458 1.60906 15.2889 1.49921 15.8375 1.5ZM15.8375 2.01214e-06C15.0917 -0.000630028 14.3533 0.147643 13.6656 0.436128C12.9779 0.724614 12.3547 1.1475 11.8325 1.68L11 2.52L10.1675 1.68C9.64473 1.14846 9.02136 0.726309 8.33376 0.438145C7.64615 0.149981 6.90806 0.00157307 6.16251 0.00157307C5.41697 0.00157307 4.67888 0.149981 3.99127 0.438145C3.30367 0.726309 2.6803 1.14846 2.15751 1.68C1.09392 2.76272 0.497986 4.21977 0.497986 5.7375C0.497986 7.25523 1.09392 8.71228 2.15751 9.795L11 18.75L19.8425 9.795C20.9061 8.71228 21.502 7.25523 21.502 5.7375C21.502 4.21977 20.9061 2.76272 19.8425 1.68C19.3199 1.14818 18.6966 0.725734 18.0089 0.437298C17.3213 0.148862 16.5832 0.000207074 15.8375 2.01214e-06Z"
                  fill="#8A8A8A"
                />
              </svg>
            </Badge>
            <Badge count={2} >
              <svg
                className="mx-0"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{cursor:"pointer"}}
              >
                <g clipPath="url(#clip0_455_5967)">
                  <path
                    d="M7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5Z"
                    fill={"#8A8A8A"}
                  />
                  <path
                    d="M18 22.5C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5Z"
                    fill={"#8A8A8A"}
                  />
                  <path
                    d="M21 5.24991H4.365L3.75 2.09991C3.71494 1.92795 3.62068 1.77374 3.48364 1.6641C3.3466 1.55447 3.17546 1.49637 3 1.49991H0V2.99991H2.385L5.25 17.3999C5.28506 17.5719 5.37932 17.7261 5.51636 17.8357C5.6534 17.9453 5.82454 18.0034 6 17.9999H19.5V16.4999H6.615L6 13.4999H19.5C19.6734 13.5041 19.8429 13.4482 19.9796 13.3415C20.1163 13.2348 20.2119 13.0841 20.25 12.9149L21.75 6.16491C21.7751 6.05363 21.7745 5.93808 21.7483 5.82706C21.722 5.71604 21.6708 5.61247 21.5985 5.52424C21.5261 5.436 21.4347 5.36543 21.3309 5.3179C21.2272 5.27036 21.114 5.24711 21 5.24991ZM18.9 11.9999H5.715L4.665 6.74991H20.0625L18.9 11.9999Z"
                    fill={"#8A8A8A"}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_455_5967">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Badge>

            <Link href={"/auth"}>
            <button type="button" className="btn btn-outline-primary" >Kirish</button>
            </Link>

              {/* <Avatar
                size={40}
                onClick={() => setOpenPopConfirm(!openPopConfirm)}
                className="d-flex align-items-center justify-content-center"
                style={{cursor: "pointer",background: "#068FFF"}}
              >
                <BiUser style={{ fontSize: "20px" }} />
              </Avatar> */}
          </li>
        </ul>
      </nav>
      <br className="d-block" style={{ width: "100vw" }} />
    </>
  );
};

export default Header;
