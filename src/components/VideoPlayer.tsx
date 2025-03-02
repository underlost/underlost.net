import { useState } from "react"
import BackgroundPlayer from "next-video/background-player"

const videoList = [
  `https://underlost.net/video/web_reel_1.mp4`,
  `https://underlost.net/video/web_reel_2.mp4`,
]

export default function VideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex + 1 < videoList.length ? prevIndex + 1 : 0
    )
  }

  return (
    <BackgroundPlayer
      key={currentVideoIndex} // Forces re-render on src change
      src={videoList[currentVideoIndex]}
      poster="/images/video-placeholder.jpg"
      className="object-cover object-center h-full absolute inset-0"
      onEnded={handleVideoEnd} // Trigger next video on end
    />
  )
}
