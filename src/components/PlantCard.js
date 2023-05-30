import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  const [outOfStock, setOutOfStock] = useState(false)
  function handleClick(){
    setOutOfStock(!outOfStock)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {outOfStock ? (
        <button onClick={handleClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleClick}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
