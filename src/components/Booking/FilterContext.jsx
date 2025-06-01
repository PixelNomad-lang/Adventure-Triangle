// src/context/FilterContext.js
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeContinent, setActiveContinent] = useState("All");

  return (
    <FilterContext.Provider
      value={{ activeFilter, setActiveFilter, activeContinent, setActiveContinent }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
