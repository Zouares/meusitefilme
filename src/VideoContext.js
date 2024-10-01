import React, { createContext, useState, useRef } from 'react';

// Crie o contexto
export const VideoContext = createContext();

// Provedor do contexto para gerenciar o vídeo
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
