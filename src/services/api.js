import axios from "axios"
const API_URL = "https://live.sudaksh.in/live"

export async function fetchStreams() {
  const res = await axios.get(API_URL)
  return res.data
}