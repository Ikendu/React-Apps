import { useState } from "react";
import { data } from "../../data";

const ErrorExample = () => {
  const [people, setPeople] = useState(data);

  const getPeople = people.map((person) => {
    const { id, name } = person;
    return (
      <div key={id}>
        <p>{id}</p>
        <h3>{name}</h3>
        <button
          type="button"
          onClick={() => {
            return removePerson(id);
          }}
        >
          Remove
        </button>
      </div>
    );
  });

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const removePeople = () => {
    setPeople([]);
  };
  const getAll = () => {
    setPeople(data);
  };

  return (
    <>
      <div>{getPeople}</div>
      <button type="button" onClick={removePeople}>
        Remove all
      </button>
      <button type="button" onClick={getAll}>
        Return all
      </button>
    </>
  );
};

export default ErrorExample;
