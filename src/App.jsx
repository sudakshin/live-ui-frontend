import { useState } from "react"
import Sidebar from "./components/Sidebar"
import StreamGrid from "./components/StreamGrid"
import useLiveStreams from "./hooks/useLiveStreams"
import { useStreamStore } from "./store/streamStore"

export default function App() {

  useLiveStreams()

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const setLayout = useStreamStore((s) => s.setLayout)

  return (
    <div className="flex bg-gray-900 text-white h-screen">

      {sidebarOpen && <Sidebar />}

      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <div className="h-12 border-b border-gray-800 flex items-center px-4 gap-3">

          {/* HAMBURGER */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-xl bg-gray-800 px-2 py-1 rounded hover:bg-gray-700"
          >
            ☰
          </button>

          <span>Live Study Streams</span>

          {/* LAYOUT CONTROLS */}
          <div className="flex gap-2 ml-auto">
            {[2, 3, 4, 6].map((n) => (
              <button
                key={n}
                onClick={() => setLayout(n)}
                className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-gray-700"
              >
                {n}x
              </button>
            ))}
          </div>

        </div>

        <StreamGrid />

      </div>
    </div>
  )
}