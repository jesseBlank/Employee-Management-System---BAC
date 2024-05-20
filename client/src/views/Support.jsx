import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Support = () => {

    return (

        <div>
            <NavBar />
            <div className="flex">
                <SideBar />
                <div className="mx-auto">
                    <h1 className="text-center text-5xl text-red-500 mt-10">Balance and Composure</h1>
                    <h3 className="text-center text-2xl mt-5">Help and Support</h3>
                    <div className="w-1/3 mx-auto p-10 mt-10 bg-slate-100">
                        <p>Quisque eu fringilla dui, quis efficitur sapien. Ut maximus ante egestas fringilla consectetur. Mauris elementum, lorem eget scelerisque vestibulum, dolor odio hendrerit odio, id vestibulum risus felis et libero. Maecenas tellus augue, vehicula eu vulputate eu, molestie ac nulla. Vestibulum et augue orci. Maecenas pellentesque id ipsum eu sollicitudin. In pretium lobortis nibh et suscipit.</p>
                    </div>
                    <br />
                <div className="flex bg-blue-200 w-72 rounded-lg p-3 gap-10 mx-auto">
                    <h5>Admin Support:</h5>
                    <p>555-555-5555</p>
                </div>
                <br />
                <div className="flex bg-blue-200 w-80 rounded-lg p-3 gap-10 mx-auto">
                    <h5>Employee Support:</h5>
                    <p>555-555-5555</p>
                </div>
                </div>
            </div>
        </div>

    )

}

export default Support;