import React from "react";


const AlertStatusDropdown = () => {
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
        <option value="open">Open</option>
        <option value="acknowledged">Enquiry</option>
      </select>
      
    </div>
  );
};
export default AlertStatusDropdown;
