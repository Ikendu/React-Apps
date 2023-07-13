import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const PrintOut = () => {
    if (shipping) {
      return (
        <div>
          <h4>There will be shipping</h4>
          <p>Selected Item: {framework}</p>
        </div>
      );
      return;
    }
    return (
      <div>
        <h4>No Shipping Attached</h4>
        <p>Selected Item: {framework}</p>
      </div>
    );
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name=""
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => (
              <option key={framework}>{framework}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <PrintOut />
    </div>
  );
};
export default OtherInputs;
