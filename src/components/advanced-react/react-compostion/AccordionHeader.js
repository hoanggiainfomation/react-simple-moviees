import React from "react";
// Specialied component
const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div>
      <div
        className="header cursor-pointer p-4 border border-gray-300 rounded-lg flex items-center justify-between"
        onClick={handleToggleShow}
      >
        <span>{children}</span>
        {show ? <span> - </span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordionHeader;
