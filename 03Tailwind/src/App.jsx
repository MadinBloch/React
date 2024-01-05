import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-300 p-4 text-black rounded-md mb-5'>Welcome to Tailwind</h1>
      <Card para="Madin Bloch" year="2022" btn="Very good"/>
      <Card para="Mustakbhai Bloch" btn="Better" />
    </>
  )
}

export default App
