import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import pie from "../assets/pie-chart.svg"

const Budget = () => {

    return (
        <div>
            <NavBar />
            <div className="flex">
                <SideBar />
                <div>
                <h1 className="text-5xl m-10">Budget</h1>
                <h5 className="text-2xl text-red-500 ml-10">BAC Data to Come...</h5>
                <div className="flex ml-20">
                    <p className="my-auto mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <img src={pie} alt="pie-chart" />
                </div>
                </div>
            </div>
        </div>
    )

}

export default Budget;