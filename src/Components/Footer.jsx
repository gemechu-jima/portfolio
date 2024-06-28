import { Link } from "react-router-dom"
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"
import DateObject from "react-date-object"
import { useState, useRef, useEffect } from "react"

const date=new DateObject()
const images=[
  {
    id:1,
    img_name:"image/image/babi.jpg"
  },
  {
    id:2,
    img_name:"image/image/istockphoto-490667270-1024x1024.jpg"
  },
  {
    id:3,
    img_name:"image/image/istockphoto-1049475350-1024x1024.jpg"
  },
  {
    id:4,
    img_name:"image/image/pexels-daniel-xavier-1121796.jpg"
  },
  {
    id:5,
    img_name:"image/image/pexels-italo-melo-2379004.jpg"
  },
  {
    id:6,
    img_name:"image/image/pexels-justin-shaifer-1222271.jpg"
  },
  {
    id:7,
    img_name:"image/image/pexels-spencer-selover-775358.jpg"
  },
  {
    id:8,
    img_name:"image/Mine.jpg"
  },
]

function footer() {
  const [index, setIndex]=useState(0)
  const [scroll, setScroll]=useState(0)
  const [maxScroll, setMaxScroll]=useState()
  const divRef=useRef()
  // window.addEventListener("scroll", ()=>{
  //   const scrolable=document.getElementById("page").scrollWidth-window.innerWidth
  //   const scrolled=window.scrollX
  //   setScroll(scrolled)
    
  // })
  const handleScroll=()=>{
    
    setScroll(divRef.current.scrollLeft)
  }
  const handleMaxScroll=()=>{
    const differentMaxScroll=divRef.current.scrollWidth-divRef.current.clientWidth;
    setMaxScroll(differentMaxScroll)
    console.log("maxScroll",differentMaxScroll)
  }
  const prev=()=>{
    divRef.current.scrollLeft -=300
    handleScroll()

  }
  const next=()=>{
    divRef.current.scrollLeft +=300
    handleScroll()

  }
  useEffect(()=>{
    divRef.current.addEventListener("scroll", () => {
      handleScroll();
      updateMaxScroll();
    });
    handleScroll()
     console.log("scroll", scroll)
    handleMaxScroll()
   },)
  return (
    <section className="w-screen h-screen bg-slate-500 relative" >
      <div className="  h-2/4 rounded-2xl left-16 flex items-center
       justify-center right-16 top-5  sm:absolute z-10 overflow-auto ">
      {scroll>0 
      &&<div className=" left-0 w-16 h-40 absolute flex items-center justify-center 
       text-gray-900 cursor-pointer  bg-gradient-to-r from-black  to-transparent z-40"  onClick={prev}>
       <FaChevronLeft size={30} id="prev_slider" className="rounded-full p-2  top-1/2 text-white hover:bg-gray-600"/>
      </div> 
      }
      <div id="page" ref={divRef} className=" scroll-bar flex overflow-x-scroll scroll-smooth">
      {
        images.map((image)=>(
          <img src={image.img_name} key={image.id} className="select-none w-[200px] h-40 rounded m-1 bg-contain  " />
        ))
      }
      </div>
      { scroll < maxScroll && 
      <div className=" right-0 w-16 h-40 absolute flex items-center justify-center
        text-gray-900 cursor-pointer  bg-gradient-to-l from-black  to-transparent hover:grad z-40"   onClick={next}>
       <FaChevronRight size={30} id="next_slider" className="rounded-full p-2  top-1/2 text-white hover:bg-gray-600"/>
      </div>}
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
         <a className="font-thin" href="tell:+251930851744">+251 (9) 30851744</a>
          <a className="font-thin" href="mailto:gemechujimacs@gmail.com">gemechujimacs@gmail.com</a>
         
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
         <Link to="https://www.facebook.com/gemechu.jima.75"> 
            <img src="social media/facebook.png" className="w-8 h-8 inline mr-2 rounded-full"/></Link>
            <Link to="https://www.linkedin.com/in/gemechu-jima-407880251">
              <img src="social media/linkedin.png" className="w-8 h-8 inline"/>
              </Link>
            <Link to="https://twitter.com/@tasojima">
             <img src="social media/twitter.png" className="w-8 h-8 inline ml-2"/>
             </Link>
            <Link to="https://github.com/gemechu-jima">
              <img src="social media/github.png" className="w-8 h-8 inline ml-2"/>
              </Link>
         </div>
       </div>
        <div>
          
        </div>
        </footer>
    </section>
  )
}

export default footer