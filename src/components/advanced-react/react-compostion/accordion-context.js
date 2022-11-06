import { func } from "prop-types";
import { useContext } from "react";
import { createContext } from "react";
import useToggle from "./useToggle";

const AccordionContent = createContext();
function AccordioProvider(props) {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  const values = { show, handleToggleShow };
  return <AccordionContent.Provider value={values} {...props}></AccordionContent.Provider>;
}

function useAccordion() {
  const context = useContext(AccordioProvider);
  if (typeof context === "undefined") throw new Error("useAccordion must be used within AccodionProvider");
  return context;
}
export { useAccordion, AccordioProvider };
