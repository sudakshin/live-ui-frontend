export default function YoutubePlayer({ url }) {

  const id = new URL(url).searchParams.get("v")

  return (
    <iframe
      className="w-full h-full aspect-video"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  )
}