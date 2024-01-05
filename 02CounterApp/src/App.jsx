import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(0)

  let addnumber = () =>{
    if(counter < 20){
      setcounter(counter + 1);
    }
  };

  let removenumber = () =>{
    if(counter > 0){
      setcounter(counter - 1);
    }
  };
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <p>Counter : {counter}</p>
      <button
      onClick={addnumber}>Add  </button> <br /> <br />
      <button onClick={removenumber}>Remove  </button>
    </>
  )
}

export default App
