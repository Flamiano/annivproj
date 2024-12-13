import React, { useState, useRef, useEffect } from 'react';
import music from '../assets/audio.mp3'; // Adjust path based on your file location

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Track if music is playing
  const audioRef = useRef(null); // Reference for the audio element

  // Toggle music play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true; // Loop the music
    }
  }, []);

  return (
    <div className="relative">
      {/* Audio player without autoplay */}
      <audio
        ref={audioRef}
        src={music}
        loop
        onEnded={() => { if (isPlaying) audioRef.current.play(); }} // Loop music if it's on
      />
      
      {/* Fixed position button on the right side */}
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <button 
          onClick={togglePlayPause} 
          className="py-[2px] mt-5 bg-[#CFCBCE] text-[#171717] w-[5rem] px-2 rounded-lg">
          {isPlaying ? 'Off ♫' : 'On ♫'}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
