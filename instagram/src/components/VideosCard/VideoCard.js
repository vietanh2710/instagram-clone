import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "../VideoHeader/VideoHeader";
import VideoFooter from "../VideoFooter/VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="if reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default VideoCard;
