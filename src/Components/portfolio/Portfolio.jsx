import { Link } from "react-router-dom";
import classNames from "classnames";
function Portfolio() {
    const  className1=classNames(`flex flex-col items-center transition duration-1000 
       translate-y-[-100%] group-hover:translate-y-0 bg-gradient-to-b to-transparent from-black
     justify-center absolute  inset-0 rounded-2xl text-center   box-border `);
  return ( 
    <section id="portfolio" className={`md:w-screen md:h-screen
      relative flex flex-col items-center justify-center
     gap-2 dark:bg-slate-900 bg-slate-200 text-black dark:text-white overflow-auto`}>
     <div className="mt-16 text-5xl gap-5">
     <h1 className="mb-3 font-extrabold ">Portfolio</h1>
      <h2 className="text-3xl">Latest Post</h2>
     </div>   

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-10 m-auto gap-4">
      <div className="relative sm:w-full sm:h-full box-border overflow-hidden group">
      <img src="image/blogpodcast.jpg" alt="developer" className=" w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
           <div className={className1}>
            <h1>April 3 2024 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="https://blogpodcast.vercel.app" className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">see More</Link>
        
           </div>
          
        </div>
        <div className="relative sm:w-full sm:h-full box-border overflow-hidden group">
            <img src="image/test.jpg" className="opacity-100 hover:opacity-10 w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
            <div className={className1}>
            <h1>December 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="https://test-experience.netlify.app/" className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">see More</Link>
           </div>
           
        </div>
        <div className="relative sm:w-full sm:h-full box-border overflow-hidden group">
            <img src="image/e-commerce.png" className="opacity-100 hover:opacity-10 w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
            <div className={className1}>
              <h1> may 1, 2024</h1>
            <h1>E-commerce web site</h1>
            <p >You can check every function with login demo account from .
            get the account customer service link if you are question inbox it .</p>
            <Link to="https://mern-ecommerce12.netlify.app/" className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">See more</Link>
           </div>
        </div>
     
      </div>
    </section>
  )
}

export default Portfolio;