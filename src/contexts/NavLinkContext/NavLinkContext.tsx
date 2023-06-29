//TODO: fix logo css to match the navbar text color
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { NavLinkContextType, NavLinkData } from "./NavLinkContext.types";

export const NavLinkContext = createContext<NavLinkContextType | null>(null);

export const NavLinkProvider = ({ children }: PropsWithChildren<object>) => {
  const value = useState<NavLinkData[] | null>(null);

  return (
    <NavLinkContext.Provider value={value}>{children}</NavLinkContext.Provider>
  );
};

export const useNavLinkContext = () => {
  const context = useContext(NavLinkContext);

  if (!context) {
    throw new Error(
      "useNavLinkContext must be used inside the NavLinkProvider"
    );
  }
  return context;
};
