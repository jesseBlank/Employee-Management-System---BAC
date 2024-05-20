import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/MyContext";

const Login = (props) => {
    const [loggedEmployee, setLoggedEmployee] = useState({
        email: "",
        password: "",
    })
    const { setUserId } = useContext(useAuthContext);
    const [errors, setErrors] = useState([]);
    const [refresh, setRefresh] = useState(true);

    const navigate = useNavigate();

    const updateList = () => {
        setRefresh(!refresh);
    };
    
    const handleSubmit = e => {
        console.log("handleSubmit")
        e.preventDefault();
        EmployeeService.loginEmployee(loggedEmployee)
        .then(res => {
            console.log("CREATED ==>", res.data.id)
            updateList();
            setUserId(res.data.id)
            navigate("/admin")
        })
        .catch(err => {
            console.log(err)
            const responseData = err.response.data;
            const errArr = [];
            for (const errObj of responseData) {
                errArr.push(errObj.defaultMessage);
            }
            setErrors(errArr);
        })
    }

    const changeHandler = (e) => {
        setLoggedEmployee((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    return (

        <div>

            <NavBar user={loggedEmployee.email} />

            <h1 className="text-center text-5xl text-red-500 mt-10">Balance and Composure</h1>
            <h3 className="text-center text-2xl mt-5">Welcome Back</h3>

            <div className="w-1/3 mx-auto p-10 mt-10 bg-slate-100">
                <form onSubmit={handleSubmit}>
                    <div className="sm:col-span-4">
                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                        <div className="mt-2">
                            <input name="email" type="email" value={loggedEmployee.email} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="password" name="password" value={loggedEmployee.password} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                </form>
            </div>

        </div >

    )

}

export default Login;