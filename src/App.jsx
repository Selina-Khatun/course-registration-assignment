import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='flex  md:flex-row flex-col-reverse justify-between '>
      <Cards></Cards>
      <Cart></Cart>
      </div>


    </>
  )
}

export default App
