import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DateObject from "react-date-object";
import classNames from "classnames"
import axios from "axios"
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
const date = new DateObject();
const images = [
  {
    id: 1,
    img_name: "image/image/babi.jpg",
  },
  {
    id: 2,
    img_name: "image/image/istockphoto-490667270-1024x1024.jpg",
  },
  {
    id: 3,
    img_name: "image/image/istockphoto-1049475350-1024x1024.jpg",
  },
  {
    id: 4,
    img_name: "image/image/pexels-daniel-xavier-1121796.jpg",
  },
  {
    id: 5,
    img_name: "image/image/pexels-italo-melo-2379004.jpg",
  },
  {
    id: 6,
    img_name: "image/image/pexels-justin-shaifer-1222271.jpg",
  },
  {
    id: 7,
    img_name: "image/image/pexels-spencer-selover-775358.jpg",
  },
  {
    id: 8,
    img_name: "image/Mine.jpg",
  },
];

function footer() {
  const [data, setData]=useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })
  const [error, setError]=useState('')
  
  const handleChange=(ev)=>{  
    const {name, value}=ev.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }
   const handleSubmit=async(ev)=>{
    ev.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PhoneRegex = /^(9\d{8}|09\d{8}|251\d{9})$/;
   
    
      if (!emailRegex.test(data.email)) {
        setError('Invalid email format');
       return toast.error(error)
      } 
    
      if(!PhoneRegex.test(data.phone)){
        setError("Invalid phone number ")
        return toast.error(error)
      }
   
    const response = await axios.post("https://portfolio-fevu.onrender.com/api/contact", data);
     console.log(response)
    if (!response.status===200) {
      toast.error(response.data)
      throw new Error(`Network response was not ok: ${response.data}`);
     
    }
    toast.success(response.data)
    console.log("data", response.data)
   }
  
   const classnames=classNames("p-2 rounded-2xl border-collapse  border-solid border-2 border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 ")

  return (
    <section className="relative h-screen w-screen bg-slate-500 ">
      <form  className="relative  sm:w-2/4 sm:m-auto  rounded-md  mx-2 grid sm:grid-cols-2 gap-2  bg-slate-50 p-4 " onSubmit={handleSubmit}>
          <input placeholder="Enter Your Full name" 
           className={`${classnames} sm:col-span-2`}
           name="name"
           minLength={"5"}
           value={data.name} onChange={handleChange}
           required
          />
          <input placeholder="enter you Email "
           className={classnames} 
           name="email"
           value={data.email} onChange={handleChange}
           required
          />
          <input placeholder="enter you Phone Number "
           className={classnames}
           name="phone"
           min={10}
           value={data.phone} onChange={handleChange}
           required
          />
          <textarea rows={5} cols={5} 
           className={`${classnames} sm:col-span-2`}
           name="message"
           value={data.message} onChange={handleChange} 
           placeholder="Write what can I do for you">
          </textarea>
          <div className={`${classnames} sm:col-span-2 flex items-center justify-center sm:gap-3 gap-1 focus:ring-indigo-00 border-none`}> 
          <button type ="reset" className="bg-indigo-500 py-2 rounded-2xl w-32 sm:w-1/4 m-auto mt-5">Cancel</button> 
          <button type="submit" className="bg-purple-500 rounded-2xl py-2 w-32 sm:w-1/4 m-auto mt-5">Submit Message</button>
          </div>
          
        </form>
      <footer className="relative inset-x-2  bottom-0 overflow-hidden rounded-t-lg bg-black text-center text-white sm:absolute sm:h-2/5">
      
        <img src="image/blackLogo.jpg" className="flex sm:hidden" />
        <div className=" flex  flex-row items-center text-white sm:m-auto sm:mt-44  sm:w-4/6 sm:justify-between sm:gap-5 ">
          <img src="image/blackLogo.jpg" className="hidden sm:flex" />

          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Visit Link</h1>    
            <a href="/privancy" className="font-thin">
              Privancy
            </a>
            <a href="/term" className="font-thin">
              Condition and Term
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Portfolio</h1>
            <a href="#" className="font-thin">
              Home
            </a>
            <a href="#aboutme" className="font-thin">
              About me
            </a>
            <a href="#service" className="font-thin">
              Service
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Contact</h1>
            <a className="font-thin" href="tell:+251930851744">
              +251 (9) 30851744
            </a>
            <a className="font-thin" href="mailto:gemechujimacs@gmail.com">
              gemechujimacs@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Address</h1>
            <p className="font-thin">Addis Ababa,</p>
            <p className="font-thin">street</p>
            <p className="font-thin">12 ...</p>
          </div>
        </div>
        <hr />
        <div className="m-auto mt-5 w-4/5 justify-between sm:flex">
          <p>
            CopyRight&copy; Gemechu {"    "} {date.format("YYYY")} {"   "}
            <span> All Right is reserved</span>
          </p>
          <div>
            <Link to="https://www.facebook.com/gemechu.jima.75">
              <img
                src="social media/facebook.png"
                className="mr-2 inline h-8 w-8 rounded-full"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/gemechu-jima-407880251">
              <img src="social media/linkedin.png" className="inline h-8 w-8" />
            </Link>
            <Link to="https://twitter.com/@tasojima">
              <img
                src="social media/twitter.png"
                className="ml-2 inline h-8 w-8"
              />
            </Link>
            <Link to="https://github.com/gemechu-jima">
              <img
                src="social media/github.png"
                className="ml-2 inline h-8 w-8"
              />
            </Link>
          </div>
        </div>
        <div></div>
      </footer>
    </section>
  );
}

export default footer;
