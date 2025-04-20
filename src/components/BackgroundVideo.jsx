import React, { useEffect, useRef } from 'react';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; 
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
