import { useState } from "react";
import { data } from "../../data";

const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const restoreAll = () => {
    setPeople(data);
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
      <button className="btn" onClick={restoreAll}>
        Restore All
      </button>
    </div>
  );
};

export default ReducerBasics;
