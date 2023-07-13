import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = ({ name }) => {
    setUser({ name: "Chibundu" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome: {user.name}</h3>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Click the button below to login</h3>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
