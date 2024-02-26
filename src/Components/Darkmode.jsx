

function Darkmode({setDarkMode, darkMode}) {

  return (
    <button onClick={()=>setDarkMode(!darkMode)} className="mr-4">
      {  darkMode?
      <img src="mode/sun_white.png" className="w-8 h-8"/>:
      <img src="mode/moon_yellow.png" className="w-8 h-8"/>
     }
     </button> 
  )
}

export default Darkmode