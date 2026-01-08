const Team = ({ team, onRemove }) => {
  return (
    <>
      <h2>Your Team</h2>

      {team.length === 0 ? (
        <p>No team members yet. Add some survivors!</p>
      ) : (
        <ul>
          {team.map((person) => (
            <li key={person.id}>
              <p>
                <strong>{person.name}</strong> — {person.role}
              </p>
              <p>Strength: {person.strength}</p>
              <p>Supplies: {person.supplies}</p>
              <button onClick={() => onRemove(person)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Team;
