import React, { useState } from 'react';
import './VideoPlayerStyles.css'

function VideoPlayer({src, width }) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = React.createRef();

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current.pause();
  };

  return (
    <div 
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width }}
    >
      <video 
        ref={videoRef}
        src={src}
        muted
        loop
        preload="auto"
        style={{ width: '100%'}} // Set the video element's width and height to 100% of its container
      />
      {!isHovering && (
        <div className="play-icon">
          <i className="fas fa-play" />
        </div>
      )}
    </div>
  );
}
export default VideoPlayer;