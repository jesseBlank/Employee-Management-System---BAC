import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import dummy1 from "../assets/dummy1.png";
import dummy2 from "../assets/dummy2.png";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeService from "../services/EmployeeService";
import { useAuthContext } from "../components/MyContext";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const { userId } = useContext(useAuthContext);

    const navigate = useNavigate();

    const updateList = () => {
        setRefresh(!refresh);
    }

    useEffect(() => {
        EmployeeService.getOneEmployee(userId)
            .then(res => {
                setEmployee(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);

    useEffect(() => {
        EmployeeService.getAllEmployees()
            .then(res => {
                setEmployees(res.data);
            })
            .catch(err => console.log(err.response));
    }, [refresh])


    return (

        <div>
            <NavBar />
            <div className="flex">
                <SideBar employee={employee} />
                <div className="container flex justify-between">
                    <div>
                        <h1 className="text-5xl m-10">Employees</h1>
                        <div className="grid grid-rows-4 grid-flow-col gap-6">
                            {employees.map(employee => (
                                <Link to={`/employees/profile/${employee.id}`}>
                                    <EmployeeCard imageSource={dummy1} firstName={employee.firstName} lastName={employee.lastName} title={employee.title} isAdmin={employee.isAdmin} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Link to="/employees/new" className="m-10 text-5xl">Add an Employee</Link>
                </div>
            </div>
        </div>

    )

}

export default Employees;