
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
function RigthsideCta() {
    const [text]=useTypewriter({
        words:["Developer","Designer" ,"writer" ,"joker"],
        loop:{}
    })
  return (
    <aside className="flex flex-col items-center justify-center text-center gap-10 md:w-6/12 md:h-screen">
        <h1 className="font-sans xl:text-5xl  md:text-3xl sm:text:xl text-3xl md:mt-2 ">
            I am   <span className="text-green-500">
                {text}
               </span>
            <Cursor/>
        </h1>
        <div className="gap-10 mx-10">
        <h1 className="xl:text-5xl md:text:4xl sm:text-3xl font-serif text-3xl ">
            Make more time better than you expect
        </h1>
        <p className="sm:mx-8 mt-3 xl:text-2xl md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            dicta qui blanditiis accusamus? Tenetur maiores voluptate est error
             accusamus quos quibusdam quae cum quaerat, iste delectus.
             </p>
        </div>
             <div className="flex justify-between w-72 ">
                <button className="bg-fuchsia-500 px-3 p-2 border rounded-full"><Link to="/files/Gemechu Jima CV.pdf" target="_blank" download> Download CV</Link> </button>
                <button className="bg-blue-600 text-fuchsia-500 border rounded-full border-fuchsia-800 px-10 py-2 ">Join</button>
             </div>
            
    </aside>
  )
}

export default RigthsideCta;