import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummy1 from "../assets/dummy1.png";
import EmployeeService from "../services/EmployeeService";
import { useAuthContext } from "./MyContext";

const EmployeeProfile = () => {
    const [employee, setEmployee] = useState(null);
    const { userId } = useContext(useAuthContext);
    const [refresh, setRefresh] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getOneEmployee(id)
            .then(res => {
                setEmployee(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);

    const updateList = () => {
        setRefresh(!refresh);
    }

    const handleDelete = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(res => {
                updateList();
                navigate("/employees");
            })
            .catch(err => console.log(err));
    }

    if (!employee) return <p>...loading</p>
    return (

        <div>
            {userId === employee.id ?
                <div>
                    <h1 className="text-5xl m-10">Hello {employee.firstName}!</h1>
                </div>
                : null}
            <div className="mt-20 ml-96 w-4/12">
                <div className="flex gap-5">
                    <img src={dummy1} alt="image" className="w-32" />
                    <div className="my-auto">
                        <h1 className="text-3xl">{employee.firstName} {employee.lastName}</h1>
                        <p className="text-red-500">{employee.isAdmin == 1 ? "Administrator" : null}</p>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="my-auto">
                    <p className="text-2xl">{employee.title}</p>
                    <p>{employee.description}</p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        <span className="font-semibold text-xl">Salary </span>
                        : ${employee.salary}
                    </p>
                    <p><span className="font-semibold text-xl">Contact </span>
                        : {employee.email}
                    </p>
                </div>
                <br />
                {userId !== employee.id ?
                    <div>
                        <button onClick={(e) => handleDelete(employee.id)} class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Terminate Employee</button>
                    </div>
                    : null}
            </div>
        </div>

    )

}

export default EmployeeProfile;