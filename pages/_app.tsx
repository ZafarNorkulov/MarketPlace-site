import { Provider } from "react-redux";
import "../styles/main.scss"
import store from "../redux/store/index";
import { MainContext } from "../context/context";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: any) {
  const [likedProducts,setLikedProducts] = useState<number[]>([])
  const [basketProducts,setBasketProducts] = useState<number[]>([])
  useEffect(() => {
    let liked_arr: number[] = JSON.parse(localStorage.getItem("likeds") || "[]");
    setLikedProducts(liked_arr);
  },[])
  const Layout = Component.layout;
  return (
<Provider store={store}>
  <MainContext.Provider value={{ likedProducts, setLikedProducts,basketProducts,setBasketProducts}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </MainContext.Provider>
    </Provider>
  );
}
