import React from "react";
//@ts-ignore
import Select from "react-select";


function Dropdown({ options }: any) {
  return (
      <Select
        name="form-field-name"
        value={{ value: "one", label: "One" }}
        options={options}
      />
  );
}

export default Dropdown;
