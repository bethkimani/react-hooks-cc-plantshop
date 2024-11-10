import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setFilteredPlants }) {
  return (
    <main>
      <NewPlantForm setPlants={setFilteredPlants} />
      <Search plants={plants} setFilteredPlants={setFilteredPlants} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
