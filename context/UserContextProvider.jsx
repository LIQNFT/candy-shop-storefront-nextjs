// this is an overall context provider to use for random info you may need to store in state or call

import { useState, createContext, useContext } from 'react';

// TODO: check if right
const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [demo, setDemo] = useState('Welcome to Main Context');
  const [menuOpen, setMenuOpen] = useState(false);

  const value = { demo, setDemo, menuOpen, setMenuOpen };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
