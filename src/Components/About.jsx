

function About(props) {
  return (
    <div id="aboutme"  className="md:w-screen md:h-screen-[-5rem] relative flex flex-col items-center 
    justify-center gap-2 dark:bg-white bg-black text-white dark:text-black overflow-hidden">
      <h1 className="text-3xl mt-20 dark:text-black">About <span className="text-purple-700">Me</span></h1>
      <div className="flex sm:flex-row flex-col justify-between w-3/4 sm:h-3/4 mx-20 sm:my-20 gap-5">
            <div className="relative sm:w-2/5 w-full h-3/5 flex items-center justify-center">
             {props.darkMode ?  <img src="image/Bg-white.jpg" />:<img src="image/Bg-black.jpg" />} 
            </div>
          <div className="sm:w-4/6  w-full flex flex-col justify-center items-center sm:gap-10 gap-1 px-6 box-border">
              <h1 className="sm:text-3xl  font-serif text-center "> My Name is Gemechu Jima</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5">
              <div className="bg-slate-800  sm:w-40 sm:h-40 w-60 h-60 rounded-lg flex flex-col
               items-center justify-center sm:gap-4 gap-8 text-white">
                <img src="icons/experience.png" />
                <p>Experience <span>1 + years</span></p>
               
              </div>
              <div className="bg-slate-800  sm:w-40 sm:h-40 w-60 h-60 rounded-lg flex flex-col 
              items-center justify-center sm:gap-4 gap-8 text-white">
                <img src="icons/completed.png"/>
                <p c>Completed project <span>12 + <br/>completed</span></p>
              </div>
              <div className="bg-slate-800  sm:w-40 sm:h-40 w-60 h-60 rounded-lg flex flex-col items-center justify-center sm:gap-4 gap-8 text-white">
                <img src="icons/coming.png"/>
                <p>coming soon  <span>...</span></p>
              </div>
            </div>
            <p className="xl:mx-28 flex items-center justify-center ">
            I am a software developer Who loves to creates Website
            
             as well as web Design and app for people I think That people 
             should look at bigger picture when they creating something
            </p>
          
          </div>
        
      </div >
     </div>
  )
}

export default About