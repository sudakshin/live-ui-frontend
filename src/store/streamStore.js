// import { create } from "zustand"

// export const useStreamStore = create((set) => ({
//   channels: [],
//   activeStreams: [],

//   setChannels: (channels) => set({ channels }),

//   toggleStream: (url) =>
//     set((state) => {
//       const exists = state.activeStreams.includes(url)

//       return {
//         activeStreams: exists
//           ? state.activeStreams.filter((s) => s !== url)
//           : [...state.activeStreams, url]
//       }
//     }),

//   removeStream: (url) =>
//     set((state) => ({
//       activeStreams: state.activeStreams.filter((s) => s !== url)
//     }))
// }))






import { create } from "zustand"

export const useStreamStore = create((set) => ({
  channels: [],
  activeStreams: [],

  setChannels: (channels) => set({ channels }),

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