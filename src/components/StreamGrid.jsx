import { useStreamStore } from "../store/streamStore"
import StreamPlayer from "./StreamPlayer"

export default function StreamGrid() {

  const streams = useStreamStore((s) => s.activeStreams)

  const count = streams.length || 1

  const containerWidth = window.innerWidth
  const containerHeight = window.innerHeight - 48

  let bestLayout = { cols: 1, rows: 1, width: 0, height: 0 }

  for (let cols = 1; cols <= count; cols++) {
    const rows = Math.ceil(count / cols)

    const maxWidth = containerWidth / cols
    const maxHeight = containerHeight / rows

    let width = maxWidth
    let height = width * (9 / 16)

    if (height > maxHeight) {
      height = maxHeight
      width = height * (16 / 9)
    }

    // 🔥 IMPORTANT: shrink slightly to avoid overflow
    width = Math.floor(width) - 2
    height = Math.floor(height) - 2

    if (width * height > bestLayout.width * bestLayout.height) {
      bestLayout = { cols, rows, width, height }
    }
  }

  return (
    <div className="w-full h-full overflow-hidden bg-black flex flex-wrap justify-center items-center">

      {streams.map((id) => (
        <div
          key={id}
          style={{
            width: bestLayout.width,
            height: bestLayout.height
          }}
        >
          <StreamPlayer id={id} />
        </div>
      ))}

    </div>
  )
}