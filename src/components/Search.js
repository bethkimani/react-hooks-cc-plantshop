import React, { useState } from "react";

function Search({ plants, setFilteredPlants }) {
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query)
    );
    setFilteredPlants(filtered);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
