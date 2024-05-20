import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import AdminHome from "./views/AdminHome"
import Employees from "./views/Employees"
import AddEmployee from "./views/AddEmployee"
import Support from "./views/Support"
import ShowEmployee from "./views/ShowEmployee"
import Login from "./views/Login"
import Budget from "./views/Budget"
import Benefits from "./views/Benefits"
import MyContext from "./components/MyContext"


function App() {


  return (
    <div>
      <BrowserRouter>
        <MyContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/new" element={<AddEmployee />} />
            <Route path="/support" element={<Support />} />
            <Route path="/employees/profile/:id" element={<ShowEmployee />} />
            <Route path="/login" element={<Login />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
        </MyContext>
      </BrowserRouter>
    </div>
  )
}

export default App
