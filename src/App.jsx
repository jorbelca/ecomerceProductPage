import "./App.css"
import Footer from "./Footer"
import Modal from "./Modal"
import Navbar from "./Navbar"
import ProductPage from "./ProductPage"

function App() {
  return (
    <div className="App">
      <Modal/>
      <Navbar />
      <ProductPage />
      <Footer />
    </div>
  )
}

export default App
