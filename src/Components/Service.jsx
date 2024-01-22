
import {FaArrowRight} from "react-icons/fa"
function Service() {
  return (
    <section className="xl:w-screen xl:h-screen bg-slate-800 text-white text-center flex flex-col ">
      <h1 className="text-5xl "> My Service</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 w-[94%] md:mt-[10rem] mx-auto gap-y-2 gap-10 mb-3  ">
          <div className="relative h-72 sm:h-full xl:h-[25rem] py-2 flex items-center justify-center rounded-3xl bg-green-300 bg-cover overflow-hidden hover:scale-110 hover:-rotate-3 ">
            <div className="flex flex-col items-center justify-between relative  text-center  mx-5 box-border  ">
            <img src="icons/computer.png" className="inline"/>
            <h1 className="sm:text-5xl text-2xl mt-5">Web Designer</h1>
            <button className="bg-purple-700 text-white  rounded-3xl mt-10 px-4 py-2 z-20">Read More <FaArrowRight className="inline"/> </button>
           </div>
          </div>
          <div className="relative  py-2 h-72 sm:h-full xl:h-[25rem]  flex items-center justify-center rounded-3xl bg-slate-500 hover:scale-110 bg-cover overflow-hidden  ">
           
            <div className="flex flex-col items-center justify-between relative  text-center   mx-5 box-border  text-black">
            <img src="icons/Figma.png" className="inline"/>
            <h1 className="sm:text-5xl text-2xl mt-5">Web Developer</h1>
            <button className="bg-purple-700 text-white  rounded-3xl mt-10 px-4 py-2 z-20">Read More <FaArrowRight className="inline"/> </button>
           </div>
          </div>
          <div className="relative  py-2  h-72 sm:h-full xl:h-[25rem] flex items-center justify-center rounded-3xl bg-amber-400 hover:scale-110 hover:rotate-3 bg-cover overflow-hidden  ">
            <div className="flex flex-col items-center justify-between relative  text-center  mx-5 box-border ">
            <img src="icons/Support.png" className="inline"/>
            <h1 className="sm:text-5xl text-2xl mt-5">Support</h1>
            <button className="bg-purple-700 text-white  rounded-3xl mt-10 px-4 py-2 z-20">Read More <FaArrowRight className="inline"/> </button>
           </div>
          </div>
          </div>
         
    </section>
  )
}

export default Service;