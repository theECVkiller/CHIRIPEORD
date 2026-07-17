import { NavLink } from "react-router-dom"
import { RiMenu4Line } from "react-icons/ri"; // Este será el Menu-Icon a agregar: <RiMenu4Line className="text-2xl content-center" />

function BarraNavegacion () {

    const opts = [
        "Home",
        "About",
        "Contact"
    ]

    const test = a => {
        switch (a){
            case "Home":
                return "/home"
                
            case "About":
                return "/about"

            case "Contact":
                return "/contact"
        }
    }

    return (
        <div
        className="flex justify-center ">
            <ul
            className="flex bg-amber-100 fixed px-6 py-3 w-150 top-8 shadow-md shadow-amber-950 rounded-2xl gap-4 justify-around ">
                {opts.map(opt => <li
                    className="content-center border px-2 shadow rounded-[10px] border-amber-800 text-amber-900 hover:bg-amber-800 hover:text-amber-100 font-medium cursor-pointer "
                    key={opt}>
                        <NavLink to={test(opt)}>{opt}</NavLink>
                    </li>)}
                <NavLink  // Voy hacer que este "botón" se cambie de login a un icono de menu dependiendo el acceso del usuario.
                    key={"accessBtn"}
                    className={"px-2 py-1 shadow-sm hover:shadow-[0] shadow-[#441C03] rounded-[10px] hover:bg-amber-900 bg-amber-800 text-amber-100 font-medium cursor-pointer "}
                    to={"/sign-in"}
                    onClick={()=>console.log("ok")}>Sign-in/Register</NavLink>
            </ul>
        </div>
    )
}

export default BarraNavegacion