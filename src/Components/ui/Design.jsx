import Model from "./Model"



export default function Design({onClick}) {
  return (
    <Model onClick={onClick}>
        <div className=" w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Design Component</h1>
            <p className="text-lg">This is the Design section where you can find design resourse and tool I used it</p>
            <pre>
           <h> under maintance this page for temporary</h>
            </pre>
        </div>
    </Model>
  )
}
