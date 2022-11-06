import React from "react";
import { Fragment } from "react";

const AccordionContent = ({ show, children }) => {
  return (
    <Fragment>{show && <div className="content p-4 border border-gray-300 rounded-lg mt-5">{children}</div>}</Fragment>
  );
};

export default AccordionContent;
