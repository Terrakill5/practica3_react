import React from "react";

const BotonClear = (props) => (
  <div
    onClick={props.manejarClear}
    className="h-[80px] select-none rounded-[45px] text-[1.6em] flex flex-1 bg-[#ac0246] mt-[8px] justify-center items-center font-bold text-[white] border-[2px] border-solid border-[white] cursor-pointer hover:bg-[#ebb000]"
  >
    {props.children}
  </div>
);

export default BotonClear;
