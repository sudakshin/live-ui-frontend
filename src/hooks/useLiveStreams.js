


import { useEffect } from "react"
import { fetchStreams } from "../services/api"
import { useStreamStore } from "../store/streamStore"

export default function useLiveStreams() {

  const setChannels = useStreamStore((s) => s.setChannels)

  async function load() {
    try {
      const data = await fetchStreams()

      console.log("API RESPONSE:", data)

      setChannels(data.data.results)

    } catch (e) {
      console.error("API ERROR", e)
    }
  }

  useEffect(() => {

    load()

    const interval = setInterval(load, 30000)

    return () => clearInterval(interval)

  }, [])
}