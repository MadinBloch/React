import { useState } from "react";

function App() {
  const [color, setColor] = useState("white"); // Set a default color

  return (
    <div className="w-full h-screen flex justify-center items-center " style={{ backgroundColor: color }}>
      <div className="flex flex-wrap">
        <button className="p-5 m-2 rounded-xl text-black bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="p-5 m-2 rounded-xl text-black bg-red-600" onClick={() => setColor("red")}>Red</button>
        <button className="p-5 m-2 rounded-xl text-black bg-pink-500" onClick={() => setColor("pink")}>Pink</button>
      </div>
    </div>
  );
}

export default App;
