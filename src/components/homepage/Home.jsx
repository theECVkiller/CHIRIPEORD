import { Routes, Route, NavLink, Link } from "react-router-dom"
import BarraNavegacion from "../global-components/BarraNavegacion"

export function Home (){ // Trabajaré con el color amber, como color base.


    return (
        <>
            <div
            className=" bg-gray-800 p-5 rounded-2xl ">
                <h1
                className=" text-white font-medium text-3xl mb-4 text-center ">Home Page</h1>
                <p
                className=" w-sm text-gray-400 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum explicabo temporibus fugiat culpa, quae porro atque reprehenderit, tempora minus mollitia recusandae consectetur! Voluptatum, a consequatur temporibus ut, accusantium placeat id natus obcaecati tempora cupiditate assumenda, laboriosam inventore commodi culpa animi?
                </p>
            </div>
            
        </>
    )
}