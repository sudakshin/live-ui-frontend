import { useStreamStore } from "../store/streamStore"
import { extractChannelName } from "../utils/channelName"

export default function Sidebar() {

  const channels = useStreamStore((s) => s.channels)
  const toggleStream = useStreamStore((s) => s.toggleStream)
  const active = useStreamStore((s) => s.activeStreams)

  const sortedChannels = [...channels].sort((a, b) => b.is_live - a.is_live)

  return (
    <div className="w-72 bg-gray-950 border-r border-gray-800 h-screen overflow-y-auto">

      <div className="p-4 text-sm font-semibold border-b border-gray-800">
        Live Channels
      </div>

      <div className="p-3 space-y-4">

        {sortedChannels.map((ch, i) => {

          const name = extractChannelName(ch.channel)
          const isLive = ch.is_live
          const streams = ch.live_urls || []

          return (
            <div key={i}>

              {/* CHANNEL */}
              <div className="flex items-center gap-2 text-sm mb-1">

                <div
                  className={`w-2 h-2 rounded-full ${
                    isLive ? "bg-red-500" : "bg-gray-600"
                  }`}
                />

                <span className="truncate">{name}</span>

              </div>

              {/* STREAMS */}
              {isLive && streams.slice(0, 6).map((id, idx) => {

                const selected = active.includes(id)

                return (
                  <button
                    key={idx}
                    onClick={() => toggleStream(id)}
                    className={`block ml-4 text-xs px-2 py-1 rounded mt-1 w-full text-left
                      ${
                        selected
                          ? "bg-red-500 text-white"
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                  >
                    Stream {idx + 1}
                  </button>
                )
              })}

            </div>
          )
        })}

      </div>
    </div>
  )
}