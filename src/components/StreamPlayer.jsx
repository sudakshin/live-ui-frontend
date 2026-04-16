import { useStreamStore } from "../store/streamStore"

export default function StreamPlayer({ id }) {

  const remove = useStreamStore((s) => s.removeStream)

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">

      <button
        onClick={() => remove(id)}
        className="absolute top-1 right-1 z-10 bg-black/60 text-white text-xs px-1 py-0.5 rounded"
      >
        ✕
      </button>

      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
        allow="autoplay; fullscreen"
        allowFullScreen
      />

    </div>
  )
}