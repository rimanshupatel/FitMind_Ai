"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  RepeatIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { musicData } from "../lib/musicData";

type Category = keyof typeof musicData;

const MindWellnessMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [category, setCategory] = useState<Category>("meditation");
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const tracks = musicData[category];
  const currentTrack = tracks[trackIndex];

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => (isPlaying ? pauseAudio() : playAudio());

  const toggleLoop = () => {
    if (audioRef.current) {
      const newLoop = !isLoop;
      audioRef.current.loop = newLoop;
      setIsLoop(newLoop);
    }
  };

  const changeCategory = (newCategory: Category) => {
    pauseAudio();
    setCategory(newCategory);
    setTrackIndex(0);
  };

  const nextTrack = () => {
    pauseAudio();
    setTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    pauseAudio();
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  return (
    <div className="backdrop-blur-2xl bg-background/70 border border-white/30 rounded-3xl shadow-[0_0_80px_rgba(135,206,250,0.6)] p-10 w-full max-w-3xl mx-auto text-white text-center space-y-6 animate-fadeIn transition-all duration-500">
      <h2 className="text-4xl font-extrabold drop-shadow-md tracking-wide text-white">
        🎧 Mind Wellness Player
      </h2>
      <p className="text-md tracking-wider text-white/70 font-medium">
        Category:{" "}
        <span className="text-white font-semibold">
          {category.toUpperCase()}
        </span>
      </p>

      <div className="flex justify-center gap-3 flex-wrap">
        {Object.keys(musicData).map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat as Category)}
            className={`px-5 py-2 text-sm rounded-full transition-all duration-300 shadow-inner hover:scale-105 ${
              cat === category
                ? "bg-white text-black font-semibold"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="text-2xl font-bold italic">{currentTrack.title}</div>
      <audio ref={audioRef} src={currentTrack.url} preload="auto" />

      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={prevTrack}
          className="bg-white/20 hover:bg-white/30 transition-all p-4 rounded-full shadow-lg"
        >
          <SkipBackIcon className="w-6 h-6" />
        </button>
        <button
          onClick={togglePlay}
          className="bg-white/20 hover:bg-white/40 p-5 rounded-full transition-all shadow-xl ring-2 ring-white/20"
        >
          {isPlaying ? (
            <PauseIcon className="w-7 h-7" />
          ) : (
            <PlayIcon className="w-7 h-7" />
          )}
        </button>
        <button
          onClick={nextTrack}
          className="bg-white/20 hover:bg-white/30 transition-all p-4 rounded-full shadow-lg"
        >
          <SkipForwardIcon className="w-6 h-6" />
        </button>
        <button
          onClick={toggleLoop}
          className={`transition-all p-4 rounded-full ${
            isLoop
              ? "bg-green-500 shadow-xl"
              : "bg-white/20 hover:bg-white/30 shadow-md"
          }`}
        >
          <RepeatIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MindWellnessMusic;
