import React, { createContext, useState, useRef } from 'react';


export const VideoContext = createContext();


export const VideoProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  const saveCurrentTime = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const restoreCurrentTime = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
      videoRef.current.play();
    }
  };

  return (
    <VideoContext.Provider value={{ videoRef, saveCurrentTime, restoreCurrentTime }}>
      {children}
    </VideoContext.Provider>
  );
};
