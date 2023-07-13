import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    id: Date.now(),
    name: "",
    email: "",
    password: "",
  });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("Enter the required details");
      return;
    }
    console.log(user);

    const newList = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
    setList([...list, newList]);
    setUser({ name: "", email: "", password: "" });
  };

  const getUsers = list.map((user, index) => (
    <div key={index}>
      <h3>User Name: {user.name}</h3>
      <h4>Email: {user.email}</h4>
    </div>
  ));

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={handleChange}
            value={user.name}
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            onChange={handleChange}
            value={user.email}
            name="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            onChange={handleChange}
            value={user.password}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {getUsers}
    </div>
  );
};
export default MultipleInputs;
