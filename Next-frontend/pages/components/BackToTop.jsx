import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const BackToTop = () => {

    const [visiable,SetisVisiable]= useState(false)
    const handleToTop=()=>{
        window.scrollTo({top:0,left:0 , behavior:"smooth"})

    }
const TakeToTop=()=>{
    let heightToHide =200;
    const windowHeight =document.body.scrollTop || document.documentElement.scrollTop;
    if(heightToHide<=windowHeight){
        SetisVisiable(true)

    }else{SetisVisiable(false)}

}
    useEffect(() => {

        window.addEventListener("scroll",TakeToTop)
      
    }, [])
    
  return (
    <>
{visiable &&(
   <div onClick={handleToTop}>
<BsFillArrowUpCircleFill className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-indigo-600 duration-300 text-indigo-400 text-4xl' style={{position:"fixed", bottom:30,right:5}}/>
    </div> 
)}
    
      
    </>
  )
}

export default BackToTop
