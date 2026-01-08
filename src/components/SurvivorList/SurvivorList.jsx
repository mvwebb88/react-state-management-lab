const SurvivorList = ({ population, onAdd }) => {
  return (
    <>
      <h2>Available Survivors</h2>
      <ul>
        {population.map((person) => (
          <li key={person.id}>
            <p>
              <strong>{person.name}</strong> — {person.role}
            </p>
            <p>Strength: {person.strength}</p>
            <p>Supplies: {person.supplies}</p>
            <button onClick={() => onAdd(person)}>Add to Team</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SurvivorList;
