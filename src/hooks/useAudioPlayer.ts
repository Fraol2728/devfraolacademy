import { useEffect, useRef, useState } from "react";

export function useAudioPlayer(musicUrl) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.preload = "auto";

    const handleCanPlay = () => setIsAudioReady(true);
    audioRef.current.addEventListener("canplaythrough", handleCanPlay);

    return () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
      audioRef.current = null;
    };
  }, [musicUrl]);

  const toggle = () => {
    if (!audioRef.current || !isAudioReady) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsPlaying((prev) => !prev);
  };

  return { isPlaying, isAudioReady, toggle };
}
