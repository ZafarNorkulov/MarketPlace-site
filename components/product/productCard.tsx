import React, { Dispatch, FormEvent, useContext, useEffect, useState } from "react";
import { IProductType } from "../../types/productType";
import { FILE_URL } from "../../configs/utils/request";
import Image from "next/image";
import {  Collapse, Form, Input, Slider, notification } from "antd";
import CartIcon from "../helperComponents/cartIcon";
import LikeIcon from "../helperComponents/likeIcon";
import { MainContext } from "../../context/context";
import {MdOutlineKeyboardArrowUp} from "react-icons/md"
import Link from "next/link";

const ProductCard = ({ data }: { data: IProductType[] | null }) => {

  const {setLikedProducts,likedProducts,basketProducts,setBasketProducts}: { setLikedProducts: Dispatch<number[]>; likedProducts: number[],basketProducts:number[],setBasketProducts:Dispatch<number[]> } =useContext(MainContext);
  const likeIconHandler = (e:FormEvent, id:number) => {
    e.stopPropagation();
    e.preventDefault();
    let arr: number[] = JSON.parse(localStorage.getItem("likeds") || "[]");
    if (arr?.includes(id)) {
      arr = arr?.filter((i) => i !== id);
      localStorage.setItem("likeds", JSON.stringify(arr));
      setLikedProducts(arr);
    } else {
      arr?.push(id);
      localStorage.setItem("likeds", JSON.stringify(arr));
      setLikedProducts(arr);
    }
  };
  const basketIconHandler = (e:FormEvent, id:number) => {
    e.stopPropagation();
    e.preventDefault();
    let arr: number[] = JSON.parse(localStorage.getItem("basket") || "[]");
    if (arr?.includes(id)) {
      arr = arr?.filter((i) => i !== id);
      setBasketProducts(arr);
      localStorage.setItem("basket", JSON.stringify(arr));
    } else {
      arr?.push(id);
      setBasketProducts(arr);
      localStorage.setItem("basket", JSON.stringify(arr));
      notification.open({
        message: "Saved",
        description: "Product saved to Korzina!",
        duration: 1.5,
      });
    }
  };
  return (
    
      <div className="grid grid-cols-12 md:gap-5 gap-2 product-card mt-5">
      {data?.map((item) => (
        <Link href={`/product/${item?.title}`} 
          className=" lg:col-span-3 col-span-6 rounded-lg  overflow-hidden md:shadow-lg cursor-pointer"
          key={item?.id}
        >
          <div className="product-card-header relative w-full md:h-[265px] h-[170px] bg-slate-100 rounded-xl">
            <Image
              src={FILE_URL + item?.images[0]?.file_name}
              fill
              className="w-full h-full max-w-full max-h-full object-contain rounded-lg"
              alt=""
            />
          
              {likedProducts?.includes(item?.id) ? (
            <div className="absolute top-2 right-3 z-10 p-[6px] bg-white rounded-full shadow-lg favourite-wrapper">
               
              <LikeIcon onClick={(e)=>likeIconHandler(e,item?.id)} className="text-xl" fill={"#ff0000"} stroke="#ff0000" />
            </div>
              ) : (
                <div className="absolute top-2 right-3 z-10 p-[6px] bg-white rounded-full shadow-lg favourite-wrapper">
                <LikeIcon onClick={(e)=>likeIconHandler(e,item?.id)} className="text-xl" stroke="currentColor" />
                </div>
              )}
          </div>
          <div className="product-card-body py-2 px-3  flex flex-col justify-between  h-[200px] ">
            <span className="text-sm  font-medium  md:leading-6 hover:text-[#068FFF] duration-300 md:h-auto h-[40px] leading-5">
              {item?.title}
            </span>
           <div className="flex flex-col gap-y-1">
           <h4 className="text-lg leading-6">{item?.price} so'm</h4>
           <h5 className="max-w-[140px] py-1 px-2 rounded-md text-xs bg-[#A2FF86]">754  000 so'm x 12 oy</h5>
           </div>

              <div className="flex gap-3">
                <div onClick={(e)=>basketIconHandler(e,item?.id)} className="border-2 border-[#111] md:p-2 md:px-3 px-1 py-1 rounded-lg hover:bg-[#9c9b9b21]">
            <CartIcon  color="#111" width={20} height={20} />
        </div>
            <button
              className="block w-full border-2 sm:text-sm text-xs border-[#068FFF] text-[#068fff] hover:bg-[#bdddf726] md:py-2 px-1 rounded-[8px]"
            >
              Installments
            </button>
              </div>
          </div>
        </Link>
      ))}
      
    </div>
  );
};

export default ProductCard;
