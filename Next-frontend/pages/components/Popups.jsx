import React, { useState,useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
const Popups = () => {
    const [visiable,SetVisiable]=useState(false)
    const [Click,SetClick]=useState(0)

    const handlePopUp=()=>{
        SetVisiable(true)
        

    }


    const windowHeight=()=>{
        let heightToShow=1500;
        const windowHeight = document.body.scrollTop || document.documentElement.scrollTop;

        if(heightToShow <= windowHeight){
            SetVisiable(true);
            // document.body.style.overflowY ="hidden";
        }else {
            SetVisiable(false);
            // document.body.style.overflowY ="visible ";
        }
        
    }

    const OnlyOncePopUp=()=>{
        if(Click >0){
            SetVisiable(false)
            // document.body.style.overflowY ="visiable";
        }else{
            
            // document.body.style.overflowY ="hidden";
        }
    }
    useEffect(() => {

        window.addEventListener("scroll",windowHeight)
      
    }, [])
    useEffect(() => {

        window.addEventListener("scroll",OnlyOncePopUp)
      
    }, [Click])
    // const styles = { 
    //     transform: `translate(-50%, ${y}px)` 
    // };
    
  return (
    <>
    {/* <button onClick={handlePopUp}>Fucking U</button> */}
    <div className='flex m-auto  items-center content-center justify-center'>

    {visiable && (<div className="container">
    <div className='z-10 w-50 h-50 bg-gray-200 fixed flex items-center content-center justify-center text-center rounded-lg' style={{ top:"50% ",left:"50%",transform: "translate(-50%, -50%)"}}>
        <div className='flex items-center content-center justify-center text-center'>

        This is Fucking Looks good
        </div>
        

    <AiFillCloseCircle 
     className='relative  top-30 right-0 text-3xl text-indigo-500' 
     onClick={()=>{ 
        SetVisiable(false) 
        SetClick(Click +1)
        }}/>
         </div>
    


   
     
    </div>)}
    </div>
    


      
    </>
  )
}

export default Popups
