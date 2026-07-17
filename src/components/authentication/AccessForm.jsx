function AccessForm() {

    // Todo referente a Firebase Authentication aquí.

  return (
    <>
      <div
      className=" bg-amber-100 p-5 rounded-2xl shadow-md shadow-[#441C03] ">
        <div className="text-center">
            <span
            className=" text-amber-800 font-bold text-[1.3em] ">Login</span>
            <div className="mt-4 grid grid-rows-2 justify-center ">
                <input
                placeholder="Escríbe tu correo."
                className=" focus:outline-amber-900 focus:outline-1 border-b rounded-[10px] text-amber-800 border-amber-900 mb-3 shadow px-2 py-1.5 "
                type="email" />
                <input
                placeholder="Escríbe tu contraseña."
                className=" focus:outline-amber-900 focus:outline-1 border-b rounded-[10px] text-amber-800 border-amber-900 mb-3 shadow px-2 py-1.5 "
                type="password" />
            </div>
            <button
            className=" bg-amber-800 px-2 py-2.5 rounded-3xl text-amber-100 font-medium shadow-sm shadow-amber-950 hover:bg-amber-900 cursor-pointer ">Iniciar sesión</button>
        </div>
        
        <hr className="my-10 border-2 w-80 m-auto rounded-2xl text-[#9C4007]"/>
        
        <div className="text-center">
            <span
            className=" text-amber-800 font-bold text-[1.3em] ">Register</span>
            <div className="mt-4 grid grid-rows-2 justify-center ">
                <input
                placeholder="Nombre de usuario."
                className=" focus:outline-amber-900 focus:outline-1 border-b rounded-[10px] text-amber-800 border-amber-900 mb-3 shadow px-2 py-1.5 "
                type="text" />
                <input
                placeholder="Correo."
                className=" focus:outline-amber-900 focus:outline-1 border-b rounded-[10px] text-amber-800 border-amber-900 mb-3 shadow px-2 py-1.5 "
                type="email" />
                <input
                placeholder="Contraseña."
                className=" focus:outline-amber-900 focus:outline-1 border-b rounded-[10px] text-amber-800 border-amber-900 mb-3 shadow px-2 py-1.5 "
                type="password" />
            </div>
            <button
            className=" bg-amber-800 px-2 py-2.5 rounded-3xl text-amber-100 font-medium shadow-sm shadow-amber-950 hover:bg-amber-900 cursor-pointer ">Registrarse</button>
        </div>
      </div>
    </>
  )
}

export default AccessForm
