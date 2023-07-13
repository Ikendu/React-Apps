import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState(url);

  const removeAll = () => {
    setUsers([]);
  };

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, []);

  const getUsers = Array.from(users).map((user) => {
    const { id, avatar_url, html_url, login } = user;
    return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h3>{login}</h3>
          <a href={html_url} target="blank">
            Profile
          </a>
        </div>
      </li>
    );
  });
  return (
    <div>
      <h3>mySpace Users</h3>
      <ul className="users">{getUsers}</ul>
      <button className="btn" type="button" onClick={removeAll}>
        Remove All
      </button>
    </div>
  );
};
export default FetchData;
