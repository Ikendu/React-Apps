import { useState } from "react";
import { data } from "../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [users, setUsers] = useState(data);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = { id: Date.now(), name };
    setUsers([...users, newUser]);
    setName("");
  };

  const handleClick = (id) => {
    const currentUser = users.filter((user) => user.id !== id);
    setUsers(currentUser);
  };

  const getUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <button onClick={() => handleClick(user.id)} className="btn">
          Remove
        </button>
      </div>
    );
  });
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="id" className="form-label">
            id
            <input
              type="number"
              value={id}
              onChange={handleId}
              id="id"
              className="form-input"
            />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {getUsers}
    </div>
  );
};
export default UserChallenge;
