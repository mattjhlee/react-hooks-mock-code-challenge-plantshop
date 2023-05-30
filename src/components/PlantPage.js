import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants, search, setSearch }) {
  function handlePlantFormSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }
  return (
    <main>
      <NewPlantForm onPlantFormSubmit={handlePlantFormSubmit} plants={plants} />
      <Search setSearch={setSearch}/>
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
