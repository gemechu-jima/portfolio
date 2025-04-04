
import { CiMobile1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegram ,FaMobile, FaLinkedin,FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Contact() {

  return (
    <section id="contactme" className="text-center md:w-screen md:h-screen">
        <div>
          <h1 className="text-4xl font-bold text-indigo-500">Contact Me</h1>
          <p className="text-gray-500 mt-2">I am always open to discuss your project, 
            improve your online presence or help with your Web development challenges.</p>
          <p className="text-gray-500 mt-2">You can also reach me through my social media accounts.</p>
        </div>
        <div className="flex items-center md:flex-row flex-col  md:justify-center mt-10 h-96 gap-4">
         <div className="w-2/4 h-full   ">
          <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <p className="flex items-center ml-5 gap-2">
            <CiMobile1 size={20} className="text-blue-500" /> 
            <span className="text-gray-500">+251930851744 / +251712313085</span>
          </p>
          <p className="flex items-center ml-5 gap-2">
            <MdEmail size={20} className="text-blue-500" /> 
            <span className="text-gray-500">gemechujimacs@gmail.com</span>
          </p>
          <p className="flex items-center ml-5 gap-2">
            <FaGithub size={20} className="text-blue-500" /> 
            <span className="text-gray-500">https://github.com/gemechu-jima</span>
          </p>
          <p className="flex items-center ml-5 gap-2">
            <BsLinkedin size={20} className="text-blue-500" /> 
            <span className="text-gray-500">https://www.linkedin.com/in/gemechu-jima-407880251</span>
            </p>
            <p className="flex items-center ml-5 gap-2">
            <FaTelegram size={20} className="text-blue-500" />
            <span className="text-gray-500">https//t.me/@tasojima</span>
            </p>

          </div>
          <div className="border-l-4 border-blue-600 mt-3">
            {/* <h1>Education Background</h1> */}
            <table className="table-auto w-full mt-2">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2"> Years </th>
                  <th className="px-4 py-2"> Institution</th>
                  <th className="px-4 py-2"> Grade</th>
                </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">2018-2021 G.C</td>
                    <td className="border px-4 py-2">Mizan Tepi University</td>
                    <td className="border px-4 py-2">BSc in Computer Science</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">2016-2017 G.C</td>
                    <td className="border px-4 py-2">Gohatsion Preparatory School</td>
                    <td className="border px-4 py-2">11-12</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">2014-2015 G.C</td>
                    <td className="border px-4 py-2">Hose secondary School</td>
                    <td className="border px-4 py-2">9-10</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">2005-2013 G.C</td>
                    <td className="border px-4 py-2">J/J Mela Elementary School</td>
                    <td className="border px-4 py-2">1-8</td>
                  </tr>
                </tbody>
              </table>
          </div>
         </div>


         <div className="w-2/5 h-full border-l-2 flex flex-row items-center ml-10 ">
         <div className="w-[1px] h-full border-l-2  border-blue-500 ">

         </div>
         <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4 ">
          <h1 className="text-2xl font-bold text-blue-500">Work Experience</h1>
          <p className="relative z-10  flex items-center justify-center text-sm h-20 w-20 border-2 border-blue-700 -left-10 rounded-full">2023-now</p>
         </div>
         </div>
        </div>
        
    </section>
  )
}

export default Contact