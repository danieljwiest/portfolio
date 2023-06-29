import { Dispatch, SetStateAction } from "react";

export interface NavLinkData {
  label: string;
  link: string;
}

export type NavLinkContextType = [
  navLinks: NavLinkData[] | null,
  setNavLinks: Dispatch<SetStateAction<NavLinkData[] | null>>
];
