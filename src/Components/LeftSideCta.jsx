import { Link } from "react-router-dom";



function LeftSideCta() {
 
 
  return (
    <aside className="md:w-6/12 md:h-screen items-center flex justify-center relative">
      <div className="absolute  xl:w-72 xl:h-72  md:w-64 md:h-64  md:top-24 md:left-10 w-32 h-32  bg-white rounded-lg md:flex items-center justify-center gap-10 flex-col hidden ">
        <div className="flex gap-4 items-center">
        <Link to="https://github.com/gemechu-jima"> 
        <img src="social media/github.png" className="w-10 h-10  rounded-full"/></Link>
        <span>More project completed</span>
        </div>
        <div>
        <p><span className="text-blue-900">See About Me</span> </p>
        <div className="mt-2">
            <Link to="https://github.com/gemechu-jima"> <img src="social media/facebook.png" className="w-8 h-8 inline mr-2 rounded-full"/></Link>
             <img src="social media/linkedin.png" className="w-8 h-8 inline"/>
             <img src="social media/twitter.png" className="w-8 h-8 inline ml-2"/>
             <img src="social media/github.png" className="w-8 h-8 inline ml-2"/>
             </div>
        </div>
       <button className="bg-purple-500 text-white px-3 py-2 box-border rounded-full w-64" >
        View Detail</button>
      </div>
      <div className="flex items-center justify-center md:ml-60 bg-yellow-400 rounded-full pt-2 pr-2 ">
      <img src="image/Gji.JPG" alt="Gemechu Jima" 
       className=" animation rounded-full xl:w-[30rem] xl:h-[30rem] md:w-72 md:h-72 w-64 h-64 "/>
      </div>
     <div className="bg-purple-700 rounded-2xl absolute xl:bottom-56 md:bottom-72 md:left-1/2 xl:w-72 md:w-64 md:py-2 w-48 py-1 bottom-5 sm:flex justify-center items-center gap-3 hidden">
        <img src="image/gj.jpg" className="w-10 h-10 inline rounded-full"/>
        <span className="text-white">See pending Message</span>
     </div>
   </aside>
  )
}

export default LeftSideCta;