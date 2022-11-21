import React from "react";


const FilterDropdown = () => {
  const handleDropdown = (e) => {
    e.stopPropagation();
  };
  const openModal = (e) => {
    console.log(e);
  };

  return (
    <div style={{ display: "flex" }}>
      <select
        onClick={(e) => {
          handleDropdown(e);
        }}
        onChange={(e) => {
          openModal(e);
        }}
        style={{ border: "none" }}
      >
        <option value="open">Enquiry</option>
        <option value="acknowledged">Query</option>
      </select>
      
    </div>
  );
};
export default FilterDropdown;
