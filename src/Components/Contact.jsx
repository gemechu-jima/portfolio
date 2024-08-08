import classNames from "classnames"
import axios from "axios"
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
function Contact() {
const [data, setData]=useState({
  name:"",
  email:"",
  phone:"",
  message:""
})
const handleChange=(ev)=>{
  const {name, value}=ev.target;
  setData((prevData)=>({
    ...prevData,
    [name]:value
  }))
}
 const handleSubmit=async(ev)=>{
  ev.preventDefault()
  const response = await axios.post("https://portfolio-fevu.onrender.com/api/contact", data);
   console.log(response)
  if (!response.status===200) {
    toast.error(response.data)
    throw new Error(`Network response was not ok: ${response.statusText}`);
   
  }
  toast.success(response.data)
  console.log("data", response.data)
 }
 const classnames=classNames("p-2 rounded-2xl border-collapse  border-solid border-2 border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 ")
  return (
    <section id="contactme" className="text-center md:w-screen md:h-screen">
        <div className="bg-gradient-to-b md:font-extrabold md:text-6xl sm:text-3xl text-xl
          from-indigo-900 from-70%
         via-indigo-700 to-indigo-100 to-10% pb-20 py-10 m-auto text-white">
        <h1 className="">Please drop your Email and phone number</h1>
        </div>
        <form  className="sm:w-2/4 sm:m-auto sm:mt-10 mt-5 mx-2 grid sm:grid-cols-2 gap-4 " onSubmit={handleSubmit}>
          <input placeholder="Enter Your Full name" 
           className={`${classnames} sm:col-span-2`}
           name="name"
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
    </section>
  )
}

export default Contact