

export default function ProgressBar({bg_color, color, percent = 0}) {
    const getColor=()=>{
        if(percent>=90) return 'bg-green-500'
        if(percent>=80) return 'bg-lime-500'
        if(percent>=70) return 'bg-yellow-500'
        if(percent>=60) return 'bg-amber-500'
        if(percent>=50) return 'bg-orange-500'
        return "bg-yellow-500"
    }
  return (
    <div className={`w-full ${bg_color ? bg_color :"bg-gray-300"} rounded-full h-5 overflow-hidden  relative`}>
      <div
        className={`${color ? color : getColor()} h-5 transition-all duration-500`}
        style={{ width: `${percent}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
        {percent}%
      </span>

    </div>

  )
}
