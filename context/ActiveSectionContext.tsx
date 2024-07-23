"use client";

import type { SectionNameType } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderPropsType = { children: React.ReactNode };
type ActiveSectionContextType = {
  activeSection: SectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderPropsType) {
  const [activeSection, setActiveSection] = useState<SectionNameType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //disable the observer for 1 sec when user click on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
//custom hook for context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }

  return context;
}
