import { create } from "zustand"

export const useStreamStore = create((set) => ({
  channels: [],
  activeStreams: [],
  layout: 3, // default columns

  setChannels: (channels) => set({ channels }),

  setLayout: (cols) => set({ layout: cols }),

  toggleStream: (id) =>
    set((state) => {
      const exists = state.activeStreams.includes(id)

      return {
        activeStreams: exists
          ? state.activeStreams.filter((s) => s !== id)
          : [...state.activeStreams, id]
      }
    }),

  removeStream: (id) =>
    set((state) => ({
      activeStreams: state.activeStreams.filter((s) => s !== id)
    }))
}))