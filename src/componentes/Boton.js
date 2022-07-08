import React from "react";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      className={`hover:bg-[#5a01a7] h-[83px] flex flex-1 justify-center items-center font-bold text-[38px] bg-[#1b1b32] text-[white] rounded-[25px] border-[2px] border-solid border-[white] cursor-pointer m-[4px] select-none ${
        esOperador(props.children) ? "bg-[#00471b] hover:bg-[#ff6600]" : null
      }`.trim()}
      onClick={() => props.manejarClick(props.children)}
    >
      {" "}
      {/* se usa una funcion anonima, es decir, que solo se va a usar una vez, para que retorne adecuadamente */}
      {props.children}
    </div>
  );
}

export default Boton;
