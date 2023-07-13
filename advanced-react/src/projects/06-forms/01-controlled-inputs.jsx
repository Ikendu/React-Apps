import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Input</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
          <input
            type="text"
            value={name}
            id="name"
            className="form-input"
            onChange={handleName}
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
          <input
            type="text"
            value={email}
            id="email"
            className="form-input"
            onChange={handleEmail}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
