import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import benefits from "../assets/benefits.webp"
import you from "../assets/you.jpeg"
import help from "../assets/help.jpeg"
import employeeImg from "../assets/employee.png"
import budget from "../assets/budget.png";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../components/MyContext";
import EmployeeService from "../services/EmployeeService";

const AdminHome = () => {
    const [employee, setEmployee] = useState(null);
    const { userId } = useContext(useAuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getOneEmployee(userId)
            .then(res => {
                setEmployee(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);

    if (!employee) return <p>...loading</p>
    return (
        <div>
            <NavBar />
            <div className="mx-auto">
                <div className="flex">
                    <SideBar />
                    <div className="container justify-between ml-20 flex">
                        <div className="mt-5">
                            <h1 className="text-5xl">Welcome {employee.firstName}!</h1>
                            <br />
                            <Link to={`/employees/profile/${employee.id}`}>
                                <div className="flex gap-10 mt-5">
                                    <img src={you} alt="you" className="w-56 shadow-lg rounded-lg hover:opacity-75" />
                                    <p className="my-auto text-3xl">Your Profile</p>
                                </div>
                            </Link>
                            <Link to="/benefits">
                                <div className="flex gap-10 mt-5">
                                    <img src={benefits} alt="benefits" className="w-56 shadow-lg rounded-lg hover:opacity-75" />
                                    <p className="my-auto text-3xl">Benefits</p>
                                </div>
                            </Link>
                            <Link to="/support">
                                <div className="flex gap-10 mt-5">
                                    <img src={help} alt="help" className="w-56 shadow-lg rounded-lg hover:opacity-75" />
                                    <p className="my-auto text-3xl">Help and Support</p>
                                </div>
                            </Link>
                        </div>
                        <div className=" mr-52 my-auto">
                            <Link to="/employees">
                                <div className="flex justify-center gap-10">
                                    <img src={employeeImg} alt="employees" className="w-72 rounded-lg shadow-lg hover:opacity-75" />
                                    <p className="text-3xl my-auto">Employees</p>
                                </div>
                            </Link>
                            <Link to="/budget">
                                <div className="flex gap-10 justify-center">
                                    <img src={budget} alt="budget" className="w-72 mt-20 rounded-full shadow-lg hover:opacity-75" />
                                    <p className="my-auto text-3xl">Budget</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AdminHome;