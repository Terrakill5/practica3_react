import React from "react";

const Pantalla = ({ input }) => (
  <div className="h-[75px] rounded-[50px] mb-[20px] flex justify-end items-center font-bold text-[30px] bg-[#0a0a23] text-[white] p-[11px] pr-[30px] border-[1px] border-solid border-[#888] shadow-[-1px_4px_1px_1px_white]">
    {input}
  </div>
);

export default Pantalla;
