import React from "react";
import { AccordioProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

// Specialiend component nhận những cái props là những chức năng
// Container component: bọc lại Specialiend component
const Accordion = ({ header, children }) => {
  return (
    <AccordioProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordioProvider>
  );
};

export default Accordion;
