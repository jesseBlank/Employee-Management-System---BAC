import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

    return (
        <div>
            <div className="border-r-2 w-56 text-center text-2xl h-dvh bg-slate-100">
                <ul>
                    <li className="py-10">
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                    <li className="py-10">
                        <Link to="/budget">Budget</Link>
                    </li>
                    <li>
                        <Link to="/benefits">Benefits</Link>
                    </li>
                    <li className="py-10">
                        <Link to="/support">Support</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default SideBar;