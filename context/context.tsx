import { createContext, Dispatch, SetStateAction } from "react";

export type TypeContextDefault = {
    likedProducts:number[], 
    setLikedProducts:Dispatch<SetStateAction<number[]>>,
    basketProducts: number[],
    setBasketProducts:Dispatch<SetStateAction<number[]>>
}

export const MainContext = createContext<TypeContextDefault>({
    likedProducts:[], 
    setLikedProducts: () => {},
    basketProducts: [],
    setBasketProducts: ()=>{}
});
