import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Gift Baby");

  return (
    <div>
      <h1>{text || "Hello Baby"}</h1>
      <h2>{text && "Hello Baby"}</h2>
      <h3>{name || "Hello Baby"}</h3>
      <h4>{name && "Hello Baby"}</h4>
      <button className="btn">
        {!name ? "Welcome " + name : " Please kindly Login"}
      </button>
    </div>
  );
};
export default ShortCircuitOverview;
