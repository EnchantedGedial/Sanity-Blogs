import React, { useState,useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
const Popups = () => {
    const [visiable,SetVisiable]=useState(false)
    const [Click,SetClick]=useState(0)

    const handlePopUp=()=>{
        SetVisiable(true)

    }


    const windowHeight=()=>{
        let heightToShow=400;
        const windowHeight = document.body.scrollTop || document.documentElement.scrollTop;

        if(heightToShow <= windowHeight){
            SetVisiable(true)
        }else(SetVisiable(false))
        
    }

    const OnlyOncePopUp=()=>{
        if(Click >0){
            SetVisiable(false)
        }
    }
    useEffect(() => {

        window.addEventListener("scroll",windowHeight)
      
    }, [])
    useEffect(() => {

        window.addEventListener("scroll",OnlyOncePopUp)
      
    }, [Click])
    
  return (
    <>
    <button onClick={handlePopUp}>Fucking U</button>
    <div className='flex m-auto  items-center content-center justify-center'>

    {visiable && (<div className='w-60 h-60 bg-gray-200 fixed flex top-15'>
        <div className='flex items-center content-center justify-center text-center'>

        This is Fucking Looks good
        </div>
        <AiFillCloseCircle  className='relative top-1 -right-4 text-3xl text-indigo-500' onClick={()=>{SetVisiable(false) 
            SetClick(Click +1)}}/>

    </div>)}
    </div>
    


      
    </>
  )
}

export default Popups
