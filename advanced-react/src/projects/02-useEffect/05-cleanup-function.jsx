import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [user, setUser] = useState(true);
  console.log("checking out");

  const handleChange = () => {
    setUser(!user);
  };
  const UseComponent = () => {
    useEffect(() => {
      const interId = setInterval(() => {}, 1000);
      return () => {
        clearInterval(interId);
        console.log("clean Up");
      };
    }, []);
    return <h1>He loves me and I love him</h1>;
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        toggles
      </button>
      {user && <UseComponent />}
    </div>
  );
};

export default CleanupFunction;
