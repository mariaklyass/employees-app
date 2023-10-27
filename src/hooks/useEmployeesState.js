import { create } from "zustand";

export const useEmployeesState = create((set) => ({
  employees: [],
  // setEmployees: (v) => set({ employees: v }),
  displayedEmployees: [],
  setDisplayedEmployees: (v) => set({ displayedEmployees: v }),
}));
