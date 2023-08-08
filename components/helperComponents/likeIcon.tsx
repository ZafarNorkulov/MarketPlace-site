import React, { ReactEventHandler } from 'react'

const LikeIcon = ({stroke,fill,width,height,className,onClick}:{stroke?:string,fill?:string;width?:number,height?:number,className?:string,onClick?:ReactEventHandler}) => {
  return (
    <svg onClick={onClick} stroke={stroke ? stroke : "currentColor"} fill={fill ? fill : "none"} stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className={className} height={height ? height : "1em"} width={width ? width : "1em"} xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
  )
}

export default LikeIcon
