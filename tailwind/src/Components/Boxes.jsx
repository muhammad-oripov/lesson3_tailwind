import React from "react";

function Boxes({item}) {
    return (
        <>
            <div className="w-2/5 h-48 border-black bg-gray-900 p-3">
                <span className="text-white font-medium text-lg">{item.product}</span>
                <div className="flex justify-between items-center my-5 text-gray-600 ">
                    <h5>By {item.by}</h5>
                    <a className="underline" href="">Read More</a>
                </div>
                <div className="mt-12 text-gray-300">
                <span>{item.date}</span>
                </div>
            </div>
        </>
    )
}

export default Boxes;