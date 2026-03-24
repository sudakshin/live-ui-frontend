export function extractChannelName(url) {
  try {
    const u = new URL(url)

    if (u.pathname.startsWith("/@")) {
      return u.pathname.replace("/@", "")
    }

    if (u.pathname.includes("/channel/")) {
      return u.pathname.split("/channel/")[1].slice(0, 10)
    }

    return u.hostname
  } catch {
    return url
  }
}