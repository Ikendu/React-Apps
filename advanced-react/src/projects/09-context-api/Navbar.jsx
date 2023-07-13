import { createContext, useState, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavContext = createContext();

export const useAppContext = () => {
  return useContext(NavContext);
};

const Navbar = () => {
  const [user, setUser] = useState({ name: "Onyinyechi" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavContext.Provider>
  );
};
export default Navbar;
