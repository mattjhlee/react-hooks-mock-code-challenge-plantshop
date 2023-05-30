import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plants => setPlants(plants))
  }, [])
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} 
      setPlants={setPlants} 
      search={search} 
      setSearch={setSearch} />
    </div>
  );
}

export default App;
