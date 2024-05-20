import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import MyContext from "./components/MyContext"


function App() {


  return (
    <div>
      <BrowserRouter>
        <MyContext>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MyContext>
      </BrowserRouter>
    </div>
  )
}

export default App
