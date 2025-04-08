import { CiMobile1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegram, FaMobile, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Language from "./Language";

function Contact() {
  return (
    <section id="contactme" className="text-center md:h-screen md:w-screen relative md:pt-10 md:mb-10 md:px-0 px-2 ">
       <div className="">
        <h1 className="font-extrabold text-blue-700 text-4xl">Contact Me</h1>
     </div> 
      <div className="flex pb-5 flex-col w-full items-center gap-4 md:flex-row md:justify-center">
        <div className="h-full md:w-2/4 w-full   ">
          <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
            <p className="ml-5 flex items-center gap-2">
              <CiMobile1 size={20} className="text-blue-500" />
              <span className="text-gray-500">
                +251930851744 / +251712313085
              </span>
            </p>
            <p className="ml-5 flex items-center gap-2">
              <MdEmail size={20} className="text-blue-500" />
              <span className="text-gray-500">gemechujimacs@gmail.com</span>
            </p>
            <p className="ml-5 flex items-center gap-2">
              <FaGithub size={20} className="text-blue-500" />
              <span className="text-gray-500">
                https://github.com/gemechu-jima
              </span>
            </p>
            <p className="ml-5 flex items-center gap-2">
              <BsLinkedin size={20} className="text-blue-500" />
              <span className="text-gray-500">
                https://www.linkedin.com/in/gemechu-jima-407880251
              </span>
            </p>
            <p className="ml-5 flex items-center gap-2">
              <FaTelegram size={20} className="text-blue-500" />
              <span className="text-gray-500">https//t.me/@tasojima</span>
            </p>
          </div>
          <div className="mt-3 border-l-4 border-blue-600">
            {/* <h1>Education Background</h1> */}
            <table className="mt-2 w-full  table-auto">
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
                  <td className="border px-4 py-2">
                    Gohatsion Preparatory School
                  </td>
                  <td className="border px-4 py-2">11-12</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">2014-2015 G.C</td>
                  <td className="border px-4 py-2">Hose secondary School</td>
                  <td className="border px-4 py-2">9-10</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">2005-2013 G.C</td>
                  <td className="border px-4 py-2">
                    J/J Mela Elementary School
                  </td>
                  <td className="border px-4 py-2">1-8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative flex md:mt-3  h-full md:w-2/5 w-full flex-col items-center  ">
        
          <div className="flex h-auto  flex-row items-center bg-white  ">
          <div className="h-[15rem]  w-[5px] bg-blue-500" />
            <div  className="flex h-full w-full flex-col gap-4">
            <h1 className="text-2xl font-bold text-blue-500">
              Work Experience
            </h1>
            <div className=" mx-auto flex w-1/2 items-center justify-between">
              <p className="text-gray-500">Organizations</p>
              <p className="text-gray-500">Position</p>
            </div>
            <div className="flex  items-center gap-2">
              <p className="relative -left-8 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400 text-sm  font-semibold text-white">
                2023-now
              </p>
              <p>INSA</p>
              <p className="text-gray-500">System Software Developer</p>
            </div>
            <div className="mt-4  flex items-center gap-2">
              <p className="relative -left-8 z-10 mt-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400 text-sm font-semibold text-white">
                2021-2023
              </p>
              <p>National ID Program</p>
              <p className="text-gray-500">Enrollment Officer</p>
            </div>
            </div>
          </div>
          <Language/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
