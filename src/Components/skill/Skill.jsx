import { useState } from "react";
import { skills } from "../../Utils/skill";
import ProgressBar from "./ProgressBar";
function Skill() {
  const [selectedCategory, setSelectedCategory] = useState("Front End Skill");
  return (
    <section
      id="skill"
      className="flex flex-col items-center dark:bg-black bg-gray-200 pb-7 text-center dark:text-white sm:pb-1 xl:h-screen xl:w-screen relative"
    >
      <div className="mt-14 text-6xl">
        <h1> My skill </h1>
      </div>

      <div className="w-min-[50%] mx-auto h-full my-auto mt-10 flex sm:flex-row flex-col md:gap-36 items-center  p-3 rounded">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl my-4 ">My profession skill </h1>
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${category===selectedCategory ?"bg-sky-500" :"dark:bg-gray-900 bg-white"}  dark:text-white font-extrabold  px-10 py-3 rounded-md`}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          <h2 className=" text-4xl text-ellipsis">{selectedCategory}</h2>
          <ul className="py-10 grid sm:grid-cols-2 grid-cols-1 gap-6 overflow-x-auto md:w-[45rem] h-96 scrollWithCustom ">
            {skills[selectedCategory].map((skill) => (
              <li key={skill.id} className="">
                <div className=" dark:bg-gray-900 bg-gray-400 dark:text-white py-5 rounded-lg px-10 flex flex-col my-2">
                 <div className=" flex justify-between"><span>{skill.name}</span></div>
                 <ProgressBar percent={skill.percent}/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="flex sm:flex-row m-auto w-full justify-center flex-col gap-10 ">
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
      <img src="icons/React.png" className="inline  "/><span>ReactJS</span>
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
      <img src="icons/mongodb.png" alt="MDB" className="inline w-16 pr-5"/><span>MongoDB</span>
      </div>
      <div>
      <img src="icons/nodejs.png" className="inline  pr-5"/><span>NodeJS</span>
      </div>
      <div>
      <img src="icons/PHP.png" className="inline  pr-5"/><span>PHP</span>
      </div>

    </div>
    </div>
 </div> */}
    </section>
  );
}

export default Skill;
