import React from "react";

export default function Language() {

    
  return (
    <div className=" px-8 overflow-auto md:overflow-hidden  w-full flex-col items-center bg-white">
      <table className="mt-2 md:w-full w-[10rem]  table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2"> Language </th>
            <th className="px-4 py-2"> Listening</th>
            <th className="px-4 py-2">Speaking </th>
            <th className="px-4 py-2">Reading </th>
            <th className="px-4 py-2">Writing </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">English</td>
            <td className="border px-4 py-2"><HandleProgress percentage="82%" /></td>
            <td className="border px-4 py-2"><HandleProgress percentage="70%" /></td>
            <td className="border px-4 py-2"><HandleProgress percentage="96%" /></td>
            <td className="border px-4 py-2"><HandleProgress percentage="93%" /></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Amharic</td>
            <td className="border px-4 py-2"><HandleProgress percentage="100%" />  </td>
            <td className="border px-4 py-2"><HandleProgress percentage="97%" />  </td>
            <td className="border px-4 py-2"><HandleProgress percentage="94%" />  </td>
            <td className="border px-4 py-2"><HandleProgress percentage="75%" />  </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border  py-2">Afan Oromo</td>
            <td className="border px-4 py-2"><HandleProgress percentage="100%" />  </td>
            <td className="border px-4 py-2"><HandleProgress percentage="100%" />  </td>
            <td className="border px-4 py-2"><HandleProgress percentage="99%" />  </td>
            <td className="border px-4 py-2"><HandleProgress percentage="94%" />  </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


const HandleProgress = ({percentage}) => {
    return(
        <div className="w-full rounded-lg bg-orange-500">
        <div
          className="rounded-lg bg-blue-600 p-1 text-center text-xs font-bold text-white"
            style={{ width: percentage }}
        >
          {percentage}
        </div>
      </div>
    )
}