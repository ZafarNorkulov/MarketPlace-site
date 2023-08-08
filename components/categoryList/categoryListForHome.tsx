import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import instance from "../../configs/axios";
import Image from "next/image";
import img from "../../assets/konditsioner.png";
import Link from "next/link";
const CategoryListForHome = () => {
  const [id,setId] = useState<number | null>(null)
  const [allCategory, setAllCategory] = useState<
    [{ title: string; id: number }] | null
  >(null);
  const fetchData = async () => {
    try {
      const res = await instance({
        url: "/api/category/list",
        method: "GET",
      });
      setAllCategory(res.data);
    } catch (error: any) {
      // message.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="categories mt-10">
      <Swiper
        cssMode
        loop
        slidesPerView={7}
        parallax
        navigation
        modules={[Navigation, Parallax]}
      >
        <div className="px-6">
          {allCategory?.map((item, index) => (
            <SwiperSlide key={index}>
              {" "}
              <Link href={`/product-by-category/${item?.id}`} className="flex flex-col items-center justify-center text-center gap-3" >
                <Image src={img} alt="" className="w-[128px] h-[128px] rounded-full"/>
                <h5>{item?.title}</h5>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CategoryListForHome;
