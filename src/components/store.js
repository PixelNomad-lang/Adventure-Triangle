import { create } from 'zustand'

// Create the store
const useStore = create((set) => ({
  hoveredZone: null,
  setHoveredZone: (zone) => set({ hoveredZone: zone }),
}))

// Explicit named export
export { useStore }  // <-- This is the crucial line