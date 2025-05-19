import React from "react";
import SearchBarComponent from "./SearchBarComponent";
import FilterComponent from "./FilterComponent";

const HeaderComponent = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>VEHICAL MANUFACTURERS</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <SearchBarComponent />
        <FilterComponent />
      </div>
    </>
  );
};

export default HeaderComponent;
