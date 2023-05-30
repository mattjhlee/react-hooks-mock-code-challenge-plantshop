import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {
  const searchedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  const plantCards = searchedPlants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })
  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
