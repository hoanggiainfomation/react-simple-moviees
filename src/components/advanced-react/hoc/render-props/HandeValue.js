import React, { useState } from "react";
//lifttig state
const HandeValue = () => {
  return <Input>{(value) => <DisplayValue value={value}></DisplayValue>}</Input>;
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="p-3 rounded-md border-gray-300 w-full  h-full max-w-[500px] text-cyan-600"
        type="text"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
      />
      {props.children(value)}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="text-3xl text-blue-500">{value}</span>;
};

export default HandeValue;
