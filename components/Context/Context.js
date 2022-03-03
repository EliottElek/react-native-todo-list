import React, { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const dummy = [
    { id: 1, title: "Courses" },
    { id: 2, title: "Mot de passe" },
    { id: 3, title: "Courses" },
  ];
  const [list, setList] = useState(dummy);

  return (
    <Context.Provider
      value={{
        list: list,
        setList: setList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
