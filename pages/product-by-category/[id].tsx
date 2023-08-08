import React, {  useEffect, useState } from "react";
import instance from "../../configs/axios";
import { useRouter } from "next/router";
import UserLayout from "../../layouts/userLayout";
import { IProductType } from "../../types/productType";
import Head from "next/head";

import ProductCard from "../../components/product/productCard";
const ProductByCategory = () => {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState<IProductType[] | null>(null);
  const productsListById = async () => {
    try {
      const res = await instance({
        url: `api/category/by-${id}`,
        method: "GET",
      });
      setProducts(res?.data);
    } catch (error) {
      // message.error(error?.response?.data?.detail || "Product Not Found")
    }
  };
  useEffect(() => {
    productsListById();
  }, [id]);
  return (
   <div className="px-5">
     <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <ProductCard data={products}/>
   </div>
  );
};

export default ProductByCategory;

ProductByCategory.layout = UserLayout;