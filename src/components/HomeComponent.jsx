import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";

const HomeComponent = () => {
  const [fetchedResult, setFetchedResult] = useState([]);
  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20"
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

  return (
    <>
      <HeaderComponent
        fetchedResult={fetchedResult}
        setFetchedResult={setFetchedResult}
      />
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Manufacturer Name</th>
            <th>Model</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {fetchedResult.map((singleVehicleData) => {
            return (
              <tr key={singleVehicleData.id}>
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
    </>
  );
};

export default HomeComponent;
