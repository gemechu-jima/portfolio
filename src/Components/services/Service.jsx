
import { useState } from "react";
import {FaArrowRight} from "react-icons/fa"
function Service() {
  const [show, setshow]=useState('')
  // if(show===1) return  <Design/>
  // if(show===3) return  <Developer/>
  // if(show===4) return  <Support/>
  return (
    <section id="service" className="md:w-screen md:h-screen bg-slate-800 text-white text-center flex flex-col  bg-[url('/image/bg.jpg')] bg-fixed relative ">
      <h1 className="text-5xl mt-16"> My Service</h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 w-[94%] md:mt-[5rem] mx-auto gap-y-2 gap-10 mb-3  ">
          <div className="relative h-72 sm:h-full xl:h-[25rem] py-2 flex items-center justify-center rounded-3xl bg-green-300 bg-cover overflow-hidden hover:scale-110 hover:-rotate-3 ">
            <div className="flex flex-col items-center justify-between relative  text-center  mx-5 box-border  ">
            <img src="icons/computer.png" className="inline"/>
            <h1 className="sm:text-5xl text-2xl mt-5">Web Designer</h1>
            <button className="bg-purple-700 text-white  rounded-3xl mt-10 px-4 py-2 z-20" onClick={()=>setshow(1)}>Read More <FaArrowRight className="inline"/> </button>
           </div>
          </div>
          <div className="relative  py-2 h-72 sm:h-full xl:h-[25rem]  flex items-center justify-center rounded-3xl bg-slate-500 hover:scale-110 bg-cover overflow-hidden  ">
           
            <div className="flex flex-col items-center justify-between relative  text-center   mx-5 box-border  text-black">
            <img src="icons/Figma.png" className="inline"/>
            <h1 className="sm:text-5xl text-2xl mt-5">Web Developer</h1>
            <button className="bg-purple-700 text-white  rounded-3xl mt-10 px-4 py-2 z-20" onClick={()=>setshow(2)}>Read More <FaArrowRight className="inline"/> </button>
           </div>
          </div>
          <div className="relative  py-2  h-72 sm:h-full xl:h-[25rem] flex items-center justify-center rounded-3xl bg-amber-400 hover:scale-110 hover:rotate-3 bg-cover overflow-hidden  ">
            <div className="flex flex-col items-center justify-between relative  text-center  mx-5 box-border ">
            <img src="icons/Support.png" className="inline"/>
            <h1 className="sm:text-5xl text-2xl mt-5">Support</h1>
            <button className="bg-purple-700 text-white  rounded-3xl mt-10 px-4 py-2 z-20" onClick={()=>setshow(3)}>Read More <FaArrowRight className="inline"/> </button>
           </div>
          </div>
          </div>
         
    </section>
  )
}

export default Service;


// const Design=()=>{
//   return(
//    <section id="service" className="absolute z-100 w-[75%] h-[75%] bg-gray-900 text-white text-center 
//  flex flex-col 
//     left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//   <h1>Design what I use and</h1>
// </section>
//   )
// }
// const Developer=()=>{
//   return(
//      <section id="service" className="md:w-screen md:h-screen bg-slate-800 text-white text-center flex flex-col  bg-[url('/image/bg.jpg')] bg-fixed relative 
//     left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//   <h1>Design what I use and</h1>
// </section>
//   )
// }
// const Support=()=>{
//   return(
//      <section id="service" className="md:w-screen md:h-screen bg-slate-800 text-white text-center flex flex-col  bg-[url('/image/bg.jpg')] bg-fixed relative 
//     left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//   <h1>Design what I use and</h1>
// </section>
//   )
// }