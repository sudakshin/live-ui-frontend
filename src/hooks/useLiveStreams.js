import { useStreamStore } from "../store/streamStore"
import { useEffect } from "react"
import { fetchStreams } from "../services/api"

export default function useLiveStreams() {

  const setChannels = useStreamStore((s) => s.setChannels)

  async function load() {
    try {
      const data = await fetchStreams()

      console.log("API RESPONSE:", data)

      setChannels(data.data.results)

      // /////////////////
      const store = useStreamStore.getState()

const firstStreams = results
  .filter(c => c.is_live)
  .flatMap(c => c.live_urls)
  .slice(0, 6)

store.activeStreams = firstStreams


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