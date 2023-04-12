import { useState, createContext } from "react";

export const GlobalContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => {},
});

export const GlobalContextProvider = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
