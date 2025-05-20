import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import SearchBarComponent from "./SearchBarComponent";
import FilterComponent from "./FilterComponent";
import ModalComponent from "./ModalComponent";

const HomeComponent = () => {
  const [fetchedResult, setFetchedResult] = useState([]);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isOpen, setIsopen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=50"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFetchedResult(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const modalOpenAndCloseHandler = (vehicleData) => {
    // console.log("row clicked");
    setSelectedVehicle(vehicleData);
    setIsopen(true);
  };

  return (
    <>
      <HeaderComponent
        fetchedResult={fetchedResult}
        setFetchedResult={setFetchedResult}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <SearchBarComponent query={query} setQuery={setQuery} />
        <FilterComponent
          filterType={filterType}
          setFilterType={setFilterType}
          fetchedResult={fetchedResult}
        />
      </div>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Manufacturer Name</th>
            <th>Model</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {fetchedResult
            .filter((singleVehicleData) => {
              const matchedSearch =
                singleVehicleData.make
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                singleVehicleData.model
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                singleVehicleData.vclass
                  .toLowerCase()
                  .includes(query.toLowerCase());

              const matchesType = filterType
                ? singleVehicleData.vclass.toLowerCase() ===
                  filterType.toLowerCase()
                : true;

              return matchedSearch && matchesType;
            })
            .map((singleVehicleData) => {
              return (
                <tr
                  //   onClick={modalOpenAndCloseHandler}
                  onClick={() => modalOpenAndCloseHandler(singleVehicleData)}
                  key={singleVehicleData.id}
                >
                  <td>{singleVehicleData.make}</td>
                  <td>{singleVehicleData.model}</td>
                  <td>{singleVehicleData.vclass}</td>
                </tr>
              );
            })}

          {/* <tr>
            <td>Ford Motor Company</td>
            <td>F-150</td>
            <td>Truck</td>
          </tr>
          <tr>
            <td>Toyota</td>
            <td>Corolla</td>
            <td>Sedan</td>
          </tr> */}
        </tbody>
      </table>
      {isOpen && selectedVehicle && (
        <ModalComponent
          isOpen={isOpen}
          setIsopen={setIsopen}
          vehicle={selectedVehicle}
        />
      )}
    </>
  );
};

export default HomeComponent;
