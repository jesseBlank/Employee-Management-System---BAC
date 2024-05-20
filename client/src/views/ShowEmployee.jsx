import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import EmployeeProfile from "../components/EmployeeProfile";

const ShowEmployee = () => {

    return (

        <div>
            <NavBar />
            <div className="flex">
                <SideBar />
                <div>
                    <EmployeeProfile />
                </div>
            </div>
        </div>

    )

}

export default ShowEmployee;