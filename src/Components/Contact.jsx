import classNames from "classnames"
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from "react";
function Contact() {

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit=async(ev)=>{
    ev.preventDefault()
    const serviceId = "service_zbyxcz4";
    const templateId = "template_nkw5cuj";
    try {
      setLoading(!loading);
      await emailjs.send(serviceId, templateId, {
       name: form.current.value,
        recipient: form.current.value
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => emailjs.init("KrSUxOq2ioFFTOXeR"), []);
 const classnames=classNames("p-2 rounded-2xl border-collapse  border-solid border-2 border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 ")
  return (
    <section id="contactme" className="text-center md:w-screen md:h-screen">
        <div className="bg-gradient-to-b md:font-extrabold md:text-6xl sm:text-3xl text-xl
          from-indigo-900 from-70%
         via-indigo-700 to-indigo-100 to-10% pb-20 py-10 m-auto text-white">
        <h1 className="">Please drop your Email and phone number</h1>
        </div>
        <form ref={form}  className="sm:w-2/4 sm:m-auto sm:mt-10 mt-5 mx-2 grid sm:grid-cols-2 gap-4 " onSubmit={handleSubmit}>
          <input placeholder="enter you first name " 
           className={classnames}
          />
          <input placeholder="enter you Last Name "
           className={classnames}
          />
          <input placeholder="enter you Email "
           className={classnames}
          />
          <input placeholder="enter yoou Phone Number "
           className={classnames}
          />
            <input placeholder="enter yoou Website"
           className={`${classnames} sm:col-span-2`}
           />
          <textarea rows={5} cols={5}  className={`${classnames} sm:col-span-2`} placeholder="Write what can I do for you">

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