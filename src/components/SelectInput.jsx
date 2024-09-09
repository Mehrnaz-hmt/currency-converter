import React from "react";

function SelectInput() {
  return (
    <div className="select-box">
      {/* <select value={} onChange={}> */}
      <select>
        <option value="latest">
          <span>Iran</span>
        </option>
        <option value="earliest">USA</option>
      </select>
    </div>
  );
}

export default SelectInput;
