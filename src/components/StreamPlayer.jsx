


import { useStreamStore } from "../store/streamStore"

export default function StreamPlayer({ id }) {

  const remove = useStreamStore((s) => s.removeStream)

  return (
    <div className="relative bg-black rounded-xl overflow-hidden shadow-lg">

      <button
        onClick={() => remove(id)}
        className="absolute top-2 right-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded"
      >
        ✕
      </button>

      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
        allow="autoplay; fullscreen"
        allowFullScreen
      />

    </div>
  )
}