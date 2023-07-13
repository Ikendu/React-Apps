import { useState } from "react";
const kelvin = { name: "Kelvin", age: 26, height: 5.8, position: "Staff" };
const john = { name: "Johnsina", age: 29, height: 4.8, position: "Low-Staff" };
const uche = { ...kelvin, name: "Uchenna" };

const UseStateObject = () => {
  const [person, setPerson] = useState(kelvin);

  const handleChange = () => {
    setPerson(john);
  };
  const handleReverse = () => {
    setPerson(kelvin);
  };
  const handleName = () => {
    setPerson(uche);
  };
  return (
    <>
      <h2>useState object</h2>
      <div>
        <>
          <h2>{person.name}</h2>
          <p>{person.age}</p>
          <p>{person.height}</p>
          <p>{person.position}</p>
        </>
        <button className="btn" onClick={handleChange}>
          Change Person
        </button>
        <button className="btn" onClick={handleReverse}>
          Reverse
        </button>
        <button className="btn" onClick={handleName}>
          Change to Uche
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
