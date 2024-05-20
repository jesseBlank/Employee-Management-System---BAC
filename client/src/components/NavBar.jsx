import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useAuthContext } from "../components/MyContext";
import EmployeeService from "../services/EmployeeService";

const NavBar = () => {
    const [employee, setEmployee] = useState(null);
    const { userId, logout } = useContext(useAuthContext);

    useEffect(() => {
        EmployeeService.getOneEmployee(userId)
            .then(res => {
                setEmployee(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);

    return (
        <div>
            <nav className="flex mx-auto border-b-2 p-5 bg-slate-100 px-16">
                <div className="flex">
                    <Link to="/">
                        <h1 className="text-red-500 text-5xl">BAC</h1>
                    </Link>
                </div>
                <div className="flex ml-auto gap-10 pt-3 my-auto">
                    <Link to="/admin">{employee ? employee.firstName + " " + employee.lastName : null}</Link>
                    {employee ?
                        <button onClick={logout}>Logout</button> :
                        <Link to="/login">Login</Link>
                    }
                    <Link to="/support">Help & Support</Link>
                </div>
            </nav>
        </div>
    )

}

export default NavBar;