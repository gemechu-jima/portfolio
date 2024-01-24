import { Link } from "react-router-dom"
import DateObject from "react-date-object"

  const date=new DateObject()
function footer() {
  return (
    <section className="w-screen h-screen bg-slate-500 relative" >
      <div className="h-2/4 rounded-2xl left-16 right-16 top-5 bg-purple-600 sm:absolute z-10">

      </div>
        <footer className="bg-black rounded-t-lg sm:h-4/6 sm:absolute bottom-0 inset-x-2 text-white text-center overflow-hidden">
        <img src="image/blackLogo.jpg" className="flex sm:hidden"/>
          <div className=" sm:w-4/6  sm:m-auto sm:mt-44 flex items-center flex-row  sm:justify-between sm:gap-5 text-white ">
            <img src="image/blackLogo.jpg" className="hidden sm:flex"/>
        
          <div className="flex flex-col gap-4">
          <h1 className="font-extrabold">Visit Link</h1>
          <a href="/privancy" className="font-thin">Privancy</a>
          <a href="/term" className="font-thin">Condition and Term</a>
          </div>
          <div className="flex flex-col gap-4">
          <h1 className="font-extrabold">Portfolio</h1>
          <a href="#" className="font-thin">Home</a>
          <a href="#aboutme" className="font-thin">About me</a>
          <a href="#service" className="font-thin">Service</a>
          </div>
         <div className="flex flex-col gap-4">
         <h1 className="font-extrabold">Contact</h1>
         <p className="font-thin">+251 (9) 30851744</p>
          <p className="font-thin">gemechujimacs@gmail.com</p>
         
         </div>
          <div className="flex flex-col gap-4">
          <h1 className="font-extrabold">Address</h1>
          <p className="font-thin">Addis Ababa,</p>
          <p className="font-thin">street</p>
          <p className="font-thin">12 ...</p>
          </div>
         
          </div>
          <hr/>
       <div className="sm:flex w-4/5 m-auto mt-5 justify-between">
         <p>CopyRight&copy; Gemechu {"    "}   {date.format("YYYY")} {"   "}<span> All Right is reserved</span></p>
         <div>
          <img src="social media/facebook.png" className="w-10 h-10 inline mr-2"/>
          <img src="social media/linkedin.png" className="w-10 h-10 inline"/>
          <img src="social media/twitter.png" className="w-10 h-10 inline ml-2"/>
          <img src="social media/github.png" className="w-10 h-10 inline ml-2"/>
         </div>
       </div>
        
        </footer>
    </section>
  )
}

export default footer