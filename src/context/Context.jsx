import { useEffect, useState, createContext, useContext } from 'react';

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const [active, setActive] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <GlobalContext.Provider value={{ darkMode, active, setActive, setDarkMode, openSideBar, setOpenSideBar }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const AppContext=()=>{
 const context=useContext(GlobalContext)
 return context
}

