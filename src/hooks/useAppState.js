import { create } from "zustand";

export const useAppState = create((set) => ({
  error: null,
  setError: (v) => set({ error: v }),

  loading: true,
  setLoading: (v) => set({ loading: v }),

  sortBy: "Alphabet",
  setSortBy: (v) => set({ sortBy: v }),

  search: "",
  setSearch: (v) => set({ search: v }),
}));
