import React from "react";
import "../../css/spinner.css";

const Spinner = () => {
  return (
    <div className="center">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
