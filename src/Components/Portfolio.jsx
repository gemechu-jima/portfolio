import classNames from "classnames";
function Portfolio() {
    const className=classNames("flex flex-col items-center justify-center absolute mt-4 inset-2 md:inset-x-5 text-center   box-border ");
  return (
    <section className="md:w-screen md:h-screen relative flex flex-col items-center justify-center gap-2 dark:bg-slate-100 bg-slate-700 text-white dark:text-black overflow-hidden">
     <div className="mt-10 text-5xl gap-5">
     <h1 className="mb-3 font-extrabold ">Portfolio</h1>
      <h2 className="text-3xl">Latest Post</h2>
     </div>   

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-10 m-auto gap-4">
      <div className="relative sm:w-full sm:h-full box-border">
      <img src="image/Become_a_Front_End_Developer.jpg" className="opacity-100 hover:opacity-10 w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
           <div className={className}>
            <h1>December 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">Read More</button>
           </div>
        </div>
        <div className="relative sm:w-full sm:h-full box-border">
            <img src="image/Portfolio-Desk.jpg" className="opacity-100 hover:opacity-10 w-full h-full rounded-2xl duration-500 z-10 hover:-z-10 "/>
            <div className={className}>
            <h1>December 19 16:00</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="bg-purple-700 text-white  rounded-3xl sm:mt-10 px-4 py-2">Read More</button>
           </div>
           
        </div>
        <div className="relative sm:w-full sm:h-full box-border">
            <img src="image/latest.jpg" className="opacity-10 hover:opacity-100 w-full h-full rounded-2xl duration-500  hover:z-10"/>
            <div className={className}>
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