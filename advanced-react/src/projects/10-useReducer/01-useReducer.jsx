import { useReducer, useState } from "react";
import { data, people } from "../../data";

const defaultState = {
  people: data,
};
const reducer = (state, action) => {
  if (action.type === "RESTORE") return { ...state, people: data };
  else if (action.type === "CLEAR_LIST") return { ...state, people: [] };
};

const ReducerBasics = () => {
  //const [people, setPeople] = useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const restoreAll = () => {
    //setPeople(data);
    dispatch({ type: "RESTORE" });
  };
  const handleClick = () => {
    //setPeople([]);
    dispatch({ type: "CLEAR_LIST" });
  };

  // const removeItem = (id) => {
  //   let newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople);
  // };
  return (
    <div>
      {state.people.map((person) => {
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
      {
        //people === data ?
        state.people.length > 0 ? (
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={handleClick}
          >
            clear items
          </button>
        ) : (
          <button className="btn" onClick={restoreAll}>
            Restore All
          </button>
        )
      }
    </div>
  );
};

export default ReducerBasics;
