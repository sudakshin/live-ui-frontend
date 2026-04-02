import { useStreamStore } from "../store/streamStore"
import { extractChannelName } from "../utils/channelName"

export default function Sidebar() {

  const channels = useStreamStore((s) => s.channels)
  const toggleStream = useStreamStore((s) => s.toggleStream)
  const active = useStreamStore((s) => s.activeStreams)

  return (
    <div className="w-72 bg-gray-950 border-r border-gray-800 h-screen overflow-y-auto">

      <div className="p-4 text-lg font-semibold border-b border-gray-800">
        Live Channels
      </div>

      <div className="p-3 space-y-4">

        {channels.map((ch, i) => {

          const name = extractChannelName(ch.channel)

          return (
            <div key={i}>

              <div className="flex items-center gap-2 text-sm mb-1">

                <div
                  className={`w-2 h-2 rounded-full ${ch.is_live ? "bg-green-400" : "bg-gray-600"
                    }`}
                />

                <span className="font-medium">
                  {name}
                </span>

              </div>


              {ch.is_live &&
                ch.live_urls.map((id, idx) => {

                  const selected = active.includes(id)

                  return (
                    <button
                      key={idx}
                      onClick={() => toggleStream(id)}
                      className={`block ml-4 text-xs px-2 py-1 rounded mt-1
          ${selected
                          ? "bg-green-500 text-black"
                          : "bg-gray-800 hover:bg-gray-700"}
        `}
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