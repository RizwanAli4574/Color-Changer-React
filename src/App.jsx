import { useState } from "react"


function App() {
  const [color , setColor] = useState ("White")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="flex flex-wrap justify-center bg-white text-black font-bold px-3 py-2 rounded-2xl  ">Color Changer Creat by Rizwan Ali</div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      
       {/* 1 */}

        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'red'}}
        >Red</button>

        {/* 2 */}

        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'blue'}}
        >Blue</button>

        {/* 3 */}
        
        <button
        onClick={() => setColor("orange")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'orange'}}
        >Orange</button>

        {/* 4 */}

        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'green'}}
        >Green</button>

        {/* 5 */}

        <button
        onClick={() => setColor("gold")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'gold'}}
        >Gold</button>

        {/* 6 */}


        <button
        onClick={() => setColor("brown")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'brown'}}
        >Brown</button>

        {/* 7 */}


        <button
        onClick={() => setColor("gray")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'gray'}}
        >Gray</button>
       
        {/* 8 */}

        <button
        onClick={() => setColor("pink")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'pink'}}
        >Pink</button>
        
        
        {/* 9 */}


        <button
        onClick={() => setColor("#00BFFF")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: '#00BFFF'}}
        >Skyblue</button>

        {/* 10 */}


        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-black text-lg font-bold shadow-lg"
        style={{backgroundColor: 'yellow'}}
        >Yellow</button>


      </div>

    
    </div>


   </div>
  )
}

export default App
