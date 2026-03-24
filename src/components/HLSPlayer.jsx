import { useEffect, useRef } from "react"
import Hls from "hls.js"

export default function HLSPlayer({ url }) {

  const videoRef = useRef(null)

  useEffect(() => {

    const video = videoRef.current
    if (!video) return

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url
      return
    }

    if (Hls.isSupported()) {

      const hls = new Hls({
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 10,
        enableWorker: true,
        lowLatencyMode: true
      })

      hls.loadSource(url)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })

      return () => {
        hls.destroy()
      }
    }

  }, [url])

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      muted
      playsInline
      className="w-full h-full bg-black"
    />
  )
}