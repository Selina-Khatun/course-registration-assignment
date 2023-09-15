import { useState } from 'react'
import Cards from './components/Cards/Cards'
// import Cart from './components/Cart/Cart'
import Header from './components/Header/header'
import './App.css'
// import react tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Cards></Cards>
      
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
