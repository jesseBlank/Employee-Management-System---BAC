import React from "react";

const EmployeeCard = (props) => {

    return (

        <div className="flex gap-5 mb-10 hover:shadow-lg">
            <img src={props.imageSource} alt="image" className="w-32 ml-10" />
            <div className="my-auto">
                <h5 className="text-xl">{props.firstName} {props.lastName}</h5>
                <p>{props.title}</p>
                <p className="text-red-500">{props.isAdmin == 1 ? "Administrator" : null}</p>
            </div>
        </div>

    )

}

export default EmployeeCard;