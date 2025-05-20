import React from "react";

const FilterComponent = ({ fetchedResult, filterType, setFilterType }) => {
  // Manually filter out duplicate vclass values
  //   console.log(fetchedResult);
  const uniqueVClasses = [];
  for (let i = 0; i < fetchedResult.length; i++) {
    const vclass = fetchedResult[i].vclass;
    if (!uniqueVClasses.includes(vclass)) {
      uniqueVClasses.push(vclass);
    }
  }

  const filterByTypeHandler = (e) => {
    // console.log(e.target.value);
    setFilterType(e.target.value.toLowerCase());
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <select
        onChange={filterByTypeHandler}
        value={filterType}
        style={{ height: "30px" }}
      >
        <option value="" hidden>
          Filter by Type
        </option>
        {uniqueVClasses.map((vclass, index) => (
          <option key={index} value={vclass}>
            {vclass}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
