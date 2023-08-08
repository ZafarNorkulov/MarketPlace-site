import React, { Dispatch, useContext, useState } from "react";
import {
  Badge,
  Input,
  Select,
} from "antd";
import { Avatar } from "antd";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import CategoryMenu from "../catgoriesModal";
import CartIcon from "../helperComponents/cartIcon";
import LikeIcon from "../helperComponents/likeIcon";
import { MainContext } from "../../context/context";

const Header = () => {
  const {setLikedProducts,likedProducts,basketProducts,setBasketProducts}: { setLikedProducts: Dispatch<number[]>; likedProducts: number[],basketProducts:number[],setBasketProducts:Dispatch<number[]> } =useContext(MainContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
 <div className="header relative top-0 left-0 right-0 shadow-md mb-5">
     <nav className="px-5">
      <Link href={"/"} className="header-left lg:hidden cursor-pointer block text-center mx-auto">
        <h1 className="text-[#068FFF] text-2xl ">Market Place</h1>
      </Link>
      <ul className="flex justify-between py-5 gap-3 items-center">
        <li className="header-left gap-5">
          <Link href={"/"}>

          <h1 className="text-[#068FFF] lg:block hidden text-2xl ">
            Market Place
          </h1>
          </Link>
          <div
            className="lg:hidden block p-[11px] border rounded-md bg-white select-none hover:bg-slate-300 transition-opacity duration-200 ease-in cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <FiMenu className="text-2xl" />
            <CategoryMenu openMenu={openModal} setOpenMenu={setOpenModal} />
          </div>
        </li>
        <li className="flex items-center justify-between gap-5">
          <Select
            allowClear
            className="w-[150px] lg:flex hidden"
            placeholder="Select a category"
          >
            <Select.Option>Telefon</Select.Option>
            <Select.Option>Maishiy texnika</Select.Option>
            <Select.Option>Noutbuklar</Select.Option>
          </Select>
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

        <li className="flex justify-between items-center gap-4">
         <Link href={"/favourites"} className="lg:block hidden">
         <Badge count={likedProducts.length} >
           <LikeIcon width={24} height={24} stroke="#8A8A8A"/>
          </Badge>
          </Link>
         <Link href={"/korzina"} className="lg:block hidden">
         <Badge count={basketProducts.length} >
           <CartIcon/>
          </Badge>
         </Link>
          <Link href={"/auth/login"}>
            <Avatar
              className="flex items-center justify-center cursor-pointer bg-[#068FFF]"
              size={40}
              icon={<BiUser className="text-xl" />}
            />
          </Link>
        </li>
      </ul>
    </nav>
      <hr />
 </div>
  );
};

export default Header;
