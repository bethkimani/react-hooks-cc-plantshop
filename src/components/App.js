import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    // Fetching data from the backend
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data); // Initially, show all plants
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        setFilteredPlants={setFilteredPlants}
      />
    </div>
  );
}

export default App;
