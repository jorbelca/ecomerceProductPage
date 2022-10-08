import { useState } from "react"
import "./App.css"
import Footer from "./Footer"
import Modal from "./Modal"
import Navbar from "./Navbar"
import ProductPage from "./ProductPage"

function App() {
  const [data, setData] = useState("")
  const setCart = (data) => {
    setData(data)
  }
  return (
    <div className="App">
      <Modal />
      <Navbar data={data} />
      <ProductPage func={setCart} />
      <Footer />
    </div>
  )
}

export default App
