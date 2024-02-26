import { Link } from "react-router-dom";
import classNames from "classnames";
function Portfolio() {
    const className1=classNames(`flex flex-col items-center transition duration-1000 
       translate-y-[-100%] group-hover:translate-y-0 bg-gradient-to-b to-transparent from-black
     justify-center absolute  inset-0 rounded-2xl text-center   box-border `);
     const className2=classNames(`flex flex-col items-center hover:opacity-10 
      transition duration-1000 opacity-100 bg-slate-500 hover:bg-opacity-0
     justify-center absolute  inset-0 rounded-2xl text-center  box-border  `);
  return ( 
    <section id="portfolio" className={`md:w-screen md:h-screen
      relative flex flex-col items-center justify-center
     gap-2 dark:bg-slate-100 bg-slate-700 text-white dark:text-black overflow-auto`}>
     <div className="mt-16 text-5xl gap-5">
     <h1 className="mb-3 font-extrabold ">Portfolio</h1>
      <h2 className="text-3xl">Latest Post</h2>
     </div>   

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-10 m-auto gap-4">
      <div className="relative sm:w-full sm:h-full box-border">
      <img src="image/dev.jpg" alt="developer" className=" w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
           <div className={className2}>
            <h1>December 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">Read More</button>
        
           </div>
          
        </div>
        <div className="relative sm:w-full sm:h-full box-border overflow-hidden group">
            <img src="image/Portfolio-Desk.jpg" className="opacity-100 hover:opacity-10 w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
            <div className={className1}>
            <h1>December 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="https://test-experience.netlify.app/" className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">Read More</Link>
           </div>
           
        </div>
        <div className="relative sm:w-full sm:h-full box-border">
            <img src="image/devbg.jpg" className=" w-full h-full rounded-2xl duration-500  hover:z-20 "/>
            <div className={className2}>
            <h1>December 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">Read More</button>
           </div>
        </div>
     
      </div>
    </section>
  )
}

export default Portfolio;