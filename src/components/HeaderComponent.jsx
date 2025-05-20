import React from "react";
import SearchBarComponent from "./SearchBarComponent";
import FilterComponent from "./FilterComponent";

const HeaderComponent = ({ fetchedResult, setFetchedResult }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>VEHICLE MANUFACTURERS</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <SearchBarComponent
          fetchedResult={fetchedResult}
          setFetchedResult={setFetchedResult}
        />
        <FilterComponent
          fetchedResult={fetchedResult}
          setFetchedResult={setFetchedResult}
        />
      </div>
    </>
  );
};

export default HeaderComponent;
