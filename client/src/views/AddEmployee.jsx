import React from "react";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        lastName: "",
        salary: 0,
        isAdmin: false,
        title: "",
        email: "",
        description: "",
        password: "",
        confirm: "",
    })
    const [errors, setErrors] = useState([]);
    const [refresh, setRefresh] = useState(true);

    const navigate = useNavigate();

    const updateList = () => {
        setRefresh(!refresh);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newEmployee);
        EmployeeService.createEmployee(newEmployee)
            .then(res => {
                console.log("CREATED ==>", res.data);
                updateList();
                navigate("/employees");
            })
            .catch(err => {
                console.log(err);
                const responseData = err.response.data;
                const errArr = [];
                for (const errObj of responseData) {
                    errArr.push(errObj.defaultMessage);
                }
                setErrors(errArr);
            });
    };

    const changeHandler = (e) => {
        setNewEmployee((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (

        <div>
            <NavBar />
            <div className="flex">
                <SideBar />
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12 ml-20 mt-10">


                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-5xl leading-7 text-gray-900">Personal Information</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ml-32">
                                <div className="sm:col-span-3">
                                    <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                                    <div className="mt-2">
                                        <input type="text" name="firstName" value={newEmployee.firstName} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                                    <div className="mt-2">
                                        <input type="text" name="lastName" value={newEmployee.lastName} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label for="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                    <div className="mt-2">
                                        <input type="text" name="title" value={newEmployee.title} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Job Description</label>
                                    <div className="mt-2">
                                        <textarea name="description" rows="3" value={newEmployee.description} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="ml-32">
                                <label for="salary" className="block text-sm font-medium leading-6 text-gray-900 mt-8">Salary</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="number" name="salary" value={newEmployee.salary} onChange={(e) => changeHandler(e)} className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <label for="isAdmin" className="block text-sm font-medium leading-6 text-gray-900 mt-8">Is Employee an Administrator?</label>
                                <div className="mt-2">
                                    <select name="isAdmin" value={newEmployee.isAdmin} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>False</option>
                                        <option>True</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="leading-7 text-gray-900 text-5xl">Add an Employee</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ml-32">
                                <div className="sm:col-span-4">

                                    <div className="sm:col-span-4">
                                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                                        <div className="mt-2">
                                            <input name="email" type="email" value={newEmployee.email} onChange={(e) => changeHandler(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="password" name="password" value={newEmployee.password} onChange={(e) => changeHandler(e)} className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <label for="confirm" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="password" name="confirm" value={newEmployee.confirm} onChange={(e) => changeHandler(e)} className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default AddEmployee;