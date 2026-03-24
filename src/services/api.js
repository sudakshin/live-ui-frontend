import axios from "axios"

const API_URL = "/api/live"

export async function fetchStreams() {
  const res = await axios.get(API_URL)
  return res.data
}