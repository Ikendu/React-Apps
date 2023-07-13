import { useState } from "react";

const useToggle = (defaultToggle) => {
  const [toggle, setToggle] = useState(defaultToggle);
  const myToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, myToggle];
};

export default useToggle;
