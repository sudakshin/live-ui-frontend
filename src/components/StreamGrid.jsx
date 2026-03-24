// import { useStreamStore } from "../store/streamStore"
// import StreamPlayer from "./StreamPlayer"

// export default function StreamGrid() {

//   const streams = useStreamStore((s) => s.activeStreams)

//   return (
//     <div className="grid gap-3 p-4 w-full h-screen overflow-auto
//       grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

//       {streams.map((url, i) => (
//         <StreamPlayer key={url} url={url} />
//       ))}

//     </div>
//   )
// }


import { useStreamStore } from "../store/streamStore"
import StreamPlayer from "./StreamPlayer"

export default function StreamGrid() {

  const streams = useStreamStore((s) => s.activeStreams)

  return (
    <div
      className="p-4 w-full h-full overflow-auto grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))"
      }}
    >
      {streams.map((id) => (
        <StreamPlayer key={id} id={id} />
      ))}
    </div>
  )
}