import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  // Example plants data with image paths
  useEffect(() => {
    const plantData = [
      { id: 1, name: "Aloe Vera", image: "/images/aloe.jpg", price: 10, inStock: true },
      { id: 2, name: "Calathea", image: "/images/calathea.jpg", price: 15, inStock: true },
      { id: 3, name: "Fiddle Leaf Fig", image: "/images/fiddle-leaf-fig.jpg", price: 20, inStock: true },
      { id: 4, name: "Pilea", image: "/images/pilea.jpg", price: 12, inStock: false },
      { id: 5, name: "Pothos", image: "/images/pothos.jpg", price: 8, inStock: true },
      { id: 6, name: "ZZ Plant", image: "/images/zz-plant.jpg", price: 25, inStock: true },
    ];

    // Update state with the plant data
    setPlants(plantData);
  }, []);

  return (
    <ul className="cards">
      {/* Mapping over the plants array and rendering PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
