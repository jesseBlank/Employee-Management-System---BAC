import { useState, createContext } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export const useAuthContext = createContext();

const MyContext = ({children}) => {
    const [userId, setUserId] = useState(null);

    const navigate = useNavigate();

    const logout = () => {
        EmployeeService.logoutEmployee()
        .then(() => {
            setUserId(null)
            navigate("/")
        })
    }

    return (

        <useAuthContext.Provider value={{userId, setUserId, logout}}>
            {children}
        </useAuthContext.Provider>

    )
}

export default MyContext;