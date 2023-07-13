import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [name, setName] = useState("Onyinye");
  const [change, setChange] = useState(true);
  return (
    <GlobalContext.Provider value={[name, setName, change, setChange]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
