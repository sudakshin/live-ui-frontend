export function extractChannelName(url) {
  try {
    const u = new URL(url)

    // @username format
    if (u.pathname.startsWith("/@")) {
      return u.pathname.replace("/@", "")
    }

    // /channel/ID format
    if (u.pathname.includes("/channel/")) {
      return "Channel " + u.pathname.split("/channel/")[1].slice(0, 6)
    }

    // fallback
    return u.hostname

  } catch {
    return "Unknown"
  }
}