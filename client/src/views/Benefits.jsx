import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import insurance from "../assets/insurance.png";
import family from "../assets/family.jpeg";
import retirement from "../assets/401k.png";

const Benefits = () => {

    return (

        <div>
            <NavBar />
            <div className="flex">
                <SideBar />
                <div className="ml-20">
                    <h1 className="text-5xl m-10">Your Benefits</h1>
                    <p className="text-2xl ml-10 text-red-500">BAC Offers the Most Competitive Benefits to Our Team Members</p>
                    <p className="ml-10 text-blue-500">More Data Coming Soon...</p>
                    <br />
                    <p className="w-3/4 ml-10">Etiam vel mauris turpis. Proin aliquet consequat ornare. Integer congue neque sit amet mauris varius tempor. Nam condimentum elit et arcu vehicula, id hendrerit nibh elementum. Morbi congue malesuada rhoncus. Maecenas quis ante nec metus fermentum dignissim a id erat. Nulla dapibus mollis vehicula.</p>
                    <br />
                    <div className="flex ml-20 gap-20">
                        <div>
                            <img src={insurance} alt="health insurance" className="w-56 shadow-lg rounded-lg ml-10" />
                            <br />
                            <p className="text-2xl text-center">Competitive Health Insurance</p>
                        </div>
                        <div>
                            <img src={retirement} alt="401k" className="w-64 shadow-lg rounded-lg" />
                            <br />
                            <p className="text-2xl text-center">Excellent 401k Packages</p>
                        </div>
                        <div>
                            <img src={family} alt="family planning" className="w-52 shadow-lg rounded-lg" />
                            <br />
                            <p className="text-2xl text-center">Family Planning</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default Benefits;