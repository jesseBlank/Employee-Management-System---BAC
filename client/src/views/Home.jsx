import React from "react";
import NavBar from "../components/NavBar";
import banner from "../assets/employeesbanner1.png"
import roundtable from "../assets/roundtable.jpeg"
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <NavBar />
            <img src={banner} alt="employee" className="h-96 w-full" />
            
            <div className="flex justify-center gap-10">
                <div className="w-7/12">
                    <h1 className="text-3xl text-red-500 my-5">Welcome to Balance and Composure</h1>
                    <p><span className="text-red-500 text-xl">BAC</span> is an <span className="text-blue-500">E</span>mployee <span className="text-blue-500">M</span>anagement <span className="text-blue-500">S</span>ystem that lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui a metus ultrices finibus ut et erat. Donec dictum risus vitae luctus lacinia. Aliquam eu pulvinar lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tempor sapien vel gravida pharetra. Sed ac bibendum felis. Sed sit amet turpis imperdiet, dignissim felis ut, suscipit diam. In hac habitasse platea dictumst.</p>
                    <br />
                    <p>Etiam vel mauris turpis. Proin aliquet consequat ornare. Integer congue neque sit amet mauris varius tempor. Nam condimentum elit et arcu vehicula, id hendrerit nibh elementum. Morbi congue malesuada rhoncus. Maecenas quis ante nec metus fermentum dignissim a id erat. Nulla dapibus mollis vehicula.</p>
                    <br />
                    <Link to="/login" className="bg-red-400 hover:bg-red-200 rounded-lg p-3 mt-5">Get Started</Link>
                </div>
                <div>
                    <img src={roundtable} alt="roundtable" className="mt-16" />
                </div>
            </div>

        </div>
    )

}

export default Home;