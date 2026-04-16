

import { useStreamStore } from "../store/streamStore"
import StreamPlayer from "./StreamPlayer"

export default function StreamGrid() {

  const streams = useStreamStore((s) => s.activeStreams)

  return (
    <div
      // className="p-4 w-full h-full overflow-auto grid gap-4"
      className="p-4 w-full h-full overflow-auto grid gap-4 auto-rows-[220px]"
      // style={{
      //   gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))"
      // }}
      style={{
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
}}
    >
      {streams.map((id) => (
        <StreamPlayer key={id} id={id} />
      ))}
    </div>
  )
}