

function Skill() {
  return (
    <section id="skill" className="xl:w-screen xl:h-screen bg-black text-center flex items-center flex-col text-white pb-7 sm:pb-1">
    <div className="mt-14 text-6xl">
        <h1> My skill </h1>
    </div>

 <div className="flex sm:flex-row m-auto w-full justify-center flex-col gap-10 ">
   <div className=" flex flex-col justify-center items-center md:w-1/3 h-full w-[90%] m-auto sm:gap-10">
    <h1 className="font-jac sm:text-5xl text-3xl">Front End Developer</h1>
    <div className="grid grid-cols-2 items-center w-full h-full rounded-3xl bg-slate-900 gap-5 sm:pl-10 py-3">
      <div className="flex justify-btween items-center w-1/2 gap-2">
      <img src="icons/HTML5.png" className="inline " /><span>HTML5</span>
      </div>
      <div className="flex justify-between items-center w-1/3 gap-2">
      <img src="icons/CSS3.png" className="inline "/><span>CSS3</span>
      </div>
      <div className="flex justify-between items-center w-1/3 gap-2">
      <img src="icons/JavaScript.png" className="inline "/> <span>Javascript</span>
      </div>
      <div className="flex justify-between items-center w-1/3 gap-3">
      <img src="icons/React.png" className="inline  "/><sapn>RaectJS</sapn>
      </div>
      <div className="flex justify-between items-center w-1/3 gap-3">
      <img src="icons/Bootstrap.png" className="inline  "/> <span>Bootstrap</span>
      </div>
      <div className="flex justify-between items-center w-1/3 gap-3"> 
      <img src="icons/Tailwindcss.png" className="inline  "/><span>TailwindCSS</span>
      </div>
     
    </div>
   </div>
   <div className="flex flex-col justify-center items-center md:w-1/3 h-full w-[90%] m-auto sm:gap-10">
    <h1 className="font-jac sm:text-5xl text-3xl">Back End Developer</h1>
    <div className="grid grid-cols-2 items-center w-full h-full rounded-3xl bg-slate-900 gap-5">
      <div>
      <img src="icons/MySQL.png" className="inline  pr-5"/> <span>MYSQL</span>
      </div>
      <div>
      <img src="icons/PostgreSQl.png" className="inline  pr-5"/> <span>PostgreSQL</span>
      </div>
      <div>
      <img src="icons/nodejs.png" className="inline  pr-5"/><span>NodeJS</span>
      </div>
      <div>
      <img src="icons/PHP.png" className="inline  pr-5"/><span>PHP</span>
      </div>
    </div>
    </div>
 </div>
</section>
  )
}

export default Skill