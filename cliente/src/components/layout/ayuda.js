import React from "react";
import testPdf from "../../assets/MANUAL.pdf";

const Ayuda = () => {
  return (
    <div>
      <iframe
        id="page"
        style={{ width: "100%", height: "89vh" }}
        src={testPdf}
      />
    </div>
  );
};

export default Ayuda;
