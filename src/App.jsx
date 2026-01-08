import { useState } from "react";
import "./App.css";
import { population as initialPopulation } from "./components/data/population";
import SurvivorList from "./components/SurvivorList/SurvivorList";
import Team from "./components/Team/Team";

const App = () => {
  const [population, setPopulation] = useState(initialPopulation);
  const [team, setTeam] = useState([]);

  const addToTeam = (person) => {
    setTeam((prev) => [...prev, person]);
    setPopulation((prev) => prev.filter((p) => p.id !== person.id));
  };

  const removeFromTeam = (person) => {
    setPopulation((prev) => [...prev, person]);
    setTeam((prev) => prev.filter((p) => p.id !== person.id));
  };

  const totalStrength = team.reduce((sum, p) => sum + p.strength, 0);
  const totalSupplies = team.reduce((sum, p) => sum + p.supplies, 0);

  return (
    <>
      <h1>Reactville Survival Team</h1>

      <p>
        Team Members: {team.length} | Total Strength: {totalStrength} | Total
        Supplies: {totalSupplies}
      </p>

      <Team team={team} onRemove={removeFromTeam} />
      <SurvivorList population={population} onAdd={addToTeam} />
    </>
  );
};

export default App;

