import React from "react";
import { useState } from "react";

function NewPlantForm({ plants, onPlantFormSubmit }) {
  const [ name, setName ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState(0)

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleImageChange(e) {
    setImage(e.target.value)
  }

  function handlePriceChange(e) {
    setPrice(parseFloat(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: name,
      image: image,
      price: price
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(resp => resp.json())
      .then(newPlant => onPlantFormSubmit(newPlant))

    setName("")
    setImage("")
    setPrice(0)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleNameChange} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
