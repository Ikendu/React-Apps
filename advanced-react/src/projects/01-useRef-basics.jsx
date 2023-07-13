import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const containerItem = useRef(null);
  const isMounted = useRef(true);
  console.log(containerItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = containerItem.current.value;
    console.log(name);
  };
  //to apply focus on the input field
  useEffect(() => {
    containerItem.current.focus();
  });
  useEffect(() => {
    console.log(isMounted);
  });

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={containerItem}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
