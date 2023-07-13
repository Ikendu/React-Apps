import { useState, useEffect } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleChange = () => {
    setTimeout(() => {
      setValue((current) => {
        return current + 1;
      });
    }, 3000);
  };
  const sayHi = () => {
    console.log("say Hello");
  };
  sayHi();

  useEffect(() => {
    console.log("calling from useEffect function");
  }, [4]);
  return (
    <>
      <h2>useState "gotcha"</h2>
      <div>
        <h3>{value}</h3>
        <button onClick={handleChange}>Increase</button>
      </div>
    </>
  );
};

export default UseStateGotcha;
