import { useState } from "react";
import { data } from "../../../data";
import List from "./List";

const Form = ({ addPerson }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Provide Name Value");
      return;
    }
    addPerson(name);
    setName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-block" type="submit">
        submit
      </button>
    </form>
  );
};

const LowerStateChallenge = ({ handleSubmit }) => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
