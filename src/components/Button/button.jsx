import React, { useEffect, useState, useRef } from "react";
import "./button.css";

export default function SoundButton({
  tecla,
  isOn,
  soundName,
  url,
  setCurrentSound
}) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    audioRef.current.play();
    setCurrentSound(soundName);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Verifica si la tecla presionada coincide con la tecla asociada al botón
      if (e.key.toUpperCase() === tecla) {
        setIsKeyPressed(true);
        audioRef.current.play();
        setCurrentSound(soundName);
      }
    };

    const handleKeyUp = (e) => {
      // Verifica si la tecla liberada coincide con la tecla asociada al botón
      if (e.key.toUpperCase() === tecla) {
        setIsKeyPressed(false);
      }
    };

    // Agrega los escuchadores de eventos a nivel de componente
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Limpia los escuchadores de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [tecla, setCurrentSound, soundName, url]);

  return (
    <button
      disabled={!isOn}
      onClick={handleButtonClick}
      id={url}
      className={`drum-pad tecla ${tecla} ${
        isKeyPressed ? "tecla-activa" : ""
      }`}
    >
      {tecla}
      <audio
        ref={audioRef}
        id={tecla}
        className="clip"
        src={`https://s3.amazonaws.com/freecodecamp/drums/${url}.mp3`}
      ></audio>
    </button>
  );
}
