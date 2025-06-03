import { langs } from "../../Utils/skill";
import ProgressBar from "../skill/ProgressBar"
export default function Language() {

    
  return (
    <div className=" px-8 overflow-auto md:overflow-hidden  w-full flex-col items-center ">
      <table className="mt-2 md:w-full w-[10rem]  table-auto">
        <thead className="bg-gray-200 dark:bg-slate-800">
          <tr>
            <th className="px-4 py-2"> Language </th>
            <th className="px-4 py-2"> Listening</th>
            <th className="px-4 py-2">Speaking </th>
            <th className="px-4 py-2">Reading </th>
            <th className="px-4 py-2">Writing </th>
          </tr>
        </thead>
        <tbody>
          {langs.map((lang, index)=>(
            <tr key={index} className="bg-gray-100 dark:bg-slate-700">
              <td>{lang.lang} </td>
               <td className="border dark:border-none px-4 py-2"><ProgressBar percent={`${lang.listen}`} bg_color="bg-red-500" color={"bg-sky-500"}/></td>
               <td className="border dark:border-none px-4 py-2"><ProgressBar percent={`${lang.speak}`}  bg_color="bg-red-500" color={"bg-sky-500"} /></td>
               <td className="border dark:border-none px-4 py-2"><ProgressBar percent={`${lang.read}`}  bg_color="bg-red-500" color={"bg-sky-500"} /></td>
               <td className="border dark:border-none px-4 py-2"><ProgressBar percent={`${lang.write}`}  bg_color="bg-red-500" color={"bg-sky-500"} /></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}


      